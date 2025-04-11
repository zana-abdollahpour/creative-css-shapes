import clsx from "clsx";

export default function Pepsi() {
  return (
    <div
      className={clsx(
        "relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 bg-[#34588e]",
        "before:absolute before:-top-[160px] before:-left-[240px] before:h-[400px] before:w-[500px] before:-rotate-[18deg] before:rounded-[25%] before:bg-white before:content-['']",
        "after:absolute after:-top-[275px] after:-left-[300px] after:h-[500px] after:w-[550px] after:rounded-[50%] after:bg-[#da473c] after:content-['']",
      )}
    />
  );
}
