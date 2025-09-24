import { useState, useEffect } from "react";
import { Loader2, X, Upload, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";

const folderOptions = {
    gallery: "Images for inspiration",
    errors: "Images to harmonize",
};

export default function AdminImageUpload() {
    const [folder, setFolder] = useState("gallery");
    const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]); // ✅ store array of base64 strings
    const [previews, setPreviews] = useState([]); // ✅ store array of preview URLs
    const [uploading, setUploading] = useState(false);
    const [deleting, setDeleting] = useState(null);
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
            toast("Failed to load images");
            setImages([]);
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        if (!selectedFiles.length) return;

        const newFiles = [];
        const newPreviews = [];

        selectedFiles.forEach((file) => {
            if (!file.type.startsWith("image/")) {
                toast("Only image files allowed");
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast("File must be < 5MB");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                newFiles.push(reader.result); // base64
                newPreviews.push(URL.createObjectURL(file));

                // ✅ after all are read, update state
                if (newFiles.length === selectedFiles.length) {
                    setFiles((prev) => [...prev, ...newFiles]);
                    setPreviews((prev) => [...prev, ...newPreviews]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    const handleUpload = async () => {
        if (!files.length) {
            toast("Please select at least one file");
            return;
        }

        setUploading(true);
        try {
            const res = await axios.post(
                `${API_URL}/admin/upload`,
                {
                    images: files, // ✅ array of base64 images
                    folder: folder,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            toast.success("Images uploaded successfully");
            resetForm();
            setTimeout(() => {
                fetchImages();
            }, 1000);
        } catch (err) {
            console.error("Upload error:", err);
            toast.error("Failed to upload images");
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (publicId) => {
        setDeleting(publicId);
        if (!confirm("Are you sure you want to delete this image?")) {
            setDeleting(null);
            return;
        }

        setLoading(true);
        try {
            const res = await axios.delete(`${API_URL}/admin/upload/${folder}/${publicId.split("/")[2]}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.data.success) toast.success("Image deleted successfully");
            else {
                toast.error("Image deletion failed");
                setDeleting(null);
            }
            setTimeout(() => {
                fetchImages();
                setDeleting(null);
            }, 1000);
        } catch (err) {
            console.error("Delete error:", err);
            toast.error("Failed to delete image");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setFiles([]);
        setPreviews([]);
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
    };

    const cancelUpload = (index) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
        setPreviews((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />

            <div className="p-4 max-w-5xl mx-auto space-y-6">
                {/* Folder Selector */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex gap-4 items-center">
                        <span className="font-medium text-gray-700">Choose tab:</span>
                        <select
                            value={folder}
                            onChange={(e) => setFolder(e.target.value)}
                            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            disabled={uploading || loading}
                        >
                            {Object.entries(folderOptions).map(([value, label]) => (
                                <option key={value} value={value}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Upload Form */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">Upload New Images</h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleFileChange}
                                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                disabled={uploading || loading}
                            />

                            <button
                                onClick={handleUpload}
                                disabled={!files.length || uploading || loading}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {uploading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Uploading...
                                    </>
                                ) : (
                                    <>
                                        <Upload size={20} />
                                        Upload
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Previews + Cancel */}
                        <div className="flex gap-4 flex-wrap">
                            {previews.map((preview, index) => (
                                <div key={index} className="relative inline-block">
                                    <img
                                        src={preview}
                                        alt="Preview"
                                        className="w-32 h-32 object-cover rounded border shadow"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => cancelUpload(index)}
                                        className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                                    >
                                        <X size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Images Grid */}
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold mb-4">
                        Current Images ({folder === 'gallery' ? 'Images for inspiration' : 'Images to harmonize'})
                    </h2>

                    {loading ? (
                        <div className="flex justify-center py-8">
                            <Loader2 className="animate-spin text-gray-500" size={32} />
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {Array.isArray(images) && images.length > 0 ? (
                                images.map((img) => {
                                    return (
                                        <div
                                            key={img.public_id}
                                            className="relative border border-gray-200 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
                                        >
                                            <img
                                                src={img.secure_url}
                                                alt="uploaded"
                                                className="w-full h-auto object-cover"
                                            />
                                            <button
                                                onClick={() => handleDelete(img.public_id)}
                                                disabled={deleting === img.public_id}
                                                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-700 disabled:opacity-50"
                                                title="Delete image"
                                            >
                                                {deleting === img.public_id ? (
                                                    <Loader2 className="animate-spin" size={16} />
                                                ) : (
                                                    <Trash2 size={16} />
                                                )}
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="col-span-full text-center text-gray-500 py-8">
                                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                                    <p>No images found in this folder</p>
                                    <p className="text-sm">Upload your first image above</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}