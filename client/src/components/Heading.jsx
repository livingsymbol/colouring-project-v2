function Heading({ children }) {
  return (
    <h1 className="text-xl sm:text-3xl xl:text-5xl text-[#c7b73a] flex flex-col sm:flex-row items-center  mb-6 sm:mb-8 text-center font-semibold gap-y-4 sm:gap-x-10">
      <img
        src="/images/logo.png"
        alt="logo"
        className="w-10 h-10 sm:w-14 sm:h-14 xl:w-16 xl:h-16 drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
      />
      <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">{children}</span>
    </h1>
  );
}

export default Heading;
