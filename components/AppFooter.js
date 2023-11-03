"use client";

import Link from "next/link";
import Container from "./Container";
import { useRouter } from "next/navigation";

import { links } from "./AppHeader";
import Image from "next/image";

const AppFooter = () => {
  const router = useRouter();

  const handleClickScroll = async (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="bg-black mt-auto">
      <Container>
        <div className="py-[30px]">
          <div className="grid items-center gap-12 grid-cols-1 md:grid-cols-2">
            <div className="mx-auto lg:mx-0 justify-center md:text-left">
              <Link
                aria-current="page"
                className="flex items-center gap-5 text-white mr-5 cursor-pointer font-landrygothic"
                href="/"
              >
                <Image
                  alt="Tomasz Szamocki logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/img/ts-logo.png"
                  className="h-8 w-8 object-cover -rotate-45"
                />
                TOMASZ SZAMOCKI
              </Link>
            </div>
            <div className="text-center md:text-end lg:text-sm">
              <ul className="space-x-6">
                {links.map((link, index) => (
                  <li key={index} className="inline-block">
                    <button
                      onClick={() => {
                        handleClickScroll(link.section);
                      }}
                      className="text-gray-300 hover:text-white"
                      href={link.to}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default AppFooter;
