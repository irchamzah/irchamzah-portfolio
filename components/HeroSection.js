import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-40 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex gap-20 items-center">
          <div className="max-w-4xl">
            <div className="flex">
              <div className="w-1/2 md:w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl">
                  Irchamzah Fikri Ababil
                </h2>
                <h3 className="mt-3 text-sky-500 md:text-xl lg:text-2xl">
                  Web Developer
                </h3>
              </div>
              <div className="object-cover overflow-hidden bg-gray-300 w-32 h-32 relative mx-auto my-auto justify-end md:hidden">
                <Image
                  src={"/irchamzah_photo.png"}
                  alt=""
                  width={128}
                  height={128}
                  className=""
                />
              </div>
            </div>
            <p className="text-xs mt-5 text-justify md:text-sm lg:text-base">
              A fresh graduate from the State Polytechnic of Jember, majoring in
              Information Technology, specifically in the Informatics
              Engineering program (D4). Currently delving into several
              technologies such as React Js, Next Js, Tailwind CSS, PostgreSQL,
              Prisma ORM, Mongo DB, Laravel, and Mysql.
            </p>
          </div>
          <div className="overflow-hidden min-w-44 max-h-44 bg-gray-300 relative mx-auto my-auto object-center hidden md:block xl:max-h-60">
            <Image
              src={"/irchamzah_photo.png"}
              alt=""
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
