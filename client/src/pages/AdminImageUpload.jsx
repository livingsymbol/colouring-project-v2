import { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import Heading from "../components/Heading";

const folderOptions = {
    gallery: "Images for inspiration",
    errors: "Images to harmonize",
};

export default function AdminImageUpload() {
    const [folder, setFolder] = useState("gallery");
    const [images, setImages] = useState([]);
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchImages();
    }, [folder]);

    const fetchImages = async () => {
        try {
            const res = await axios.get(`/api/images/${folder}`);
            setImages(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;
        const formData = new FormData();
        formData.append("image", file);
        formData.append("folder", folder);
        await axios.post("/api/images/upload", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        setFile(null);
        fetchImages();
    };

    const handleDelete = async (publicId) => {
        await axios.delete(`/api/images/${folder}/${publicId}`);
        fetchImages();
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
                    >
                        {Object.entries(folderOptions).map(([value, label]) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upload Form */}
                <form onSubmit={handleUpload} className="flex items-center gap-4">
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="border p-2 rounded-md"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-[#d5af3c] text-white rounded-md"
                    >
                        Upload
                    </button>
                </form>

                {/* Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
                    {images.map((img) => {
                        const publicId = img.public_id.split("/").pop();
                        return (
                            <div
                                key={img.public_id}
                                className="relative border rounded-md overflow-hidden group"
                            >
                                <img src={img.secure_url} alt="uploaded" className="w-full" />
                                <button
                                    onClick={() => handleDelete(publicId)}
                                    className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
