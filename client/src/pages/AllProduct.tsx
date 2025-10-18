import { useAppContext } from "../context/useAppContext";
import ProductCard from "../components/ProductCard";


const AllProduct = () => {
    const {products}  = useAppContext()
  return (
    <section className="min-h-[70vh] mx-6">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col font-medium w-max">
          <p className="text-2xl text-gray-500-300 my-6 flex items-center gap-2 cursor-pointer">All products</p>
        </div>

        <div className="grid grid-cols-2 sm:flex flex-wrap gap-6 xl:gap-12 mx-auto mb-32">
            {products.map((products, index) => (
                <ProductCard key={index} product={products} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default AllProduct;
