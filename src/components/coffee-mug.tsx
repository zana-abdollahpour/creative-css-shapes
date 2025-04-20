import clsx from "clsx";

export default function CoffeeMug() {
  return (
    <div
      className={clsx(
        "coffee-mug-shadows relative size-[150px] rounded-full bg-[#3f2616]",
        "before:absolute before:-top-[85px] before:-right-[75px] before:h-[75px] before:w-[60px]",
        "before:rotate-45 before:rounded-sm before:bg-[#e49934]",
      )}
    />
  );
}
