// IconImage.tsx
interface IconImageProps {
  src: string;
  alt: string;
  className?: string;
}

function IconImage({ src, alt, className = "" }: IconImageProps) {
  return (
    <span
      role="img"
      aria-label={alt}
      className={`inline-block bg-white transition duration-300 group-hover:bg-indigo-800 ${className}`}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default IconImage;