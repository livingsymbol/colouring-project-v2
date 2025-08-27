export default function Paragraph({ children, attributes, className }) {
    return (
        <p
            className={` text-[#404040] text-base  sm:text-lg leading-relaxed ${className}`}
            {...attributes}
        >
            {children}
        </p >
    );
}
