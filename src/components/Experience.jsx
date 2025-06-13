import React from "react";

const Experience = () => {
  const experiences = [
    { role: "Lead Product Designer", company: "Fortknox", period: "Mar 2022 - Oct 2023" },
    { role: "Intern Designer", company: "OmniSafe", period: "Mar 2022 - Oct 2023" },
    { role: "UI Designer", company: "Doradesign", period: "Mar 2022 - Oct 2023" },
    { role: "Frontend Developer", company: "OpacityAuthor", period: "Mar 2022 - Oct 2023" },
  ];

  return (
      <section className="bg-black text-white px-6 py-4">
       <div className="max-w-6xl mx-auto">
         <h2 className="text-2xl font-semibold mb-8">✹ Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={idx} className="border-b border-gray-700 py-4 flex justify-between flex-wrap gap-2">
            <div className="text-lg">{exp.role}</div>
            <div className="text-right">
              <div className="font-semibold">{exp.company}</div>
              <div className="text-sm text-gray-400">{exp.period}</div>
            </div>
          </div>
        ))}
       </div>
      </section>
  );
};

export default Experience;
