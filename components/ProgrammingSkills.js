import { programmingSkills } from "../data/skillsData";

export default function ProgrammingSkills() {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-medium text-sky-500 text-nowrap md:text-3xl">
            Programming Skills
          </h2>
          <div className="bg-slate-500 h-[2px] w-full"></div>
        </div>
      </div>
      <div className="container px-5 mx-auto mt-8 md:mt-12">
        <div className="grid grid-cols-4 gap-y-16 gap-x-10 justify-stretch md:gap-x-32">
          {programmingSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center hover:opacity-60 transition duration-200"
              >
                <div className="relative p-2 w-full">
                  <div className="">
                    <IconComponent
                      height={128}
                      width={128}
                      className="mx-auto object-center object-contain h-12 w-12 md:h-14 md:w-14 lg:h-20 lg:w-20 xl:h-28 xl:w-28 text-white text-8xl"
                    />
                  </div>
                  <p
                    className={`absolute right-0 top-0 rounded-full px-[6px] py-[2px] text-[10px] ${skill.level === "Fluent" ? "bg-indigo-500" : skill.level === "Basic" ? "bg-gray-500" : "bg-sky-500"}`}
                  >
                    {skill.level}
                  </p>
                </div>
                <div className="text-[10px] md:text-sm text-nowrap">
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
