import React from "react";

const Sony = () => {
  return (
    <div className="container mx-auto my-32">
      <div className="relative bg-black rounded-2xl overflow-hidden h-[500px] w-full">
        <img
          src="https://klbtheme.com/fynode/wp-content/uploads/2024/12/banner-02.jpg"
          alt="Sony Headphones"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute top-1/2 left-10 -translate-y-1/2 text-white max-w-md">
          <p className="text-sm uppercase text-gray-300 mb-2">
            Highest Qualitys
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Elevate Your Audio
            <br />
            Experience with Sony
            <br />
            Headphones
          </h1>
          <p className="text-gray-300 mb-6">
            Quisque venenatis malesuada ipsum sollicitudin tristique.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Shop Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sony;
