import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Language } from "./App";
import ProjectCard from "./Component_Templates/ProjectCard";
import ProjectDescription from "./Component_Templates/ProjectDescription";
import ProjectImage from "./Component_Templates/ProjectImage";
import {
  faDartLang,
  faFlutter,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const text = {
  pt: {
    projects: "Projetos",
    title_Synertics: "Synertics - Aplicação Web",
    description_Synertics:
      "Este projeto é uma aplicação web que recolhe e monitoriza automaticamente os preços do mercado de eletricidade grego. Ajuda os utilizadores a ver facilmente as tendências diárias do mercado, verificar variações de preços e obter análises de energia atualizadas através de uma interface simples e design adaptado a telemóveis.\n\nA aplicação foi criada utilizando o framework Django para a sua estrutura principal e PostgreSQL para armazenar todos os dados em segurança. Utiliza o Celery e o Redis para executar tarefas de recolha de dados todos os dias, e corre dentro de contentores Docker para poder ser configurada facilmente em qualquer computador.",
    title_RunStats: "RunStats - Aplicação Mobile",
    description_RunStats:
      "O RunStats é uma aplicação móvel que permite aos corredores acompanhar as suas estatísticas de corrida ao longo do tempo. Permite registar os dados principais de cada corrida e destaca automaticamente a melhor prestação. Através de gráficos simples e fáceis de ler, os utilizadores podem visualizar a evolução do seu ritmo e distância ao longo das corridas, tudo numa interface simples e adaptada a dispositivos móveis.\n\nA aplicação é desenvolvida em Flutter, o que lhe permite correr de forma fluida em dispositivos Android, estando atualmente disponível como um ficheiro APK leve e de fácil instalação.",
  },
  en: {
    projects: "Projects",
    title_Synertics: "Synertics - Web App",
    description_Synertics:
      "This project is a web application that automatically collects and tracks Greek electricity market prices. It helps users easily view daily market trends, check price changes, and get up-to-date energy insights through an easy-to-use interface and mobile-friendly design. \n\n The app is built using the Django framework for its core structure and PostgreSQL to store all data safely. It uses Celery and Redis to run background scraping tasks every day, and runs inside Docker containers so it can be set up easily on any computer.",
    title_RunStats: "RunStats - Mobile App",
    description_RunStats:
      "RunStats is a mobile application for runners to track their race statistics over time. It lets users log key details for each race and automatically highlights their best performance. Through simple, easy-to-read charts, users can visualize how their pace and distance have evolved across their races, all within a clean, mobile-friendly interface.\n\nThe app is built with Flutter, allowing it to run smoothly on Android devices, and is currently available as a lightweight, easy-to-install APK.",
  },
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
            <ProjectDescription
              title={text[language].title_Synertics}
              description={text[language].description_Synertics}
              link="https://github.com/andrerodrigues8/SynerticsProject"
              techImages={[
                <img
                  className="w-[2em] h-[1em]"
                  src="logos/django.svg"
                  alt="Django Icon"
                />,
                <FontAwesomeIcon icon={faPython} />,
              ]}
            />
          </ProjectCard>
          <ProjectCard>
            <div className="flex flex-row max-w-1/2">
              <ProjectImage>
                <img
                  src="projects/runStatsMain.png"
                  alt="RunStats App Image"
                  className="h-100 w-auto object-contain rounded-xl"
                />
              </ProjectImage>

              <ProjectImage>
                <img
                  src="projects/runStatsAdd.png"
                  alt="RunStats App Image"
                  className="h-100 w-auto object-contain rounded-xl"
                />
              </ProjectImage>
            </div>
            <ProjectDescription
              title={text[language].title_RunStats}
              description={text[language].description_RunStats}
              link="https://github.com/andrerodrigues8/RunStats/releases"
              techImages={[
                <FontAwesomeIcon icon={faFlutter} />,
                <FontAwesomeIcon icon={faDartLang} />,
              ]}
            />
          </ProjectCard>
        </div>
      </div>
    </>
  );
}
export default Projects;
