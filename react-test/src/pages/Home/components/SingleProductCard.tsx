import { animated } from "@react-spring/web";
import { useState } from "react";
import { useHoverAnimatedProps } from "../../../utils/hoverAnimatedProps";
import { TProducts } from "./fakeData";
import DetailsModal from "./DetailsModal";
import ProductDetailsModalContent from "./ProductDetailsModalContent";

type TProps = {
  item: TProducts;
};

const SingleProductCard: React.FC<TProps> = ({ item }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const animationProps = useHoverAnimatedProps(toggle);

  const { description, img, title, price } = item;

  return (
    <div>
      <animated.div
        style={animationProps}
        onMouseEnter={() => setToggle(!toggle)}
        className="cursor-pointer "
      >
        <img src={img} alt={title} className="rounded-t-xl h-[350px] w-full" />
        <div className="px-5 py-2.5 border rounded-b-xl">
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold text-[#333]">{title}</p>
            <p className="text-lg font-semibold text-[#333]">${price}</p>
          </div>
          <p className="mt-4 text-[#333]">
            {description.slice(0, 60) + "...See More"}
          </p>

          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-400 px-8 py-2.5 rounded-lg mt-4 text-white font-medium cursor-pointer"
            >
              Details
            </button>
          </div>
        </div>
      </animated.div>

      <DetailsModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalTitle="Product Details Modal"
      >
        <ProductDetailsModalContent item={item} />
      </DetailsModal>
    </div>
  );
};

export default SingleProductCard;
