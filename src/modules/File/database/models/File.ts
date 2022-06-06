import { Schema, models, model } from 'mongoose';

const FileSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    size: {
      type: Schema.Types.Number,
      required: true,
    },
    original_name: {
      type: Schema.Types.String,
      required: true,
    },
    url: {
      type: Schema.Types.String,
      required: true,
    },
    mimetype: {
      type: Schema.Types.String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

export default models.File || model('File', FileSchema);
