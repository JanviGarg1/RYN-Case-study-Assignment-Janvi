import React from "react";

const Blogs = () => {
  const blogs = [
    {
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
      image: "/src/assets/image 21.svg",
    },
    {
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
      image: "/src/assets/image 21 (1).svg",
    },
    {
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
      image: "/src/assets/image 22.svg",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">✹ Blog</h2>
          <a href="#" className="text-sm underline">
            view all
          </a>
        </div>
        <div className="space-y-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="flex flex-wrap gap-6 items-center">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-40 h-32 object-cover rounded-xl"
              />
              <div className="sm:flex-1">
                <div className="text-sm text-gray-400">{blog.date}</div>
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <div className="mt-2 flex gap-2 flex-wrap">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 border border-white rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="bg-white text-black px-4 py-1 rounded-full">
                Read
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
