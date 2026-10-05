export default function LineRail() {
  return (
    <div className="flex absolute justify-between items-start px-[9.6rem] w-full h-full max-tablet:hidden max-tablet:px-2">
      {[0, 1].map((i) => (
        <div key={i} className="flex gap-3 flex-col justify-start items-center h-full max-tablet:gap-[0.6rem] max-md:gap-[0.5249rem] max-mobile:gap-[0.449rem]">
          <div className="flex flex-col justify-start items-center h-full">
            <div className="h-full w-0.25 bg-black opacity-10" />
            <div className="w-[0.59913rem] h-[0.59913rem] bg-[#d7ba5e] rounded-full" />
          </div>
          <div className="font-sans text-black text-[0.875rem] leading-[1.5em]">[ Grow Fast ]</div>
        </div>
      ))}
    </div>
  );
}
