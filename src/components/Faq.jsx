import React from "react";

const Faq = () => {
  const faqs = [
    {
      q: "What is your design process?",
      a: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs. In the prototype phase, I create interactive models. In the test phase, I collect feedback to refine the design.",
    },
    { q: "What tools and software do you use for UX design?", a: "" },
    { q: "How do you measure the success of your UX designs?", a: "" },
  ];
  return (

      <section className="bg-black text-white px-6 py-4">
               <div className="max-w-6xl mx-auto">

        <h2 className="text-2xl font-semibold mb-8">✹ Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-lg">{faq.q}</h3>
              {faq.a && <p className="text-gray-400 mt-2 text-sm">{faq.a}</p>}
            </div>
          ))}
        </div>
        </div>
      </section>

  );
};

export default Faq;
