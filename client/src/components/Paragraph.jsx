export default function Paragraph({ children, attributes }) {
    return (
        <p className="my-4 text-[#0000cc] font-semibold text-base sm:text-lg leading-relaxed" >
            {children}
        </p>
    );
}
