import Container from "../../../components/Shared/Container";
import { products, TProducts } from "./fakeData";
import SingleProductCard from "./SingleProductCard";

const Products = () => {
  return (
    <div className="py-20">
      <h2 className="text-[38px] text-center font-semibold pb-10">
        Product Section
      </h2>

      <Container>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
          {products.map((item: TProducts, i: number) => (
            <SingleProductCard key={i} item={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
