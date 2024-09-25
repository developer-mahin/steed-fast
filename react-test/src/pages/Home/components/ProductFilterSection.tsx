import { useEffect, useState } from "react";
import Select from "../../../components/Shared/Select";
import { categoryOptions, priceOptions, products, TProducts } from "./fakeData";

type TProps = {
  setAllProducts: React.Dispatch<React.SetStateAction<TProducts[]>>;
};

const ProductFilterSection: React.FC<TProps> = ({ setAllProducts }) => {
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  useEffect(() => {
    let newProductArray: TProducts[] = products;

    console.log(category);

    if (category) {
      newProductArray = products.filter(
        (product) => product.category === category
      );

      if (category === "") {
        setAllProducts(products);
      }
    }

    if (price) {
      const updatedPrice = Number(price);
      newProductArray = products.filter(
        (product) => Number(product.price) <= updatedPrice
      );
    }

    setAllProducts(newProductArray);
  }, [price, category, setAllProducts]);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Product Filter</h2>

      <div className="lg:w-[450px]">
        <div className="mb-4">
          <Select
            defaultOption="All Categories"
            id="category"
            label="Category"
            options={categoryOptions}
            setFunction={setCategory}
          />
        </div>

        <div className="mb-4">
          <Select
            defaultOption="Select One..."
            id="price"
            label="Price"
            options={priceOptions}
            setFunction={setPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilterSection;
