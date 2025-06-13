import React from "react";

const projects = [
  {
    title: "Analysis Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "../public/image 21.svg",
    tags: ["FIGMA", "UX"],
  },
  {
    title: "Fortknox Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "../public/image 21 (1).svg",
    tags: ["MOBILE", "WEB"],
  },
  {
    title: "Zenocide Application",
    description:
      "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
    image: "../public/image 22.svg",
    tags: ["APP", "WEB"],
  },
];

const Works = () => {
  return (
    <section className="bg-black text-white px-4 sm:px-6 py-10 sm:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <span>🌟</span> Works
          </h2>
          <a
            href="#"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4 transition"
          >
            View all
          </a>
        </div>

        {/* Project Cards */}
        <div className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[radial-gradient(circle_at_right,_#3f3f3f,_#1a1a1a_70%)] rounded-2xl overflow-hidden grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-10"
            >
              {/* Image */}
              <div className="w-full lg:w-2/3 flex-shrink-0 mb-4 lg:mb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-60 lg:h-auto rounded-xl object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between w-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium border border-gray-400 text-gray-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4">
                  <button className="px-6 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition w-full sm:w-auto">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
