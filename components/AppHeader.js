"use client";

import { useState } from "react";
import Container from "./Container";
import Button from "./Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const links = [
  {
    to: "/",
    section: "home",
    label: "Home",
  },
  {
    to: "/about",
    section: "about",
    label: "About",
  },
  {
    to: "/projects",
    section: "projects",
    label: "Projects",
  },
];

const AppHeader = () => {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleMenu = () => {
    setIsToggled((prevState) => !prevState);
  };

  const handleClickScroll = async (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header>
      <nav className="absolute z-50 w-full bg-black border-b border-black/5 dark:border-white/5 lg:border-transparent">
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
              <Link
                aria-current="page"
                className="flex items-center gap-5 text-white mr-5 cursor-pointer font-landrygothic"
                href="/"
              >
                <img
                  className="h-8 object-cover -rotate-45"
                  src="/img/ts-logo.png"
                  alt="Tomasz Szamocki logo"
                />
                TOMASZ SZAMOCKI
              </Link>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <button
                  onClick={handleToggleMenu}
                  aria-label="humburger"
                  id="hamburger"
                  className={`relative -mr-6 p-6 ${isToggled && "toggled"}`}
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              className={`fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden ${
                isToggled && "origin-top scale-y-100"
              }`}
            ></div>
            <div
              id="navlinks"
              className={`invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none ${
                isToggled &&
                "!visible !scale-100 !opacity-100 !lg:translate-y-0"
              }`}
            >
              <div className="w-full text-gray-800 lg:text-gray-300 lg:w-auto lg:pr-4 lg:pt-0">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => {
                          handleClickScroll(link.section);
                        }}
                        className="lg:hover:text-white block transition md:px-4"
                      >
                        <span>{link.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <Button onClickTo="/contact" className="before:bg-[#adff00]">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default AppHeader;
