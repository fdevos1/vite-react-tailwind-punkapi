import { ComponentProps } from "react";

export type FlexBoxProps = ComponentProps<"div"> & {
  children: React.ReactNode;
  gap?: string;
};

function BeerInfoFlexBox({ children, gap, ...props }: FlexBoxProps) {
  return (
    <div className={`flex flex-col ${gap}`} {...props}>
      {children}
    </div>
  );
}

export default BeerInfoFlexBox;
