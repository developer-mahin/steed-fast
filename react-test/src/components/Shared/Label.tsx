import { ReactNode } from "react";
import { cn } from "../../utils/cn";

type TProps = {
  htmlFor: string;
  className?: string;
  children: ReactNode;
};

const Label: React.FC<TProps> = ({ htmlFor, className, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(className, "block text-lg font-medium text-gray-600 mb-2")}
    >
      {children}
    </label>
  );
};

export default Label;
