export default function Paragraph({ children, attributes }) {
    return (
        <p
            className="my-4 text-[#404040] font-semibold text-base sm:text-lg leading-relaxed sm:leading-loose"
            {...attributes}
        >
            {children}
        </p>
    );
}
