import { useEffect, useState } from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    CircularProgress,
} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import axios from "axios";
import toast from "react-hot-toast";
import { authHeaders } from "../utils/authHeaders";

export default function PageReorderModal({ open, onClose }) {
    const [pages, setPages] = useState([]);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (open) loadPages();
    }, [open]);

    async function loadPages() {
        setLoading(true);
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/page/list-with-order`
            );
            setPages(res.data);
        } catch (err) {
            console.error(err);
            toast.error("Unable to fetch pages");
        } finally {
            setLoading(false);
        }
    }

    function handleDragEnd(result) {
        if (!result.destination) return;

        const reordered = Array.from(pages);
        const [moved] = reordered.splice(result.source.index, 1);
        reordered.splice(result.destination.index, 0, moved);

        const updated = reordered.map((p, i) => ({ ...p, order: i + 1 }));
        setPages(updated);
    }

    async function saveOrder() {
        setSaving(true);
        try {
            await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/page/reorder`,
                { pages },
                { headers: authHeaders() }
            );
            toast.success("Page order updated");
            onClose();
        } catch (err) {
            console.error(err);
            toast.error("Failed to save order");
        } finally {
            setSaving(false);
        }
    }

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    width: 420,
                    bgcolor: "background.paper",
                    p: 3,
                    borderRadius: 2,
                    mx: "auto",
                    mt: "10vh",
                    boxShadow: 24,
                }}
            >
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    Rearrange Pages
                </Typography>

                {loading ? (
                    <Box className="w-full flex justify-center py-10">
                        <CircularProgress />
                    </Box>
                ) : (
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="pages">
                            {(provided) => (
                                <Box
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    sx={{ maxHeight: 350, overflowY: "auto", pr: 1 }}
                                >
                                    {pages.map((p, index) => (
                                        <Draggable
                                            key={p.slug}
                                            draggableId={p.slug}
                                            index={index}
                                        >
                                            {(provided) => (
                                                <Box
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    sx={{
                                                        p: 1.5,
                                                        mb: 1,
                                                        borderRadius: 1,
                                                        border: "1px solid #ddd",
                                                        bgcolor: "#f9f9f9",
                                                        cursor: "grab",
                                                        fontSize: 15,
                                                        fontWeight: 500,
                                                    }}
                                                >
                                                    {p.title}
                                                </Box>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </Box>
                            )}
                        </Droppable>
                    </DragDropContext>
                )}

                <Box mt={3} display="flex" justifyContent="flex-end" gap={1}>
                    <Button onClick={onClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button
                        onClick={saveOrder}
                        variant="contained"
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save Order"}
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
