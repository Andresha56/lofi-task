import { StyledIconButton } from "../styles/IconButton.styled";
import Icon from "./Icon";
import { MouseEventHandler } from "react";

interface Props {
  icon: string;
  text?: string;
  height: number;
  width: number;
  className?: string;
  onClick?: MouseEventHandler;
  type?: string;
  color?: string;
}

const IconButton = ({
  icon,
  text,
  height,
  width,
  className,
  onClick,
  color,
}: Props) => {
  return (
    <StyledIconButton onClick={onClick} color={color}>
      <Icon className={className} name={icon} width={width} height={height} color={color} />
      {text}
    </StyledIconButton>
  );
};

export default IconButton;
