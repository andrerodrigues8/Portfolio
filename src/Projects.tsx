import type { Language } from "./App";
import ProjectCard from "./Component_Templates/ProjectCard";
import ProjectDescription from "./Component_Templates/ProjectDescription";
import ProjectImage from "./Component_Templates/ProjectImage";
const text = {
  pt: {
    projects:"Projetos"
  },
  en: {
    projects:"Projects"
  }
};
interface AboutProps {
  language: Language;
}
function Projects({ language }: AboutProps) {
  return (
    <>
      <div className="text-center my-20" id="projects">
        <h2 className="text-3xl font-bold text-white font-raleway text-center m-4">
          {text[language].projects}
        </h2>
        <div className="flex flex-col gap-2 justify-center">
            <ProjectCard>
                <ProjectImage>
                    <img src="projects/synertics.png" alt="Synertics App Image" />
                </ProjectImage>
                <ProjectDescription title="Hello"/>
            </ProjectCard>

        
      
        </div>
        
      </div>
    </>
  );
}
export default Projects;
