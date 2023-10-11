import { ComponentProps } from "react";

import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";
import IconClose from "./close";
import IconBeer from "./beer";

export type IconProps = ComponentProps<"svg"> & {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "Github":
      return <IconGitHub />;
    case "Close":
      return <IconClose />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
    case "Beer":
      return <IconBeer />;
    default:
      return;
  }
};

export default Icon;
