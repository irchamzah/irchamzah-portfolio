import { contacts } from "../data/contactData";

export default function Contacts() {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-medium text-sky-500 text-nowrap md:text-3xl">
            Contacts
          </h2>
          <div className="bg-slate-500 h-[2px] w-full"></div>
        </div>
      </div>
      <div className="container px-5 mx-auto mt-8 md:mt-12">
        <div className="flex flex-col gap-10 items-center">
          <p className="text-xl text-sky-500 md:text-2xl">
            Feel Free to Connect With Me!
          </p>
          <div className="flex flex-col overflow-x-scroll gap-4 no-scrollbar md:flex-row">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  className="flex items-center gap-2 hover:opacity-60 transition duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-xl md:text-2xl">
                    <IconComponent />
                  </div>
                  <div className="text-sm md:text-base">{contact.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
