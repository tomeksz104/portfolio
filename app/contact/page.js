"use client";

import Container from "@/components/Container";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";

const ContactPage = () => {
  const [value, copy] = useCopyToClipboard();

  return (
    <section className="flex-1">
      <Container>
        <div className="w-full mx-auto pt-56">
          <h1 class="text-4xl text-center font-landrygothic text-black uppercase">
            Choose your way to contact me
          </h1>
          <div class="w-full justify-center mx-auto mt-24 flex items-center gap-3">
            <a
              target="_blank"
              class="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full gap-3 h-14 px-6 font-semibold hover:bg-[#adff00]"
              aria-label="Contact with Discord"
              href="https://discord.gg/UHUt9ahn"
            >
              <img src="/img/discord.png" className="h-4 w-4 sm:h-5 sm:w-5" />
              Discord
            </a>
            <a
              target="_blank"
              class="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full gap-3 h-14 px-6 font-semibold hover:bg-[#adff00]"
              aria-label="Contact with LinkedIn"
              href="https://www.linkedin.com/in/tomasz-szamocki-5679a6208/"
            >
              <img src="/img/linkedin.png" className="h-4 w-4 sm:h-5 sm:w-5" />
              LinkedIn
            </a>
            <a
              class="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full gap-3 h-14 px-6 font-semibold hover:bg-[#adff00]"
              aria-label="Contact with E-mail"
              href="mailto:tomeksz104@gmail.com"
            >
              <img
                src="/img/email-icon.png"
                className="h-4 w-4 sm:h-5 sm:w-5"
              />
              E-mail
            </a>
            <button
              onClick={() => copy("tomeksz104@gmail.com")}
              class="flex shrink-0 items-center justify-center bg-white duration-200 border border-black rounded-full gap-3 h-14 px-6 font-semibold hover:bg-[#adff00]"
              aria-label="Copy e-mail tomeksz104@gmail.com"
            >
              tomeksz104@gmail.com
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
