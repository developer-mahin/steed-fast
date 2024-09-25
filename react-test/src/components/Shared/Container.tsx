import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="xl:w-[1460px] w-full mx-auto px-4">{children}</div>;
};

export default Container;
