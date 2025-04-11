import { Children } from "react";

function VerticalCarousel({
  children,
}: {
  children: React.JSX.Element | React.JSX.Element[];
}) {
  return Children.map(children, (child: React.JSX.Element) => (
    <div className="relative m-5 flex w-full flex-col items-center justify-center bg-amber-600 py-44">
      <h1 className="absolute top-1 left-2">
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
        <div>Test</div>
      </VerticalCarousel>
    </div>
  );
}
