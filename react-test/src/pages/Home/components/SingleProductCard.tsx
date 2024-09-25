import { TProducts } from "./fakeData";

type TProps = {
  item: TProducts;
};

const SingleProductCard: React.FC<TProps> = ({ item }) => {
  const { description, img, title } = item;

  return (
    <div className="hover:scale-[1.03] duration-300 cursor-pointer ">
      <img src={img} alt={title} className="rounded-t-xl h-[350px] w-full" />
      <div className="px-5 py-2.5 border rounded-b-xl">
        <p className="text-lg font-semibold text-[#333]">{title}</p>
        <p className="mt-4 text-[#333]">
          {description.slice(0, 60) + "...See More"}
        </p>
      </div>
    </div>
  );
};

export default SingleProductCard;
