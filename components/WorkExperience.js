import { useState } from "react";
import { workExperiences } from "../data/workExperienceData";

export default function WorkExperience() {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <section className="pt-20 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-sky-500 text-nowrap md:text-3xl">
            Work Experience
          </h2>
          <div className="bg-slate-500 h-[2px] w-full"></div>
        </div>
      </div>
      <div className="container px-5 mx-auto mt-8 md:mt-12">
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3">
          <ul className="flex items-end text-nowrap overflow-x-scroll gap-2 no-scrollbar py-2 h-min md:border-l-2 border-gray-500 md:flex-col md:items-start">
            {workExperiences.map((exp, index) => (
              <li key={index}>
                <button
                  className={`py-2 px-4 font-semibold ${
                    toggle === index + 1
                      ? `border-b-2 mb-1 text-gray-200 border-sky-500 md:border-l-2 md:border-b-0 md:ml-2`
                      : `text-gray-500`
                  }`}
                  onClick={() => updateToggle(index + 1)}
                >
                  {exp.buttonText}
                </button>
              </li>
            ))}
          </ul>
          <div className="md:col-span-2">
            {workExperiences.map((exp, index) => (
              <div
                key={index}
                className={toggle === index + 1 ? "col-span-2" : "hidden"}
              >
                <p className="text-lg font-semibold text-gray-2 md:text-xl">
                  {exp.title}
                </p>
                <p className="text-sm md:text-base text-gray-300">
                  {exp.period}
                </p>
                <p className="text-sm md:text-base mt-5 text-gray-300">
                  {exp.description}
                </p>
                <div className="text-sm md:text-base text-gray-300">
                  <ul className="list-disc list-outside ms-5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="py-1">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
