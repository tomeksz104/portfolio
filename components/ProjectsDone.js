import Link from "next/link";
import Button from "./Button";

const ProjectsDone = () => {
  return (
    <section className="pt-8 pb-16 overflow-x-clip sm:pb-24 sm:pt-12 md:pt-16">
      <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 ">
        <h2 className="text-4xl font-semibold font-landrygothic text-slate-900 sm:text-5xl uppercase">
          Here's a glimpse of <br /> some exciting 👨‍💻 projects <br /> i've done
        </h2>

        <div className="relative max-w-xl mx-auto mt-16 space-y-16 lg:mx-0 lg:max-w-none">
          <div className="relative grid items-center gap-8 px-4 pt-5 overflow-hidden shadow-sm rounded-2xl bg-white pb-14 ring-1 ring-slate-300 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16">
            <div className="relative order-2 px-1 sm:px-4 lg:order-1 lg:col-[span_6/span_6] lg:pb-16 lg:pl-12 lg:pt-16 xl:col-[span_5/span_5] xl:pb-24 xl:pl-16 xl:pt-8">
              <div className="inline-flex items-center gap-2.5  text-sm	 font-medium leading-[16px] text-sky-900/80 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-sky-900/75"
                >
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    transform="translate(0.5 0.5)"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M10,11.01l8.378-8.389a2.122,2.122,0,0,1,3,0h0a2.122,2.122,0,0,1,0,3L13,14"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M7.514,11.941a3.214,3.214,0,1,1,4.545,4.545C10.8,17.74,6,18,6,18S6.26,13.2,7.514,11.941Z"
                      stroke="currentColor"
                    ></path>
                    <polyline points="12 2 2 2 2 22 22 22 22 12"></polyline>
                  </g>
                </svg>
                Branding
              </div>
              <h3 className="mt-5 text-2xl font-medium OTHER_FONT text-slate-900 sm:mt-6 sm:text-3xl">
                Tour
              </h3>
              <p className="mt-3 leading-8 text-base text-slate-700 sm:mt-4 sm:text-lg sm:leading-8">
                Tour is an interactive map where you can find interesting places
                to visit during your weekend trip!
              </p>
              <div className="flex items-center gap-3 mt-5">
                <div className="flex flex-wrap items-center justify-center mt-10 gap-10 lg:justify-start">
                  <Button
                    className="before:bg-[#adff00]"
                    classes="flex items-center gap-3"
                  >
                    <span className="bg-white rounded-full p-1.5">
                      <img src="/icons/github.svg" className="h-5 w-5" />
                    </span>
                    GitHub
                  </Button>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      className="relative flex items-center justify-center font-semibold text-black gap-8 group"
                      aria-label="Download CV"
                      href="https://dribbble.com"
                    >
                      <span className="twice-circle relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 before:transition-all before:duration-300 group-hover:ml-3 bg-[#754af8] before:content-[''] before:absolute before:border before:border-black before:ml-10 group-hover:before:ml-0 before:h-full before:w-full before:rounded-full">
                        <img
                          src="/icons/arrow-white.svg"
                          className="h-6 w-6 rotate-45 text-white fill-white"
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
              className="relative  group order-1 w-full h-full overflow-hidden dHctZ3JvdXA(NIEWIADOMO) aspect-h-9 aspect-w-16	 rounded-2xl  ring-1 ring-slate-100/75 lg:order-2 lg:col-[span_6/span_6] lg:rounded-l-none lg:rounded-r-none xl:col-[span_7/span_7] xl:rounded-tl-2xl"
              href="https://tour-tomeksz104.vercel.app/"
            >
              <img
                alt="Horizons in Perspective"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
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
                sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
                src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2Fimages%2Fcase_studies%2Fcase-study-01.jpg&w=750&q=75"
              />
            </a>
          </div>
          <div className="relative grid items-center gap-8 px-4 pt-5 overflow-hidden shadow-sm rounded-2xl bg-white pb-14 ring-1 ring-slate-300 sm:gap-12 sm:px-8 sm:pt-8 lg:grid-cols-12 lg:px-0 lg:py-0 xl:gap-16 xl:pt-16">
            <div className="relative order-2 px-1 sm:px-4 lg:col-[span_6/span_6] lg:pb-16 lg:pl-12 lg:pt-16 xl:col-[span_5/span_5] xl:pb-24 xl:pl-16 xl:pt-8">
              <div className="inline-flex items-center gap-2.5  text-sm	 font-medium leading-[16px] text-sky-900/80 sm:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-sky-900/75"
                >
                  <g
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    transform="translate(0.5 0.5)"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M10,11.01l8.378-8.389a2.122,2.122,0,0,1,3,0h0a2.122,2.122,0,0,1,0,3L13,14"
                      stroke="currentColor"
                    ></path>
                    <path
                      d="M7.514,11.941a3.214,3.214,0,1,1,4.545,4.545C10.8,17.74,6,18,6,18S6.26,13.2,7.514,11.941Z"
                      stroke="currentColor"
                    ></path>
                    <polyline points="12 2 2 2 2 22 22 22 22 12"></polyline>
                  </g>
                </svg>
                Branding
              </div>
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
                    className="before:bg-[#adff00]"
                    classes="flex items-center gap-3"
                  >
                    <span className="bg-white rounded-full p-1.5">
                      <img src="/icons/github.svg" className="h-5 w-5" />
                    </span>
                    GitHub
                  </Button>
                  <div className="flex gap-3 sm:gap-4">
                    <a
                      className="relative flex items-center justify-center font-semibold text-black gap-8 group"
                      aria-label="Download CV"
                      href="https://dribbble.com"
                    >
                      <span className="twice-circle relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 before:transition-all before:duration-300 group-hover:ml-3 bg-[#754af8] before:content-[''] before:absolute before:border before:border-black before:ml-10 group-hover:before:ml-0 before:h-full before:w-full before:rounded-full">
                        <img
                          src="/icons/arrow-white.svg"
                          className="h-6 w-6 rotate-45 text-white fill-white"
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
              <img
                alt="Horizons in Perspective"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
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
                sizes="(min-width: 1280px) 43rem, (min-width: 1024px) calc(50vw - 3.5rem), (min-width: 640px) 32rem, calc(100vw - 4.5rem)"
                src="https://jane-next-obfuscated-preview.vercel.app/_next/image?url=%2Fimages%2Fcase_studies%2Fcase-study-01.jpg&w=750&q=75"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDone;
