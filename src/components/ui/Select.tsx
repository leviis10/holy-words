import { PropsWithChildren } from "react";

interface SelectProps {
  name: string;
  value: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select(props: PropsWithChildren<SelectProps>) {
  return (
    <select
      name={props.name}
      id={props.name}
      value={props.value}
      className="grow border rounded-md py-2 px-3"
      onChange={props.onChange}
      disabled={props.disabled}
    >
      {props.children}
    </select>
  );
}

export default Select;
