import RichTextRenderer from "../RichTextRenderer";

export default function HomeTab2({ content }) {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-y-4 sm:w-1/3 w-full">
                <img
                    className="h-16 w-16 lg:h-20 lg:w-20"
                    src="/images/icon2.png"
                    alt="icon"
                />
                <img
                    src="/images/aurobindo.png"
                    alt="Sri Aurobindo"
                    className="w-3/4 sm:w-full max-w-xs sm:max-w-none object-contain"
                />
            </div>
            <div className="sm:w-2/3 w-full">
                <RichTextRenderer content={content} />
            </div>
        </div>
    );
}
