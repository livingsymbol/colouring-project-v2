import { useEffect, useState } from "react";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function GlobalVideoPlayer() {
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        const handler = (e) => {
            const el = e.target.closest("[data-video-url]");
            if (!el) return;

            e.preventDefault();
            setVideoUrl(el.dataset.videoUrl);
        };

        document.addEventListener("click", handler);
        return () => document.removeEventListener("click", handler);
    }, []);

    return (
        <Dialog
            open={Boolean(videoUrl)}
            onClose={() => setVideoUrl(null)}
            maxWidth="md"
            fullWidth
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


                <IconButton
                    onClick={() => setVideoUrl(null)}
                    aria-label="close"
                    sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 10 }}
                >
                    <CloseIcon />
                </IconButton>

                {videoUrl && (
                    <iframe
                        src={videoUrl}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                    />
                )}
            </div>
        </Dialog>
    );
}
