import { useEffect, useState } from "react";
import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

export function ForumTab2() {
    const { locale } = useLocale();
    const tabName = "Gallery images harmonized";

    const [approvedImages, setApprovedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch approved images on component mount
    useEffect(() => {
        const fetchApprovedImages = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/image?tab=${tabName}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setApprovedImages(res.data);
                setLoading(false)
            } catch (err) {
                console.error(err);
                toast.error("Failed to fetch approved images");
            }
        };
        fetchApprovedImages();
    }, []);

    return (<>
        <Paragraph>
            {locale === "ru"
                ? "В этом разделе будут отображаться раскрашивания из раздела «Галерея — Изображения для гармонизации», которыми вы поделились с нами."
                : "This section will display colourings from the “Gallery  - Images to harmonize” section you have shared with us."}
        </Paragraph>
        <br />

        {/* Approved Images Grid */}

        {loading ? <Loader2 className="animate-spin" size={35} /> : (
            approvedImages.length > 0 && (
                <>
                    <hr />
                    <div className="mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {approvedImages.map((img) => (
                                < div key={img._id} className="border-2 rounded-lg bg-white shadow hover:shadow-lg transition inline-block" >

                                    <div className="mt-1 mx-1 flex flex-col xl:flex-row sm:items-center sm:justify-between gap-y-1 text-sm text-gray-600">
                                        <span className="bg-blue-100 border-2 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                            {(() => {
                                                try {
                                                    const user = JSON.parse(localStorage.getItem("user"));
                                                    return user?.username === img.author.username ? "You" : `@${img.author.username}`;
                                                } catch {
                                                    return `@${img.author.username}`;
                                                }
                                            })()}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(img.createdAt).toLocaleString(undefined, {
                                                dateStyle: "medium",
                                                timeStyle: "short",
                                            })}
                                        </span>
                                    </div>

                                    {
                                        img.url && (
                                            <img
                                                src={img.url}
                                                alt="Approved"
                                                className="w-full max-w-full h-auto object-contain rounded-md mb-2 p-2 "
                                            />
                                        )
                                    }
                                    {
                                        img.comment && (
                                            <p className="p-2 text-sm bg-gray-200 whitespace-pre-wrap">{img.comment}</p>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </>)
        )
        }
    </>
    );
}

export default function ForumAndColouringTab2() {
    const { locale } = useLocale();
    const tabName = "Gallery images harmonized";

    const [approvedImages, setApprovedImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch approved images on component mount
    useEffect(() => {
        const fetchApprovedImages = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/image?tab=${tabName}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setApprovedImages(res.data);
                setLoading(false)
            } catch (err) {
                console.error(err);
                toast.error("Failed to fetch approved images");
            }
        };
        fetchApprovedImages();
    }, []);

    return (<>
        {/* Approved Images Grid */}
        {loading ? <Loader2 className="animate-spin" size={35} /> : (
            approvedImages.length > 0 && (
                <>
                    <hr />
                    <div className="mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {approvedImages.map((img) => (
                                < div key={img._id} className="border-2 rounded-lg bg-white shadow hover:shadow-lg transition inline-block" >

                                    <div className="mt-1 mx-1 flex flex-col xl:flex-row sm:items-center sm:justify-between gap-y-1 text-sm text-gray-600">
                                        <span className="bg-blue-100 border-2 text-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                            {(() => {
                                                try {
                                                    const user = JSON.parse(localStorage.getItem("user"));
                                                    return user?.username === img.author.username ? "You" : `@${img.author.username}`;
                                                } catch {
                                                    return `@${img.author.username}`;
                                                }
                                            })()}
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            {new Date(img.createdAt).toLocaleString(undefined, {
                                                dateStyle: "medium",
                                                timeStyle: "short",
                                            })}
                                        </span>
                                    </div>

                                    {
                                        img.url && (
                                            <img
                                                src={img.url}
                                                alt="Approved"
                                                className="w-full max-w-full h-auto object-contain rounded-md mb-2 p-2 "
                                            />
                                        )
                                    }
                                    {
                                        img.comment && (
                                            <p className="p-2 text-sm bg-gray-200 whitespace-pre-wrap">{img.comment}</p>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </>)
        )
        }
    </>
    );
}