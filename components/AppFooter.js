import Container from "./Container";

export const links = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/contact",
    label: "About",
  },
  {
    to: "/projects",
    label: "Projects",
  },
];

const AppFooter = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="py-[30px]">
          <div className="grid items-center gap-12 grid-cols-1 md:grid-cols-2">
            <div className="mx-auto lg:mx-0 justify-center md:text-left">
              <a
                aria-current="page"
                className="flex items-center gap-5 text-white mr-5 cursor-pointer font-landrygothic"
                href="#/"
              >
                <img
                  className="h-8 object-cover -rotate-45"
                  src="/img/ts-logo.png"
                  alt="Crypto Currency App Logo"
                />
                TOMASZ SZAMOCKI
              </a>
            </div>
            <div className="text-center md:text-end lg:text-sm">
              <ul className="space-x-6">
                {links.map((link, index) => (
                  <li key={index} className="inline-block">
                    <a
                      className="text-gray-300 hover:text-white"
                      href={link.to}
                    >
                      {link.label}
                    </a>
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
