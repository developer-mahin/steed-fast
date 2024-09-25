import { TOption } from "../../pages/Home/components/fakeData";
import { cn } from "../../utils/cn";
import Label from "./Label";



type TProps = {
  id: string;
  className?: string;
  options: TOption[];
  label: string;
  defaultOption: string;
};

const Select: React.FC<TProps> = ({
  id,
  options,
  className,
  label,
  defaultOption,
}) => {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <select
        id={id}
        className={cn(
          className,
          "w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        )}
      >
        <option value="">{defaultOption}</option>
        {options.map((item: TOption, i: number) => (
          <option key={i} value={item.key}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
