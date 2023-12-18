import Image from "next/image";

const ToolsUsed = () => {
  return (
    <section className="relative flex justify-center mt-24 mb-16 pt-16 gap-x-12 overflow-x-clip sm:gap-x-16 lg:pt-12 lg:pb-14">
      <div className="absolute inset-y-0 left-0 w-64 h-full bg-gradient-to-r from-white/50 to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-64 h-full bg-gradient-to-l from-white/50 to-transparent"></div>
      <div className="absolute -top-8 right-4 flex gap-6 sm:right-16 lg:top-[unset] lg:right-0 lg:-bottom-12 xl:-bottom-20 2xl:right-32">
        <svg
          viewBox="0 0 107 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative top-4 -right-1 h-auto w-[68px] transform rotate-[160deg] text-slate-600 lg:w-20 lg:rotate-[30deg] lg:-scale-x-100"
        >
          <path
            d="M0.447937 18.1614C9.81014 31.5352 18.4347 42.3598 31.519 52.0087C40.0175 58.2759 54.5547 65.2946 64.1291 57.0482C74.8617 47.8042 84.2643 34.1413 91.7659 22.1683C95.8416 15.6632 100.326 9.79988 103.994 3.06629C104.777 1.62775 106.117 0.590713 103.454 1.84721C99.6476 3.64332 95.7206 5.00081 91.7126 6.32044C84.0852 8.83174 82.4146 9.9082 92.4987 7.40962C94.8989 6.81489 101.851 3.59526 104.567 4.38527C107.097 5.12145 106.361 12.9525 106.422 14.9305C106.9 30.442 95.1386 15.7417 88.7647 11.1467"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          ></path>
        </svg>
        <span className="inline-block w-48 transform font-gochihand text-[22px] tracking-wide text-slate-600 lg:text-2xl lg:leading-8">
          The tools I use on my projects
        </span>
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-0">
        <Image
          alt="Javascript"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/javascript.webp"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-8">
        <Image
          alt="HTML5"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/html5.webp"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-16">
        <Image
          alt="CSS"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/css.webp"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] dHctbXQtMjQ">
        <Image
          alt="Tailwind CSS"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/tailwindcss.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-16">
        <Image
          alt="React framework"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/react.webp"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-8">
        <Image
          alt="Nextjs"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/nextjs.webp"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-0">
        <Image
          alt="MongoDB"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/mongodb.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-8">
        <Image
          alt="NextAuth library"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/next-auth.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-16">
        <Image
          alt="Redux toolkit"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/redux-toolkit.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] dHctbXQtMjQ">
        <Image
          alt="React router"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/react-router.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-16">
        <Image
          alt="Firebase"
          width="64"
          height="64"
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src="/img/firebase.png"
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
        />
      </div>
      {/* <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-8">
        <img
          alt="C programming language"
          loading="lazy"
          width="64"
          height="64"
          decoding="async"
          
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src=""
        />
      </div>
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-50/90 shadow-sm	 shadow-sky-100 ring ring-slate-100 sm:h-[88px] sm:w-[88px] mt-0">
        <img
          alt="Ruby language"
          loading="lazy"
          width="64"
          height="64"
          decoding="async"
          
          className="w-8 h-auto shrink-0 sm:w-10"
          style={{ color: "transparent" }}
          sizes="(min-width: 640px) 2.5rem, 2rem"
          src=""
        />
      </div> */}
    </section>
  );
};

export default ToolsUsed;
