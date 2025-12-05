import mongoose, { Schema, model } from "mongoose";

const blockSchema = new Schema(
  {
    blog_type: {
      type: String,
      enum: ["paragraph", "callout", "image"],
      required: true,
    },
    text: {
      type: String,
      required: function () {
        return this.blog_type === "paragraph" || this.blog_type === "callout";
      },
    },
    caption: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: function () {
        return this.blog_type === "image";
      },
    },
  },
  { _id: false }
);

const blogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
    },
    blocks: {
      type: [blockSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || model("Blog", blogSchema);
export default Blog;

