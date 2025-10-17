import { useAppContext } from "../context/useAppContext"
import ProductCard from "./ProductCard"

const NewArrivals = () => {
  const {products}  = useAppContext()

  return (
    <main className="my-30  max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">

  <h1 className="text-3xl font-medium text-[#236b02] text-center mb-2 font-poppins">
    Produtos mais recentes
  </h1>
  <p className="text-slate-600 mb-10 font-poppins text-center">
    Explore as últimas adições à nossa coleção.
  </p>
  <section className="flex flex-wrap items-center justify-center gap-6">
    {products
          .slice(8, 12)
          .map((products, index) => (
            <ProductCard key={index} product={products} />
          ))
        }
  </section>
</main>

  )
}

export default NewArrivals
