import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="relative p-2 mt-4 text-white bg-slate-950 border-t border-white/20">
      <p className="text-center">&copy; 2026 André Rodrigues</p>
      <a href="https://github.com/andrerodrigues8/Portfolio" className="absolute right-4 top-1/2 -translate-y-1/2  text-xl transition duration-500 hover:scale-110 hover:text-indigo-400" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          
        />
      </a>
    </div>
  );
}
export default Footer;
