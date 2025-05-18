export default function Author({ children }) {
    return (
        <p className="text-right mt-2 font-semibold text-[#0000cc]">
            – {children}
        </p>
    )
}
