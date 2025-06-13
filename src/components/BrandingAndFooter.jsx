import React from "react";
import { ArrowUpRight } from "lucide-react";

const BrandingAndFooter = () => {
  return (
    <>
      {/* ✦ Marquee Branding Section */}
      <div className="overflow-hidden bg-black text-white py-20">
        <div className="whitespace-nowrap animate-marquee flex gap-10 py-4 text-3xl font-semibold tracking-wider opacity-80">
          <span className="inline-block">✹ WEBFLOW ✹</span>
          <span className="inline-block">FIGMA ✹</span>
          <span className="inline-block">DESIGNER ✹</span>
          <span className="inline-block">DEVELOPER ✹</span>
          <span className="inline-block">WEBFLOW ✹</span>
          <span className="inline-block">FIGMA ✹</span>
          <span className="inline-block">DESIGNER ✹</span>
        </div>
      </div>

      {/* ✦ LET'S TALK Section & Footer */}
      <footer className="bg-black text-white px-6 py-16 text-center md:text-left">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">LET’S TALK!</h2>
          <a
            href="mailto:rehanurraihan@gmail.com"
            className="text-base md:text-lg text-gray-300 flex items-center justify-center md:justify-start gap-1 hover:text-white"
          >
            rehanurraihan@gmail.com <ArrowUpRight size={16} />
          </a>

          <div className="mt-16 flex flex-wrap md:justify-between items-center text-sm text-gray-400 gap-4 border-t border-white/10 pt-6">
            <div>© Rehan Raihan – 2023</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Dribbble</a>
              <a href="#" className="hover:text-white">Behance</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BrandingAndFooter;
