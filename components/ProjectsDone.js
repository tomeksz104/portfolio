import Button from "./Button";
import Image from "next/image";

const ProjectsDone = () => {
  return (
    <section
      id="projects"
      className="projects pt-8 pb-16 overflow-x-clip sm:pb-24 sm:pt-12 md:pt-16"
    >
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-semibold font-landrygothic text-slate-900 sm:text-5xl uppercase">
          Here's a glimpse of <br /> some exciting 👨‍💻 projects <br /> i've done
        </h2>

        <div className="relative max-w-xl mx-auto mt-16 space-y-16 lg:mx-0 lg:max-w-none">
          <div className="relative grid items-center gap-8 px-4 pt-5 overflow-hidden shadow-sm rounded-2xl bg-white pb-14 ring-1 ring-slate-300 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16">
            <div className="relative order-2 px-1 sm:px-4 lg:order-1 lg:col-[span_6/span_6] lg:pb-16 lg:pl-12 lg:pt-16 xl:col-[span_5/span_5] xl:pb-24 xl:pl-16 xl:pt-8">
              <h3 className="mt-5 text-2xl font-medium OTHER_FONT text-slate-900 sm:mt-6 sm:text-3xl">
                Tour
              </h3>
              <p className="mt-3 leading-8 text-base text-slate-700 sm:mt-4 sm:text-lg sm:leading-8">
                Tour is an interactive map where you can find interesting places
                to visit during your weekend trip!
              </p>
              <div className="flex flex-wrap items-center justify-center mt-10 gap-10 lg:justify-start">
                <Button
                  href="https://github.com/tomeksz104/Tour"
                  className="before:bg-[#adff00]"
                  classes="flex items-center gap-2 sm:gap-3"
                >
                  <span className="bg-white rounded-full p-1.5">
                    <Image
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/icons/github.svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                    />
                  </span>
                  GitHub
                </Button>
                <div className="flex gap-3 sm:gap-4">
                  <a
                    target="_blank"
                    className="relative flex items-center justify-center font-semibold text-xs sm:text-base text-black gap-8 group"
                    aria-label="Live Preview Cryptotracker project"
                    href="https://tour-tomeksz104.vercel.app/"
                  >
                    <span className="twice-circle relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 before:transition-all before:duration-300 group-hover:ml-3 bg-[#754af8] before:content-[''] before:absolute before:border before:border-black before:ml-10 group-hover:before:ml-0 before:h-full before:w-full before:rounded-full">
                      <Image
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/icons/arrow-white.svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 rotate-45 text-white fill-white"
                      />
                    </span>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              className="relative  group order-1 w-full h-full overflow-hidden dHctZ3JvdXA(NIEWIADOMO) aspect-h-9 aspect-w-16	 rounded-2xl  ring-1 ring-slate-100/75 lg:order-2 lg:col-[span_6/span_6] lg:rounded-l-none lg:rounded-r-none xl:col-[span_7/span_7] xl:rounded-tl-2xl"
              href="https://tour-tomeksz104.vercel.app/"
            >
              <Image
                alt="Tour Project"
                width={0}
                height={0}
                sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
                src="/img/tour-project.webp"
                className="absolute inset-x-0 bottom-0 object-cover object-top transition duration-300 top-16 group-hover:scale-105	"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  color: "transparent",
                }}
              />
            </a>
          </div>
          <div className="relative grid items-center gap-8 px-4 pt-5 overflow-hidden shadow-sm rounded-2xl bg-white pb-14 ring-1 ring-slate-300 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16">
            <div className="relative order-2 px-1 sm:px-4 lg:col-[span_6/span_6] lg:pb-16 lg:pl-12 lg:pt-16 xl:col-[span_5/span_5] xl:pb-24 xl:pl-16 xl:pt-8">
              <h3 className="mt-5 text-2xl font-medium OTHER_FONT text-slate-900 sm:mt-6 sm:text-3xl">
                CryptoTracker
              </h3>
              <p className="mt-3 leading-8 text-base text-slate-700 sm:mt-4 sm:text-lg sm:leading-8">
                This is a cryptocurrency price tracking application that was
                built using Coingecko Api and is a PWA web application. It shows
                the latest price of all cryptocurrencies.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex flex-wrap items-center justify-center mt-10 gap-10 lg:justify-start">
                  <Button
                    href="https://github.com/tomeksz104/CryptoTracker"
                    className="before:bg-[#adff00]"
                    classes="flex items-center gap-2 sm:gap-3"
                  >
                    <span className="bg-white rounded-full p-1.5">
                      <Image
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/icons/github.svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                      />
                    </span>
                    GitHub
                  </Button>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      target="_blank"
                      className="relative flex items-center justify-center font-semibold text-xs sm:text-base text-black gap-8 group"
                      aria-label="Live Preview Cryptotracker project"
                      href="https://tomeksz104.github.io/CryptoTracker/"
                    >
                      <span className="twice-circle relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 before:transition-all before:duration-300 group-hover:ml-3 bg-[#754af8] before:content-[''] before:absolute before:border before:border-black before:ml-10 group-hover:before:ml-0 before:h-full before:w-full before:rounded-full">
                        <Image
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          src="/icons/arrow-white.svg"
                          className="h-5 w-5 sm:h-6 sm:w-6 rotate-45 text-white fill-white"
                        />
                      </span>
                      Live Preview
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              className="relative group order-1 w-full h-full overflow-hidden dHctZ3JvdXA(NIEWIADOMO) aspect-h-9 aspect-w-16	rounded-2xl ring-1 ring-slate-100/75 lg:col-[span_6/span_6] lg:rounded-l-none lg:rounded-r-none xl:col-[span_7/span_7] xl:rounded-tr-2xl"
              href="https://tomeksz104.github.io/CryptoTracker"
            >
              <Image
                alt="CryptoTracker Project"
                width={0}
                height={0}
                sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
                src="/img/cryptotracker-project.webp"
                className="absolute inset-x-0 bottom-0 object-cover object-top transition duration-300 top-16 group-hover:scale-105	"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: "0",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  color: "transparent",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDone;
