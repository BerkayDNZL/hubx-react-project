import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IHeaderImage {
  src: string;
  animation: any;
}

export const HeaderImage: FC<IHeaderImage> = ({ src, animation }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imgRef.current) {
      const { from, to } = animation;
      gsap.fromTo(imgRef.current, from, { ...to, duration: 1.5, ease: "power3.out" });
    }
  }, [src, animation]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt="Slider"
      className="max-h-full max-w-full  drop-shadow-xl"
    />
  );
};
