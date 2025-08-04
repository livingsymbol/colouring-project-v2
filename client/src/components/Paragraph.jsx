export default function Paragraph({ children, attributes }) {
    return (
        <p
            className="my-4 text-[#404040] text-base sm:text-lg leading-relaxed"
            {...attributes}
        >
            {children}
        </p>
    );
}
