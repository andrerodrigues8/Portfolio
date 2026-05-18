import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <>
      <div className="pt-7">
        <h1 className="text-5xl font-bold text-white font-raleway text-center">
          André Nogueira Rodrigues
        </h1>
      </div>
      <div className="flex justify-center gap-8 mt-10">
        <a
          className="inline-block w-11 h-11 bg-black text-white rounded-3xl text-center leading-11 text-lg transition duration-500 hover:scale-110 hover:bg-indigo-500"
          href="https://www.linkedin.com/in/andré-rodrigues-b45009359"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="inline-block w-11 h-11 bg-black text-white rounded-3xl text-center leading-11 text-lg transition duration-500 hover:scale-110 hover:bg-indigo-500"
          href="https://github.com/andrerodrigues8"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </>
  );
}
export default Header;
