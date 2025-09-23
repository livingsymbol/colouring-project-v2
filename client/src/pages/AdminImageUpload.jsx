import { useState, useEffect } from "react";
import { Loader2, X, Upload, Trash2, ImageIcon } from "lucide-react";
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
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState("");
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

    // ✅ This is the key function - copied from your working ForumTab3
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // Validate file type
        if (!selectedFile.type.startsWith('image/')) {
            toast("Please select an image file");
            return;
        }

        // Validate file size (5MB limit)
        if (selectedFile.size > 5 * 1024 * 1024) {
            toast("File size must be less than 5MB");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            // Store the base64 data (this is what gets sent to backend)
            setFile(reader.result); // ✅ base64 string, not File object
            // Create preview URL from the original file
            setPreview(URL.createObjectURL(selectedFile));
        };
        reader.readAsDataURL(selectedFile); // ✅ Convert to base64
    };

    // ✅ Upload function using the same pattern as your working ForumTab3
    const handleUpload = async () => {
        if (!file) {
            toast("Please select a file first");
            return;
        }

        setUploading(true);
        try {
            // ✅ Send base64 data as JSON (same as ForumTab3)
            const res = await axios.post(
                `${API_URL}/admin/upload`,
                {
                    image: file, // ✅ This is base64 string
                    folder: folder
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json", // ✅ JSON, not multipart
                    },
                }
            );

            toast.success("Image uploaded successfully");
            resetForm();
            fetchImages(); // Refresh the images list
        } catch (err) {
            console.error("Upload error:", err);
            toast.error("Failed to upload image");
        } finally {
            setUploading(false);
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

    const resetForm = () => {
        setFile(null);
        setPreview("");
        // Clear the file input
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
    };

    const cancelUpload = () => {
        resetForm();
    };

    return (
        <div className="w-full min-h-screen bg-gradient">
            <AdminNavbar />

            <div className="p-4 max-w-5xl mx-auto space-y-6">
                {/* Folder Selector */}
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex gap-4 items-center">
                        <span className="font-medium text-gray-700">Choose folder:</span>
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
                    <h2 className="text-xl font-semibold mb-4">Upload New Image</h2>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                disabled={uploading || loading}
                            />

                            <button
                                onClick={handleUpload}
                                disabled={!file || uploading || loading}
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

                        {/* File info */}
                        {file && (
                            <div className="text-sm text-gray-600">
                                <p>File: {file.name}</p>
                                <p>Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                <p>Type: {file.type}</p>
                            </div>
                        )}

                        {/* Preview + Cancel */}
                        {preview && (
                            <div className="relative inline-block">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-32 h-32 object-cover rounded border shadow"
                                />
                                <button
                                    type="button"
                                    onClick={cancelUpload}
                                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
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
                                    const publicId = img.public_id
                                        ? img.public_id.split("/").pop()
                                        : null;
                                    if (!publicId || !img.secure_url) return null;

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
                                                onClick={() => handleDelete(publicId)}
                                                disabled={deleting === publicId}
                                                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-700 disabled:opacity-50"
                                                title="Delete image"
                                            >
                                                {deleting === publicId ? (
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