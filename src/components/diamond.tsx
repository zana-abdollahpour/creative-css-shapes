import clsx from "clsx";

const classNamesByIndex = [
  "top-0 left-0 h-0 w-0 border-t-transparent border-l-transparent",
  "top-0 left-1/2 h-0 w-0",
  "top-1/2 left-0 h-0 w-0",
  "top-1/2 left-1/2 h-0 w-0",
] as const;

export default function Diamond() {
  return (
    <div className="relative h-[200px] w-[200px] rotate-45 p-8">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={clsx(
            "absolute border-t-[50px] border-r-[50px] border-b-[50px] border-l-[50px]",
            classNamesByIndex[i],
          )}
        ></span>
      ))}
    </div>
  );
}
