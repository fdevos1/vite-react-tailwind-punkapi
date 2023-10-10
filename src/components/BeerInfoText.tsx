import { ComponentProps } from "react";

export type TextProps = ComponentProps<"span"> & {
  text?: string;
  children?: React.ReactNode;
};

function BeerInfoText({ text, children, ...props }: TextProps) {
  return (
    <span
      className="text-sm font-light text-gray-800 lg:text-xl lg:font-normal"
      {...props}
    >
      {text || children}
    </span>
  );
}

export default BeerInfoText;
