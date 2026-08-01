import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
type Props = {
  title: string;
  description: string;
  link: string;
  techImages: React.ReactNode[];
};
function ProjectDescription({ title, description, link, techImages }: Props) {
  return (
    <div className="flex-1 text-left m-2 text-white">
      <div className="flex justify-between items-center flex-row">
        <h3 className="text-xl font-bold">{title}</h3>
        <div>
          <a
            href={link}
            className="text-2xl mx-1 transition duration-300 hover:text-indigo-800"
            target="_blank"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        {techImages.map((image) => (
          <span
            className="bg-indigo-800 inline-flex items-center py-1 px-2 rounded-md text-sm font-bold m-1 text-center cursor-default"
          >
            {image}
          </span>
        ))}
      </div>
      <hr className="my-2 border-t border-[#CCCCCC]" />
      <p className="block mx-0 whitespace-pre-line">{description}</p>
    </div>
  );
}

export default ProjectDescription;
