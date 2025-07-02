import mongoose from "mongoose";

const TabSchema = new mongoose.Schema({
    label: { type: String, required: true },      
    content: { type: mongoose.Schema.Types.Mixed, required: true },
});

const PageSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true },
        locale: { type: String, required: true },
        title: { type: String },
        sections: [TabSchema],
    },
    { timestamps: true }
);

PageSchema.index({ slug: 1, locale: 1 }, { unique: true });

export default mongoose.model("Page", PageSchema);
