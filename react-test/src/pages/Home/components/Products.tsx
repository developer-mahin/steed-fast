import { useState } from "react";
import Container from "../../../components/Shared/Container";
import { products, TProducts } from "./fakeData";
import ProductFilterSection from "./ProductFilterSection";
import SingleProductCard from "./SingleProductCard";

const Products = () => {
  // const [allProducts, setAllProducts] = useState<TProducts[]>(products);
  const [allProducts, setAllProducts] = useState<TProducts[]>([]);

  return (
    <div className="py-20">
      <h2 className="text-[38px] text-center font-semibold pb-10">
        Product Section
      </h2>

      <Container>
        <div className="mb-10">
          <ProductFilterSection setAllProducts={setAllProducts} />
        </div>

        {allProducts?.length > 0 ? (
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {allProducts?.map((item: TProducts, i: number) => (
              <SingleProductCard item={item} key={i} />
            ))}
          </div>
        ) : (
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {products.map((item: TProducts, i: number) => (
              <SingleProductCard item={item} key={i} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
