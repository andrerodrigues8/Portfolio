type Props = {
  title: string;
};
function ProjectDescription({ title }: Props) {
  return (
    <div className="flex-1 text-left m-2 text-white">
      <div className="flex justify-between items-center flex-row">Synertics - Web Application</div>
      <div>
        <span>Symbol</span>
      </div>
      <hr />
      <p className="block my-4 mx-0">Synertics is a web application that automatically collects and tracks Greek electricity market prices. It helps users easily view daily market trends, check price changes, and get up-to-date energy insights through an easy-to-use interface and mobile-friendly design.
        <br />
        <br />
        The app is built using the Django framework for its core structure and PostgreSQL to store all data safely. It uses Celery and Redis to run background scraping tasks every day, and runs inside Docker containers so it can be set up easily on any computer.

      </p>
    </div>
  );
}

export default ProjectDescription;
