import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface IIconProps {
  type: string;
  fill?: string;
  className?: string;
}

const icons = [
  {
    type: "trash-can",
    component: faTrashAlt,
  },
];

const Icon: FC<IIconProps> = ({ type, fill, className }) => {
  const icon = icons.find((icon) => icon.type === type);

  return (
    <FontAwesomeIcon
      className={[className].join(" ")}
      color={fill}
      icon={icon.component}
    />
  );
};

export default Icon;
