import Image from "next/image";
import Button from "./Button";

const HeroSection = () => {
  return (
    <>
      <section
        id="home"
        className="home relative bg-black py-20 overflow-hidden lg:py-24 overflow-visible"
      >
        <div className="mx-auto max-w-screen-xl px-5 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center mx-auto lg:items-start">
            <h1 className="text-4xl text-center font-landrygothic text-white sm:text-5xl lg:text-7xl lg:text-left  uppercase">
              Coding with <br />
              <span className="lg:ml-16">🔥 passion, creating</span>
              <br /> with purpose
            </h1>
            <p className="max-w-xl mt-6 text-lg leading-8 text-center text-gray-400 lg:text-left">
              Hello and welcome to my web developer portfolio! I'm thrilled to
              showcase my passion for crafting captivating and functional
              websites.
            </p>
            <div className="flex flex-wrap items-center justify-center mt-10 gap-10 lg:justify-start">
              <Button
                onClickTo="/contact"
                className="before:bg-[#adff00]"
                classes="flex items-center gap-3"
              >
                <span className="bg-white rounded-full p-1.5">
                  <Image
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    src="/icons/hand-waving.svg"
                    className="h-4 w-4 sm:h-5 sm:w-5"
                  />
                </span>
                Let's Talk
              </Button>
              <div className="flex gap-3 sm:gap-4">
                <a
                  className="relative flex items-center justify-center text-xs text-white gap-8 group"
                  aria-label="Download CV"
                  href="/Tomasz_Szamocki_Resume.pdf"
                  download="/Tomasz_Szamocki_Resume.pdf"
                >
                  <span className="relative flex items-center justify-center rounded-full p-1.5 transition-all duration-300 before:-z-10 before:transition-all before:duration-300 group-hover:ml-3 bg-[#adff00] before:content-[''] before:absolute before:border before:border-white before:ml-10 group-hover:before:ml-0 before:h-full before:w-full before:rounded-full">
                    <Image
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      src="/icons/arrow.svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 rotate-45"
                    />
                  </span>
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-lg mx-auto lg:absolute lg:right-0 lg:bottom-0 lg:mr-0 mt-10 -mb-96">
            <div className="relative rounded-lg">
              <Image
                width={0}
                height={0}
                sizes="(min-width: 552px) 32rem, calc(100vw - 2.5rem)"
                src="/img/hero-photo-tomek.png"
                className="w-full h-full rounded-lg"
                style={{
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
              />
            </div>
          </div>
          <div className="hidden lg:block w-full max-w-xl xl:max-w-2xl  absolute bottom-0 left-0 -mb-80 px-5 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold">Check Me:</h3>
            <div className="mt-3 flex items-center gap-3">
              <a
                target="_blank"
                className="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full h-14 w-14 font-semibold hover:bg-[#adff00]"
                aria-label="Check on GitHub"
                href="https://github.com/tomeksz104"
              >
                Git
              </a>

              <a
                target="_blank"
                className="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full h-14 w-14 font-semibold hover:bg-[#adff00]"
                aria-label="Check on LinkedIn"
                href="https://www.linkedin.com/in/tomasz-szamocki-5679a6208/"
              >
                In.
              </a>
              <span className="w-full h-[1px] ml-5 bg-black"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
