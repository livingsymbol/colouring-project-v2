import { useState } from "react";
import { Play } from "lucide-react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import RichTextRenderer from "./RichTextRenderer";

export const aspirationTabContent = {
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "“Centre and four powers, white. The twelve, all of different colour in three groups: ",
                },
                { type: "hardBreak" },
                { type: "hardBreak" },
                {
                    type: "text",
                    text: "Top group red, passing to orange towards yellow. Next group, yellow passing through green towards blue. And third group, blue passing through violet towards red. If white is not convenient, the center may be gold(powder).”",
                },
                {
                    type: "paragraph",
                    attrs: { textAlign: "right" },
                    content: [
                        {
                            type: "text",
                            text: " - Sri Aurobindo",
                        },
                    ],
                },
            ],
            marks: [{ type: "italic" }],
        },
    ],
};

export default function AspirationTabTemplate({ palette, symbol }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full space-y-8">
            <div className="flex flex-col-reverse justify-center md:flex-row items-center md:justify-between gap-4 lg:gap-8">
                <button
                    onClick={() => setOpen(true)}
                    className="flex items-center justify-center w-48 cursor-pointer gap-3 px-4 py-2 border-2 border-[#d5af3c] rounded-2xl shadow-xl bg-white hover:shadow-lg transition"
                >
                    <span className="flex flex-col items-center justify-center">
                        <Play size={24} className="text-gray-600 border-2 border-[#d5af3c]" />
                        <span className="text-xs font-bold text-[#404040] mt-1">Play video</span>
                    </span>

                    <img
                        src="/images/button_image.png"
                        alt="Symbol"
                        className="w-10 h-10 object-contain shrink-0"
                    />
                </button>
                <RichTextRenderer content={aspirationTabContent} />
            </div>

            <div className="flex flex-col lg:flex-row-reverse gap-4">
                <div className="w-full lg:w-[50%]">{symbol}</div>
                <div className="w-full lg:w-[50%]">{palette}</div>
            </div>

            {/* Video Dialog */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="md"
                slotProps={{
                    paper: {
                        sx: {
                            bgcolor: "black",
                            borderRadius: { xs: 0, md: 2 },
                        },
                    },
                }}
            >
                <div className="relative w-full h-0 pb-[56.25%]">
                    {/* Close button */}
                    <IconButton
                        onClick={() => setOpen(false)}
                        aria-label="close"
                        sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 10 }}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Responsive YouTube embed */}
                    <iframe
                        src="https://www.youtube.com/embed/C_UgSQ-nphY?autoplay=1"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                    />
                </div>
            </Dialog>
        </div>
    );
}
