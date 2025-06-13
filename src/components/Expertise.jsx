import React from "react";

const Expertise = () => {
  const expertiseItems = [
    {
      title: "Branding",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UI Design",
      description:
        "I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.",
    },
    {
      title: "UX Design",
      description:
        "I comprehend and resolve digital product issues using a user-focused methodology. Investigation, compassion, and visual convenience are a few techniques I apply to captivate and involve your users while fulfilling your business requirements.",
    },
    {
      title: "Development",
      description:
        "I create user-friendly, adaptive, engaging websites. No cookie-cutters. No cumbersome complex coding. Webflow forms the foundation of my web development approach. I employ it to produce safe, top-notch personalized websites.",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 flex items-center gap-2">
          <span>🌟</span> Expertise
        </h2>
        {/* 1 column on small screens, 2 columns on large (lg) and above */}
        <div className="grid grid-cols-2  gap-10 text-sm sm:text-base text-gray-300">
          {expertiseItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-2">• {item.title}</h3>
              <p className="leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
