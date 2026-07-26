import type { Language } from "./App";
const text = {
  pt: {
    about:
      "Olá, sou o André, estudante de Mestrado em Engenharia Informática, com especialização em Engenharia de Software. Sou também licenciado em Engenharia Física, formação que me proporcionou uma base sólida em sistemas embebidos. O meu principal interesse é a engenharia de software, em particular o desenvolvimento web, mas também gosto de desenvolver jogos e projetos de sistemas embebidos.",
  },
  en: {
    about:
      "Hello, I'm André, a Master's student in Informatics Engineering, specializing in Software Engineering. I also hold a Bachelor's degree in Physics Engineering, which gave me a solid foundation in embedded systems. My main interest lies in software engineering, particularly web development, but I also enjoy working on embedded systems projects and developing games.",
  },
};
interface AboutProps {
  language: Language;
}
function About({ language }: AboutProps) {
  return (
    <>
      <div className="text-center max-w-2/3 mt-7 m-auto" id="about">
        <p className="text-white font-raleway ">{text[language].about}</p>
      </div>
    </>
  );
}
export default About;
