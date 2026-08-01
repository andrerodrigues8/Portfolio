import type { ReactNode } from "react";
type CardProps = {
  children: ReactNode;
};
function ProjectImage({ children }: CardProps) {
  return (
    <div
      className="flex-1 m-4 max-w-1/2 relative overflow-hidden rounded-sm "
    >
      {children}
    </div>
  );
}

export default ProjectImage;
