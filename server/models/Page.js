import mongoose from "mongoose";

const TabSchema = new mongoose.Schema({
    label: { type: String, required: true },
    content: { type: mongoose.Schema.Types.Mixed },
    hasCustomTabContent: { type: Boolean, default: false, required: false },
    customTabKey: { type: String, default: null, required: false },
});


const PageSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true },
        locale: { type: String, required: true },
        title: { type: String },
        content: { type: String },  
        order: { type: Number },  
        tabs: [TabSchema],
    },
    { timestamps: true }
);

PageSchema.index({ slug: 1, locale: 1 }, { unique: true });

PageSchema.pre("save", async function (next) {
    if (this.order != null) return next(); // don't override if already set

    try {
        const lastPage = await this.constructor.findOne({}, { order: 1 })
            .sort({ order: -1 })
            .lean();

        this.order = lastPage ? lastPage.order + 1 : 1;
        next();
    } catch (err) {
        next(err);
    }
});

export default mongoose.model("Page", PageSchema);
