import React from 'react'

const NewArrivals = () => {
  return (
    <main className="my-30  max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">

  <h1 className="text-3xl font-medium text-[#236b02] text-center mb-2 font-poppins">
    Recém-chegados
  </h1>
  <p className="text-slate-600 mb-10 font-poppins text-center">
    Explore as últimas adições à nossa coleção.
  </p>
  <section className="flex flex-wrap items-center justify-center gap-6">
    <a href="#" className="group w-56">
      <img
        className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
        src="/blouse.png"
        alt="image"
      />
      <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
      <p className="text-xl">$ 29.00</p>
    </a>
    <a href="#" className="group w-56">
      <img
        className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
        src="/blouse.png"
        alt="image"
      />
      <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
      <p className="text-xl">$ 39.00</p>
    </a>
    <a href="#" className="group w-56">
      <img
        className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
        src="/blouse.png"
        alt="image"
      />
      <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
      <p className="text-xl">$ 29.00</p>
    </a>
    <a href="#" className="group w-56">
      <img
        className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
        src="/blouse.png"
        alt="image"
      />
      <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
      <p className="text-xl">$ 49.00</p>
    </a>
  </section>
</main>

  )
}

export default NewArrivals
