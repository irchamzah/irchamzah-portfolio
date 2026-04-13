import { educations } from "../data/educationData";

export default function Educations() {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-medium text-sky-500 text-nowrap md:text-3xl">
            Educations
          </h2>
          <div className="bg-slate-500 h-[2px] w-full"></div>
        </div>
      </div>
      <div className="container px-5 mx-auto mt-8 md:mt-12">
        <div className="flex flex-col gap-10">
          <ul className="flex flex-col overflow-x-scroll gap-4 no-scrollbar">
            {educations.map((edu, index) => (
              <li
                key={index}
                className="border-l-2 pl-5 hover:opacity-60 transition duration-200"
              >
                <a
                  href={edu.link}
                  className="md:flex md:justify-between md:items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <div className="font-semibold text-gray-200 md:text-xl">
                      {edu.name}
                    </div>
                    <div className="text-xs text-gray-400 italic md:text-sm">
                      {edu.location}
                    </div>
                    {edu.gpa && (
                      <div className="text-xs text-gray-400 italic md:text-sm">
                        {edu.gpa}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 md:text-base">
                    {edu.period}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
