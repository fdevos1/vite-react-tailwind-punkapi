import { ComponentProps } from "react";

import IconGitHub from "./github";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";

export type IconProps = ComponentProps<"svg"> & {
  name: string;
};

const Icon = ({ name }: IconProps) => {
  switch (name) {
    case "Github":
      return <IconGitHub />;

    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
  }
};

export default Icon;
