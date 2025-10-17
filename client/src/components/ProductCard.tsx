import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({product}:ProductCardProps ) => {
  return (
    <a href="#" className="group w-56">
      <img
        className=" bg-[#F5F5F5] rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-contain"
        src={product.images[0]}
        alt={product.name}
      />
      <p className="text-sm mt-2">{product.name} </p>
      <p className="text-xl">$ {product.price} </p>
    </a>
  );
};

export default ProductCard;
