import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RichTextRenderer from "../RichTextRenderer";
import Grid from "@mui/material/Grid"; // v6 Grid (Grid v2)
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useLocale } from "../../context/LocaleContext";

const contentMap = {
    en: {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "Get inspired by the work of others done with sincerity, aspiration, love and surrender to The Mother. Some shared powerful inner experiences that were triggered by the symbols. On the Supramental level, there is no separation — all is united in the One. Separation begins only at the Overmind level. To illustrate this, we designed small symbols on each golden petal to signify the all-encompassing nature of the Supramental, while also indicating the varying levels of consciousness (Overmind).",
                    },
                ],
            },
        ],
    },
    ru: {
        type: "doc",
        content: [
            {
                type: "paragraph",
                content: [
                    {
                        type: "text",
                        text: "Вдохновляйтесь работой других, проделанной с искренностью, устремлённостью, любовью и преданностью Матери. Некоторые поделились мощными внутренними переживаниями, вызванными символами. На супраментальном уровне нет разделения — всё едино в Едином. Разделение начинается только на уровне Надразума. Чтобы проиллюстрировать это, мы создали небольшие символы на каждом золотом лепестке, символизирующие всеобъемлющую природу Супраментального, а также указывающие на различные уровни сознания (Надразум).",
                    },
                ],
            },
        ],
    },
};

export default function GalleryTab1() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);

    const { locale } = useLocale(); // en or ru
    const theme = useTheme();

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/page/gallery`
                );
                setImages(res.data || []);
            } catch (e) {
                console.error("Failed to fetch images", e);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const handleOpen = useCallback((i) => {
        setIdx(i);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => setOpen(false), []);

    // Keyboard nav (←/→) while dialog open
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (!images.length) return;
            if (e.key === "ArrowRight") setIdx((p) => (p + 1) % images.length);
            if (e.key === "ArrowLeft")
                setIdx((p) => (p - 1 + images.length) % images.length);
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [open, images.length]);

    return (
        <div className="w-full">
            <RichTextRenderer content={contentMap[locale] || contentMap.en} />

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid
                    container
                    spacing={2}
                    sx={{ mt: 4 }}
                    columns={{ xs: 2, sm: 3, md: 4, lg: 5 }}
                >
                    {images.map((url, i) => (
                        <Grid key={i} size={1}>
                            <Box
                                onClick={() => handleOpen(i)}
                                sx={{
                                    position: "relative",
                                    pt: "100%", // square cell
                                    borderRadius: 2,
                                    overflow: "hidden",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    cursor: "pointer",
                                }}
                            >
                                <img
                                    src={url}
                                    alt={`Gallery item ${i + 1}`}
                                    loading="lazy"
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseOver={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.05)")
                                    }
                                    onMouseOut={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                />
                            </Box>
                            {/* Number below image */}
                            <Typography
                                variant="body2"
                                align="center"
                                sx={{ mt: 1, fontWeight: "bold" }}
                            >
                                {i + 1}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            )}

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xl"
                PaperProps={{
                    sx: {
                        bgcolor: "black",
                        borderRadius: 2,
                        overflow: "hidden",
                    },
                }}
            >
                <DialogContent
                    sx={{
                        p: 0,
                        bgcolor: "black",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: "white",
                            zIndex: 10,
                        }}
                        aria-label="Close"
                    >
                        <CloseIcon />
                    </IconButton>

                    {images[idx] && (
                        <>
                            <img
                                src={images[idx]}
                                alt={`Selected ${idx + 1}`}
                                style={{
                                    maxWidth: "90vw",
                                    maxHeight: "80vh",
                                    objectFit: "contain",
                                }}
                            />
                            <Typography
                                variant="body1"
                                sx={{
                                    color: "white",
                                    mt: 1,
                                    mb: 2,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {idx + 1} / {images.length}
                            </Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
