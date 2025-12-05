import mongoose, { Schema, model } from "mongoose";

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    thumbnail: {
      type: String,
      required: true,
    },

    github_link: {
      type: String,
      required: true,
    },

    live_link: {
      type: String,
      default: null,
    },
  },
  { timestamps: true } 
);

const Project =
  mongoose.models.Project || model("Project", projectSchema);

export default Project;
