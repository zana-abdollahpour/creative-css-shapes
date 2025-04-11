import clsx from "clsx";

export default function Envelope() {
  return (
    <div
      className={clsx(
        "h-0 w-0 border-t-[100px] border-r-[170px] border-t-[#eee] border-r-[#ddd]",
        "border-b-[100px] border-l-[170px] border-b-[#ccc] border-l-[#ccc]",
      )}
    >
      <div
        className={clsx(
          "animate-heartbeat h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#ff3838]",
          "before:absolute before:top-0 before:left-0 before:h-full before:w-full before:-translate-y-1/2 before:rounded-full before:bg-inherit before:content-['']",
          "after:absolute after:top-0 after:left-0 after:h-full after:w-full after:-translate-x-1/2 after:rounded-full after:bg-inherit after:content-['']",
        )}
      ></div>
    </div>
  );
}
