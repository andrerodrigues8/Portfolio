import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Language } from "./App";
import ProjectCard from "./Component_Templates/ProjectCard";
import ProjectDescription from "./Component_Templates/ProjectDescription";
import ProjectImage from "./Component_Templates/ProjectImage";
import {
  faDartLang,
  faFlutter,
  faPython,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
const text = {
  pt: {
    projects: "Projetos",
    title_Synertics: "Synertics - Aplicação Web",
    description_Synertics:
      "Este projeto é uma aplicação web que recolhe e monitoriza automaticamente os preços do mercado de eletricidade grego. Ajuda os utilizadores a ver facilmente as tendências diárias do mercado, verificar variações de preços e obter análises de energia atualizadas através de uma interface simples e design adaptado a telemóveis.\n\nA aplicação foi criada utilizando o framework Django para a sua estrutura principal e PostgreSQL para armazenar todos os dados em segurança. Utiliza o Celery e o Redis para executar tarefas de recolha de dados todos os dias, e corre dentro de contentores Docker para poder ser configurada facilmente em qualquer computador.",
    title_RunStats: "RunStats - Aplicação Mobile",
    description_RunStats:
      "RunStats é uma aplicação móvel que permite aos corredores acompanhar as suas estatísticas de corrida ao longo do tempo. Permite registar os dados principais de cada corrida e destaca automaticamente a melhor prestação. Através de gráficos simples e fáceis de ler, os utilizadores podem visualizar a evolução do seu ritmo e distância ao longo das corridas, tudo numa interface simples e adaptada a dispositivos móveis.\n\nA aplicação é desenvolvida em Flutter, o que lhe permite correr de forma fluida em dispositivos Android, estando atualmente disponível como um ficheiro APK leve e de fácil instalação.",
    title_GeoDummy: "GeoDummy - Aplicação Web",
    description_GeoDummy:
      "GeoDummy é uma aplicação web para visualização, exploração e análise de dados geoespaciais, desenvolvida para ser acessível a geógrafos e investigadores com pouca ou nenhuma experiência de programação. Suporta formatos GeoTIFF, GeoPackage e GeoJSON, permitindo aos utilizadores sobrepor e gerir várias camadas vetoriais e raster sobre basemaps personalizáveis, visualizar tabelas de atributos e executar scripts Python personalizados diretamente na interface, sem necessidade de programar.\n\nA aplicação corre em contentores Docker, facilitando a instalação em qualquer computador, através de um instalador dedicado que trata das dependências automaticamente. Este projeto foi desenvolvido no âmbito de um mestrado, por uma equipa de 12 pessoas. Fiz parte da equipa de frontend, embora tenha contribuído um pouco em todo o projeto.",
  },
  en: {
    projects: "Projects",
    title_Synertics: "Synertics - Web Application",
    description_Synertics:
      "This project is a web application that automatically collects and tracks Greek electricity market prices. It helps users easily view daily market trends, check price changes, and get up-to-date energy insights through an easy-to-use interface and mobile-friendly design. \n\n The app is built using the Django framework for its core structure and PostgreSQL to store all data safely. It uses Celery and Redis to run background scraping tasks every day, and runs inside Docker containers so it can be set up easily on any computer.",
    title_RunStats: "RunStats - Mobile Application",
    description_RunStats:
      "RunStats is a mobile application for runners to track their race statistics over time. It lets users log key details for each race and automatically highlights their best performance. Through simple, easy-to-read charts, users can visualize how their pace and distance have evolved across their races, all within a clean, mobile-friendly interface.\n\nThe app is built with Flutter, allowing it to run smoothly on Android devices, and is currently available as a lightweight, easy-to-install APK.",
    title_GeoDummy: "GeoDummy - Web Application",
    description_GeoDummy: "GeoDummy is a web application for visualizing, exploring, and analyzing geospatial data, built to be accessible to geographers and researchers with little to no programming experience. It supports GeoTIFF, GeoPackage, and GeoJSON formats, letting users overlay and manage multiple vector and raster layers on customizable basemaps, view attribute tables, and run custom Python scripts directly through the interface without writing code.\n\nThe app runs inside Docker containers for easy setup on any computer, with a dedicated installer that handles dependencies automatically. This project was developed as part of a master's course, by a team of 12 people. I was part of the frontend team, though I contributed a bit across the whole project.",
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
          <ProjectCard>
            <ProjectImage>
              <img src="projects/GeoDummy.png" alt="GeoDummy App Image" />
            </ProjectImage>
            <ProjectDescription
              title={text[language].title_GeoDummy}
              description={text[language].description_GeoDummy}
              link="https://github.com/joaosamueldiogo/GeoDummy"
              techImages={[
                <img
                  className="w-[2em] h-[1em]"
                  src="logos/vite.svg"
                  alt="Django Icon"
                />,
                <img
                  className="w-[2em] h-[1em]"
                  src="logos/flask.svg"
                  alt="Flask Icon"
                />,
                <FontAwesomeIcon icon={faTypescript} />,
                <FontAwesomeIcon icon={faPython} />,
              ]}
            />
          </ProjectCard>
        </div>
      </div>
    </>
  );
}
export default Projects;
