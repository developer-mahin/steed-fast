import Select from "../../../components/Shared/Select";
import { categoryOptions, priceOptions } from "./fakeData";

const ProductFilterSection = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Product Filter</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <Select
          defaultOption="All Categories"
          id="category"
          label="Category"
          options={categoryOptions}
        />
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <Select
          defaultOption="Select One..."
          id="price"
          label="Price"
          options={priceOptions}
        />
      </div>

      {/* Filtered Product List */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          Filtered Products:
        </h3>
      </div>
    </div>
  );
};

export default ProductFilterSection;
