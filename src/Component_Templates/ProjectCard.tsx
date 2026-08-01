import type { ReactNode } from "react";
type CardProps = {
  children: ReactNode;
};
function ProjectCard({ children }: CardProps) {
  return (
    <div
      className="p-1 bg-white/10 rounded-xl shadow-md mx-10 flex flex-row"
    >
      {children}
    </div>
  );
}

export default ProjectCard;
