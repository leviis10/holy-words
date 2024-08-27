import { Spinner } from "@phosphor-icons/react";
import { LoadingSize, LoadingVariant } from "../../types/enums";

interface LoadingProps {
  size?: LoadingSize;
  variant?: LoadingVariant;
  className?: string;
}

function Loading(props: LoadingProps) {
  function spinnerSize() {
    switch (props.size) {
      case LoadingSize.SM:
        return 16;
      case LoadingSize.L:
        return 64;
      default:
        return 32;
    }
  }

  function getOverlayColor() {
    let styles =
      "h-full w-full opacity-75 absolute flex justify-center items-center ";

    switch (props.variant) {
      case LoadingVariant.LIGHT:
        styles += "bg-gray-9";
        break;

      case LoadingVariant.DARK:
      default:
        styles += "bg-gray-0";
        break;
    }

    return styles;
  }

  function getSpinnerColor() {
    switch (props.variant) {
      case LoadingVariant.LIGHT:
        return "#f8f9fa";

      case LoadingVariant.DARK:
      default:
        return "#212529";
    }
  }

  return (
    <>
      <div className={`${getOverlayColor()} ${props.className}`}>
        <Spinner
          color={getSpinnerColor()}
          size={spinnerSize()}
          className="animate-spin"
        />
      </div>
    </>
  );
}

export default Loading;
