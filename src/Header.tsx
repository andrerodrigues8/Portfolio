import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Language } from "./App";

interface HeaderProps {
  changeLanguage: (language:Language) =>void;
  language:Language;
}
const text = {
  pt: {
    about:"Sobre",
    skills:"Competências",
    projects:"Projetos",
    contact:"Contacto"
      
  },
  en: {
    about:"About",
    skills:"Skills",
    projects:"Projects",
    contact:"Contact"
      
  },
};
function Header({changeLanguage,language}:HeaderProps) {
  return (
    <>
      <div className="flex items-center gap-2 place-content-end mr-3">
        <button
          onClick={() => changeLanguage("pt")}
          className={`text-white text-sm tracking-wide uppercase transition duration-300 hover:scale-110 hover:text-indigo-800 ${
            language === "pt" ? "underline underline-offset-2" : ""
          }`}
        >
          PT
        </button>

        <span className="text-white">/</span>

        <button
          onClick={() => changeLanguage("en")}
          className={`text-white text-sm tracking-wide uppercase transition duration-300 hover:scale-110 hover:text-indigo-600 ${
            language === "en" ? "underline underline-offset-2" : ""
          }`}
        >
          EN
        </button>
      </div>
      <div className="">
        <h1 className="text-5xl font-bold text-white font-raleway text-center">
          André Nogueira Rodrigues
        </h1>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <a
          className="inline-block w-11 h-11 bg-white rounded-3xl text-center leading-11 text-xl transition duration-500 hover:scale-110 hover:bg-indigo-600"
          href="https://www.linkedin.com/in/andré-rodrigues-b45009359"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="inline-block w-11 h-11 bg-white rounded-3xl text-center leading-11 text-xl transition duration-500 hover:scale-110 hover:bg-indigo-800"
          href="https://github.com/andrerodrigues8"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <nav className="mt-7">
        <ul className="flex justify-center gap-10 font-raleway">
          <li>
            <a
              href="#about"
              className="inline-block text-white text-sm tracking-wide uppercase relative pb-1 transition duration-300 hover:scale-110 hover:text-indigo-800"
            >
              {text[language].about}
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="inline-block text-white text-sm tracking-wide uppercase relative pb-1 transition duration-300 hover:scale-110 hover:text-indigo-800"
            >
              {text[language].skills}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="inline-block text-white text-sm tracking-wide uppercase relative pb-1 transition duration-300 hover:scale-110 hover:text-indigo-800"
            >
              {text[language].projects}
            </a>
          </li>
          
          <li>
            <a
              href="#contact"
              className="inline-block text-white text-sm tracking-wide uppercase relative pb-1 transition duration-300 hover:scale-110 hover:text-indigo-800"
            >
              {text[language].contact}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
