import { PropsWithChildren } from "react";
import { ButtonVariant } from "../../types/enums";

interface ButtonProps {
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

function Button(props: PropsWithChildren<ButtonProps>) {
  function getButtonStyle() {
    let style = "border-2 py-2 px-4 rounded-md transition-all ";

    switch (props.variant) {
      case ButtonVariant.LIGHT:
        style += "border-gray-9 bg-gray-1 hover:bg-gray-0 text-gray-9";
        break;

      case ButtonVariant.DARK:
      default:
        style += "border-gray-0 bg-gray-9 hover:bg-gray-8 text-gray-0";
    }

    return style;
  }

  return (
    <button
      className={`${getButtonStyle()} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
