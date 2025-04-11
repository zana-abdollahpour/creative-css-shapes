import { Children } from "react";

import Diamond from "./components/diamond";
import Envelope from "./components/envelope";
import Pepsi from "./components/pepsi";
import Camera from "./components/camera";

function VerticalCarousel({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  return Children.map(children, (child: React.JSX.Element) => (
    <div className="relative m-5 flex w-full flex-col items-center justify-center rounded-4xl bg-amber-50 py-44">
      <h1 className="absolute top-4 left-6 text-xl font-bold text-amber-950">
        {child.type.name || "Native Element"}
      </h1>
      {child}
    </div>
  ));
}

export default function App() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4">
      <VerticalCarousel>
        <Camera />
        <Pepsi />
        <Envelope />
        <Diamond />
      </VerticalCarousel>
    </div>
  );
}
