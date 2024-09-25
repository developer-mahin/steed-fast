import { animated } from "@react-spring/web";
import { useState } from "react";
import { useHoverAnimatedProps } from "../../../utils/hoverAnimatedProps";
import { TProducts } from "./fakeData";

type TProps = {
  item: TProducts;
};

const SingleProductCard: React.FC<TProps> = ({ item }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const animationProps = useHoverAnimatedProps(toggle);

  const { description, img, title } = item;

  return (
    <animated.div
      style={animationProps}
      onMouseEnter={() => setToggle(!toggle)}
      className="cursor-pointer "
    >
      <img src={img} alt={title} className="rounded-t-xl h-[350px] w-full" />
      <div className="px-5 py-2.5 border rounded-b-xl">
        <p className="text-lg font-semibold text-[#333]">{title}</p>
        <p className="mt-4 text-[#333]">
          {description.slice(0, 60) + "...See More"}
        </p>
      </div>
    </animated.div>
  );
};

export default SingleProductCard;
