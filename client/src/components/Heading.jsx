function Heading({ children }) {
  return (
    <h1 className="text-2xl sm:text-3xl xl:text-5xl text-[#c7b73a] flex items-center mb-8 text-center font-semibold gap-x-12">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
      />
      <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">{children}</span>
    </h1>
  );
}

export default Heading;
