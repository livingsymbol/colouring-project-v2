import { useEffect, useState } from "react";
import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";
import { Image as ImageIcon, X, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";

const forumTab1Translations = {
    en: {
        paragraph: (
            <>
                Your aspiration and inner state are reflected in your own colourings. You are welcome to visit the
                “Aspiration at work” section, create a colouring, download it and then share it with us for publishing
                on this page via the following button:
            </>
        ),
        publish: "Publish Image",
        cancel: "Cancel",
        selectImage: "Select Image (png, jpg, jpeg.)",
        post: "Post",
        posting: "Posting...",
        textareaPlaceholder: "Your comments\nYour signature / nickname",
        toast: {
            needContent: "You must provide comment or an image.",
            success: "Post submitted for review!",
            error: "Failed to create post",
        },
        approvedSection: "Your Images",
    },
    ru: {
        paragraph: (
            <>
                Ваша устремленость и внутреннее состояние  будут отражатся в ваших собственных раскрашиваниях. Вы можете посетить раздел «Стремление в действии», создать раскрашивание, скачать его, а затем поделиться с нами для публикации на этой странице через следующую кнопку:
            </>
        ),
        publish: "Опубликовать изображение",
        cancel: "Отмена",
        selectImage: "Выберите изображение (png, jpg, jpeg.)",
        post: "Опубликовать",
        posting: "Публикация...",
        textareaPlaceholder: "Ваши комментарии\nВаша подпись / никнейм",
        toast: {
            needContent: "Необходимо добавить комментарий или изображение.",
            success: "Публикация отправлена на проверку!",
            error: "Не удалось создать публикацию",
        },
        approvedSection: "Ваши изображения",
    },
};

export default function ForumTab1() {
    const { locale } = useLocale();
    const t = forumTab1Translations[locale] || forumTab1Translations.en;
    const tabName = "Your own colourings";

    const [showCreate, setShowCreate] = useState(false);
    const [newPublishedImage, setNewPublishedImage] = useState({ tab: "", comment: "", image: null });
    const [previewUrl, setPreviewUrl] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    const [loading, setLoading] = useState(true);


    const [approvedImages, setApprovedImages] = useState([]);

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


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setNewPublishedImage((prev) => ({ ...prev, image: reader.result }));
            setPreviewUrl(URL.createObjectURL(file));
        };
        reader.readAsDataURL(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setNewPublishedImage((prev) => ({ ...prev, image: reader.result }));
            setPreviewUrl(URL.createObjectURL(file));
        };
        reader.readAsDataURL(file);
    };

    const handlePostSubmit = async () => {
        if (!newPublishedImage.comment && !newPublishedImage.image) {
            toast.error(t.toast.needContent);
            return;
        }

        setIsPosting(true);
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/posts/image`,
                { comment: newPublishedImage.comment, image: newPublishedImage.image, tab: tabName },
                { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
            );

            toast.success(res.data.message || t.toast.success);
            setShowCreate(false);
            setNewPublishedImage({ comment: "", image: null });
            setPreviewUrl(null);
        } catch (err) {
            console.error(err);
            toast.error(err.response?.data?.message || t.toast.error);
        } finally {
            setIsPosting(false);
        }
    };

    return (
        <>
            <Paragraph>{t.paragraph}</Paragraph>
            <br />
            <button
                onClick={() => setShowCreate((prev) => !prev)}
                className="cursor-pointer block mx-auto p-2 text-md md:text-lg font-semibold text-white bg-[#d5af3c] rounded-lg duration-100 hover:bg-[#d5af3cc8] hover:text-white shadow-2xl mb-4"
            >
                {showCreate ? t.cancel : t.publish}
            </button>

            {showCreate && (
                <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border border-gray-200 rounded-xl p-4 sm:p-6 mb-8 bg-white shadow-lg space-y-4"
                >
                    {previewUrl && (
                        <div className="relative max-w-full">
                            <img src={previewUrl} alt="Preview" className="max-h-60 mx-auto rounded-lg shadow" />
                            <button
                                onClick={() => {
                                    setPreviewUrl(null);
                                    setNewPublishedImage((prev) => ({ ...prev, image: null }));
                                }}
                                className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    )}

                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 border-2 border-gray-300 p-2 rounded-lg hover:bg-gray-200">
                        <ImageIcon size={20} />
                        <span>{t.selectImage}</span>
                        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                    </label>

                    <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#404040]"
                        rows={4}
                        placeholder={t.textareaPlaceholder}
                        value={newPublishedImage.comment}
                        onChange={(e) => setNewPublishedImage({ ...newPublishedImage, comment: e.target.value })}
                    />
                    <button
                        onClick={handlePostSubmit}
                        disabled={isPosting}
                        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPosting ? (
                            <>
                                <Loader2 className="animate-spin" size={16} />
                                {t.posting}
                            </>
                        ) : (
                            t.post
                        )}
                    </button>
                </div>
            )}
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
