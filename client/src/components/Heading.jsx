function Heading({ children }) {
  return (
    <h1 className="w-full text-xl sm:text-3xl xl:text-5xl text-[#c7b73a] flex flex-col sm:flex-row items-center justify-between mb-6 sm:mb-8 font-semibold gap-y-4 sm:gap-x-10">
      <img
        src="/images/heading_symbol_left.png"
        alt="heading_symbol_left"
        className="w-10 h-10 sm:w-14 sm:h-14 xl:w-16 xl:h-16 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
      />
      <span className="">{children}</span>
      <img
        src="/images/heading_symbol_right.png"
        alt="heading_symbol_right"
        className="w-10 h-10 sm:w-14 sm:h-14 xl:w-16 xl:h-16 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
      />
    </h1>
  );
}

export default Heading;
