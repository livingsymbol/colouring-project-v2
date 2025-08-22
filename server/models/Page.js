import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema(
    {
        type: { type: String, required: true }, 
        content: { type: mongoose.Schema.Types.Mixed }, 
        className: { type: String }, 
    },
    { _id: false }
);

const TabSchema = new mongoose.Schema({
    label: { type: String, required: true },
    content: { type: mongoose.Schema.Types.Mixed }, 
    blocks: [BlockSchema], 
});


const PageSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true },
        locale: { type: String, required: true },
        title: { type: String },
        tabs: [TabSchema],
    },
    { timestamps: true }
);

PageSchema.index({ slug: 1, locale: 1 }, { unique: true });

export default mongoose.model("Page", PageSchema);
