export default function Author({ children }) {
    return (
        <span className="absolute right-8 mt-2 font-semibold text-[#404040]">
            – {children}
        </span>
    )
}
