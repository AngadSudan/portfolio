import mongoose, { Schema, model } from "mongoose";

const updateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    attachments: {
      type: [String],
      required: true,
      default: [],
    },
  },
  { timestamps: true } 
);

const Update =
  mongoose.models.Update || model("Update", updateSchema);

export default Update;
