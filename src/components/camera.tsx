export default function Camera() {
  return (
    <div className="relative flex h-[155px] w-[205px] items-center justify-center rounded-2xl bg-[#d6d6d6] shadow-[0_10px_15px_-13px_black]">
      {/* Lenses */}
      <div className="flex size-[125px] items-center justify-center rounded-[50%] bg-[#f5f5f5] shadow-[0_8px_0_0_#c0c0c0]">
        <div className="flex size-[105px] items-center justify-center rounded-[50%] bg-[#00695c]">
          <div className="rounded-[50%] border-[32px] border-t-[#00897b] border-r-[#4db6ac] border-b-[#80cbc4] border-l-[#26a69a]" />
        </div>
      </div>

      {/* Flash */}
      <div className="absolute top-[16px] right-[16px] size-[20px] rounded-full bg-[#f5f5f5] shadow-[0_4px_0_0_#c0c0c0]" />

      {/* Button */}
      <div className="absolute bottom-full left-[16px] h-[4px] w-[30px] rounded-[60px] bg-[#009587]" />
    </div>
  );
}
