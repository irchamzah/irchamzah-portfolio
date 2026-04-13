import Image from "next/image";
import { webPortfolios } from "../data/portfolioData";

export default function WebPortfolio() {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-5 mx-auto">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-medium text-sky-500 text-nowrap md:text-3xl">
            Web Portfolio
          </h2>
          <div className="bg-slate-500 h-[2px] w-full"></div>
        </div>
      </div>
      <div className="container px-5 mx-auto mt-8 md:mt-12">
        <div className="flex gap-6 overflow-x-scroll no-scrollbar md:grid md:grid-cols-3 lg:grid-cols-4">
          {webPortfolios.map((portfolio, index) => (
            <div
              key={index}
              className="overflow-hidden flex flex-col justify-stretch bg-gray-900 min-w-72 md:min-w-full"
            >
              <a
                className="relative hover:opacity-70 duration-200"
                href={portfolio.link}
                target="_blank"
              >
                <div className="overflow-hidden">
                  <Image
                    src={portfolio.image}
                    alt=""
                    height={350}
                    width={350}
                    className="h-40 object-cover"
                  />
                </div>
                <div className="absolute left-0 top-0">
                  <p className="bg-black bg-opacity-50 m-3 px-3 py-1 text-xs rounded">
                    {portfolio.type}
                  </p>
                </div>
              </a>
              <div className="flex flex-col justify-between h-full p-4">
                <div>
                  <a
                    className="text-base font-bold text-sky-500 xl:text-lg hover:opacity-80 duration-200"
                    href={portfolio.link}
                    target="_blank"
                  >
                    {portfolio.title}
                  </a>
                  <div className="text-gray-400 text-xs mt-1">
                    {portfolio.technologies}
                  </div>
                  <div className="h-[1px] w-24 my-4 bg-gray-400"></div>
                  <p className="text-gray-400 text-xs text-justify xl:text-sm">
                    {portfolio.description}
                    {portfolio.sourceCode && (
                      <>
                        click{" "}
                        <a
                          href={portfolio.sourceCode}
                          className="underline text-sky-500 hover:opacity-90 text-nowrap"
                          target="_blank"
                        >
                          this link
                        </a>{" "}
                        to see the source code.
                      </>
                    )}
                    {portfolio.previewVideo && (
                      <>
                        <br />
                        <br />
                        <a
                          href={portfolio.previewVideo}
                          className="underline text-sky-500 hover:opacity-90 text-nowrap"
                          target="_blank"
                        >
                          See website&apos;s preview video
                        </a>
                      </>
                    )}
                    {portfolio.secondLink && (
                      <>
                        <br />
                        This is the{" "}
                        <a
                          href={portfolio.secondLink}
                          className="underline text-sky-500 hover:opacity-90 text-nowrap"
                          target="_blank"
                        >
                          second link
                        </a>{" "}
                        to access the website.
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <p className="mt-4 text-xs text-sky-500">
                    Created at {portfolio.createdDate}
                  </p>
                  <p className="mt-1 text-xs text-sky-500">
                    {portfolio.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
