import { useEffect, useState } from "react";
import { useLocale } from "../../context/LocaleContext";
import Paragraph from "../Paragraph";

export default function ForumTab2() {
    const { locale } = useLocale();
    const tabName = "Gallery Images harmonized";

    const [approvedImages, setApprovedImages] = useState([]);

    // Fetch approved images on component mount
    useEffect(() => {
        const fetchApprovedImages = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/posts/image?tab=${tabName}`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
                });
                setApprovedImages(res.data);
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
        {approvedImages.length > 0 && (
            <>
                <hr />
                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-[#d5af3c] mb-4 text-center">{t.approvedSection}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {approvedImages.map((img) => (
                            <div key={img._id} className="border-2 rounded-lg bg-white shadow hover:shadow-lg transition inline-block">
                                {img.url && (
                                    <img
                                        src={img.url}
                                        alt="Approved"
                                        className="w-full max-w-full h-auto object-contain rounded-md mb-2 p-2 "
                                    />
                                )}
                                {img.comment && (
                                    <p className="p-2 text-sm bg-gray-200 whitespace-pre-wrap">{img.comment}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )}
    </>
    );
}