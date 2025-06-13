import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12">✹ What they say</h2>

        <div className="flex flex-wrap">
          {/* Left Section: User Info */}
          <div className="md:basis-1/3 flex items-center gap-4 min-w-[180px]">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Floyd Miles"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="font-semibold">Floyd Miles</div>
              <div className="text-sm text-gray-400">eBay</div>
            </div>
          </div>

          <div className="md:basis-2/3">
            {/* Middle Section: Quote */}
            <div className="flex-1 relative text-gray-300 text-base leading-relaxed md:pr-24">
              <Quote className="absolute -left-6 -top-4 w-14 h-14 text-white opacity-10 font-bold" />
              Synergy's resume builder is fantastic. It helped me create a
              professional resume that stood out to employers. Synergy's resume
              builder is fantastic. It helped me create a professional resume
              that stood out to employers.
            </div>

            {/* Right Section: Arrows */}
            <div className="flex gap-3 mt-6 ml-4">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition">
                <ChevronLeft size={18} />
              </button>
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
