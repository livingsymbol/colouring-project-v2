import { Schema, model } from 'mongoose';

const publishedImagesSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        url: {
            type: String,
            required: true,
            trim: true,
        },
        comment: {
            type: String,
            trim: true,
        },
        tab: {
            type: String,
            required: true,
            trim: true,
        },
        isImageApproved: {
            type: Boolean,
            default: false,
        },
        isCommentApproved: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export default model("PublishedImage", publishedImagesSchema);
