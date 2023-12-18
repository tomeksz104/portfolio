"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  return (
    <div className="bg-black pb-24 pt-32 md:bg-gradient-to-r">
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl font-medium text-white sm:text-5xl lg:text-7xl uppercase font-landrygothic">
          Let's work <br /> together
        </h2>
        <button
          aria-label="Go to contact page"
          onClick={() => router.push("/contact")}
          className="bg-[#adff00] rounded-full p-1.5 shadow-sm duration-300 hover:scale-110 pointer-events-auto"
        >
          <Image
            alt=""
            aria-hidden="true"
            width={0}
            height={0}
            sizes="100vw"
            src="/icons/arrow.svg"
            className="h-16 w-16"
          />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
