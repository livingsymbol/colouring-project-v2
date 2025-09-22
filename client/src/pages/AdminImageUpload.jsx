import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import Heading from "../components/Heading";
import { Loader2, X } from "lucide-react";
import { toast } from "react-hot-toast";

const folderOptions = {
    gallery: "Images for inspiration",
    errors: "Images to harmonize",
};

export default function AdminImageUpload() {
    const [folder, setFolder] = useState("gallery");
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
    const [loading, setLoading] = useState(false);

    const token = localStorage.getItem("token");
    const API_URL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        fetchImages();
    }, [folder]);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${API_URL}/admin/upload/${folder}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            let imageArray = [];
            if (res.data) {
                if (Array.isArray(res.data)) {
                    imageArray = res.data;
                } else if (res.data.resources && Array.isArray(res.data.resources)) {
                    imageArray = res.data.resources;
                }
            }
            setImages(imageArray);
        } catch (err) {
            console.error("Fetch error:", err);
            toast.error("Failed to load images");
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        setLoading(true);

        const formData = new FormData();
        formData.append("image", file);
        formData.append("folder", folder);

        try {
            await axios.post(`${API_URL}/admin/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Image uploaded successfully");
            setFile(null);
            setPreview("");
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = "";
            fetchImages();
        } catch (err) {
            console.error("Upload error:", err);
            toast.error("Failed to upload image");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (publicId) => {
        if (!confirm("Are you sure you want to delete this image?")) return;

        setLoading(true);
        try {
            await axios.delete(`${API_URL}/admin/upload/${folder}/${publicId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            toast.success("Image deleted successfully");
            fetchImages();
        } catch (err) {
            console.error("Delete error:", err);
            toast.error("Failed to delete image");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        setFile(selected);
        if (selected) {
            setPreview(URL.createObjectURL(selected));
        } else {
            setPreview("");
        }
    };

    const cancelUpload = () => {
        setFile(null);
        setPreview("");
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
    };

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />
            <div className="p-4 max-w-5xl mx-auto space-y-6">
                <Heading>Image upload</Heading>

                {/* Folder Selector */}
                <div className="flex gap-4 items-center">
                    <span className="font-medium text-gray-700">Choose folder:</span>
                    <select
                        value={folder}
                        onChange={(e) => setFolder(e.target.value)}
                        className="border p-2 rounded-md"
                        disabled={loading}
                    >
                        {Object.entries(folderOptions).map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upload Form */}
                <form onSubmit={handleUpload} className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="border p-2 rounded-md"
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={!file || loading}
                            className="px-4 py-2 bg-[#d5af3c] text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Uploading..." : "Upload"}
                        </button>
                    </div>

                    {/* Preview + Cancel */}
                    {preview && (
                        <div className="relative inline-block">
                            <img
                                src={preview}
                                alt="Preview"
                                className="w-32 h-32 object-cover rounded border"
                            />
                            <button
                                type="button"
                                onClick={cancelUpload}
                                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}
                </form>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                    {loading ? (
                        <Loader2 className="animate-spin text-[#404040]" size={32} />
                    ) : Array.isArray(images) && images.length > 0 ? (
                        images.map((img) => {
                            const publicId = img.public_id
                                ? img.public_id.split("/").pop()
                                : null;
                            if (!publicId || !img.secure_url) return null;

                            return (
                                <div
                                    key={img.public_id}
                                    className="relative border rounded-md overflow-hidden group"
                                >
                                    <img
                                        src={img.secure_url}
                                        alt="uploaded"
                                        className="w-full h-32 object-cover"
                                    />
                                    <button
                                        onClick={() => handleDelete(publicId)}
                                        disabled={loading}
                                        className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition disabled:opacity-50"
                                    >
                                        Delete
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        !loading && (
                            <div className="col-span-full text-center text-gray-500 py-8">
                                No images found in this folder
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
