import React, { PropsWithChildren, ReactElement } from "react";

interface ContainerProps {
  className?: string;
  element?: ReactElement;
}

function Container(props: PropsWithChildren<ContainerProps>) {
  if (!props.element) {
    return (
      <div className={`container ${props.className ? props.className : ""}`}>
        {props.children}
      </div>
    );
  }

  return React.cloneElement(props.element, {
    className: `container ${props.className ? props.className : ""}`,
    children: props.children,
  });
}

export default Container;
