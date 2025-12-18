  import mongoose, { Schema, model } from "mongoose";

  const attachmentSchema = new Schema(
    {
      url: {
        type: String,
        required: true,
      },
      attachment_name: {
        type: String,
        required: true,
      },
    },
    { _id: false }
  );

  const experienceSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      attachments: {
        type: [attachmentSchema],
        default: [],
      },

      company: {
        type: String,
        required: true,
      },
      company_icon:{
        type:String,
        required:true
      },
      status: {
        type: String,
        enum: ["ongoing", "completed"],
        default: "ongoing",
      },

      job_type:{
        type:String,
        enum:["inplace","remote"]
      },
      job_classification:{
        type:String,
        enum:["internship","others","open-source"]
      },
      start_date: {
        type: Date,
        required: true,
      },

      end_date: {
        type: Date,
        required: function () {
          return this.status === "completed";
        },
      },

      job_contributions: {
        type: [String],
        required: true,
        default: [],
      },
    },
    { timestamps: true }
  );

  const Experience =
    mongoose.models.Experience || model("Experience", experienceSchema);

  export default Experience;
