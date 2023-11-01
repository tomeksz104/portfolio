import Container from "./Container";

const AboutMe = () => {
  return (
    <Container>
      <p className="max-w-4xl mx-auto mt-96 text-xl sm:text-3xl text-slate-800 text-center leading-normal">
        👋Hello! I'm <span className="text-purple-600 underline">Tomasz</span>,
        - a creative and driven web developer. I Thrive on turning imaginative
        ideas into digital realities, constantly seeking innovative ways to
        blend design and technology. I possess a strong foundation in{" "}
        <span className="text-purple-600 underline">FRONT-END</span> development
        and user-centered interfaces.
      </p>
    </Container>
  );
};

export default AboutMe;
