import { TProducts } from "./fakeData";

type TProps = {
  item: TProducts;
};

const ProductDetailsModalContent: React.FC<TProps> = ({ item }) => {
  const { title, img, category, description, price } = item;
  return (
    <div>
      <img src={img} alt={title} className="rounded-t-xl h-[350px] w-full" />
      <div className="px-5 py-2.5 border rounded-b-xl">
        <p className="w-fit px-2 py-1 text-sm bg-[#00000090] text-white rounded">
          {category}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-[#333]">{title}</p>
          <p className="text-lg font-semibold text-[#333]">${price}</p>
        </div>
        <p className="mt-4 text-[#333]">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetailsModalContent;
