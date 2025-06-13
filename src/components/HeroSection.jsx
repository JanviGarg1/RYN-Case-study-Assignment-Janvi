import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-black text-white px-6 py-16 min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide space-y-2">
          <div>
            I AM A{" "}
            <span role="img" aria-label="palette" className="inline-block">
              🎨
            </span>{" "}
            FREELANCE
          </div>
          <div>
            DESIGNER{" "}
            <span role="img" aria-label="laptop" className="inline-block">
              💻
            </span>{" "}
            FROM
          </div>
          <div>SAN FRANCISCO</div>
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-12">
          <span className="text-sm sm:text-base font-light opacity-70">© doradodesign</span>
          <span className="text-sm sm:text-base font-light opacity-70">🚀 wave</span>
          <span className="text-sm sm:text-base font-light opacity-70">SIØILA</span>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mt-6 sm:mt-0 sm:ml-8 text-center sm:text-left">
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web design, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
