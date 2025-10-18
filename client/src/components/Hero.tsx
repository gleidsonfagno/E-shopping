// import React from "react";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <main className="bg-[#B9F8CF]  rounded-3xl flex flex-col max-md:gap-20 md:flex-row p-20 items-center justify-between  px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <a
            href="/product"
            className="flex items-center gap-2 bg-green-300 rounded-full p-1 pr-3 text-sm mt-20 text-green-600"
          >
            <span className="bg-green-600 sm:text-xs text-[9px] px-3 py-1 text-amber-50 rounded-full">
              NOTÍCIA
            </span>
            <p className="flex items-center gap-2">
              <span>Frete grátis em pedidos acima de $ 50!</span>
              <svg
                className="mt-px"
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1 1 4 3.5L1 8"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </a>

          <h1 className="text-3xl sm:text-5xl leading-[1.2] my-3 font-medium bg-gradient-to-r from-slate-600 to-[#236b02] bg-clip-text text-transparent max-w-xs  sm:max-w-md md:text-left text-center">
            Gadgets incríveis. <br />
            Preços que cabem no seu bolso.
          </h1>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button
              // className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11"
              className="bg-slate-800  uppercase text-white text-sm py-2.5 px-7 sm:py-4 sm:px-9  rounded-md hover:bg-slate-900 hover:scale-103 active:scale-95 transition"
            >
              Ver ofertas
            </button>
          </div>
        </div>
        <img
          src="/blouse.png"
          alt="hero"
          className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"
        />
      </main>
    </section>
  );
};

export default Hero;
