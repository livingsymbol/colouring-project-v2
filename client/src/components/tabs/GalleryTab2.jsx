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
import Typography from "@mui/material/Typography";
import { useLocale } from "../../context/LocaleContext";

// EN text
const galleryTab2ContentEn = {
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Which Symbols are correct, and which are not? What criteria should be used to evaluate them? Applying what you have learned, you may bring any of these colourings closer to harmony. What resonates with you and why?",
                },
            ],
        },
        { type: "hardBreak" },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "You are welcome to share colourings of your choice with changes and comments for anonymous publishing in the “Forum & your colourings” section. Please clarify which image you are bringing closer to harmony by mentioning the image number. Then send it to: ",
                },
            ],
        },
        {
            type: "text",
            marks: [{ type: "underline" }],
            text: "livingsymbol@aol.com",
        },
    ],
};

// RU text
const galleryTab2ContentRu = {
    type: "doc",
    content: [
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Какие Символы являются «правильными», а какие — нет?",
                },
            ],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: " Какие критерии использовать для их оценки? ",
                },
            ],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Применив всё, что вы узнали, вы можете приблизить любую из раскрасок к гармонии. Что откликается в вас и почему?",
                },
            ],
        },
        {
            type: "paragraph",
            content: [
                {
                    type: "text",
                    text: "Вы можете поделиться выбранными вами раскрасками с изменениями и комментариями для анонимной публикации в разделе «Форум и ваши раскраски». Пожалуйста, укажите номер изображения, которое вы приближаете к гармонии. Отправляйте на: ",
                },
            ],
        },
        {
            type: "text",
            marks: [{ type: "underline" }],
            text: "livingsymbol@aol.com",
        },
    ],
};

export default function GalleryTab2() {
    const { locale } = useLocale();

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [idx, setIdx] = useState(0);


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/page/errors`
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
            {/* Conditional content based on locale */}
            <RichTextRenderer
                content={locale === "ru" ? galleryTab2ContentRu : galleryTab2ContentEn}
            />

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
                                {locale === "ru" ? `Изображение ${i + 1}` : `Image ${i + 1}`}
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
