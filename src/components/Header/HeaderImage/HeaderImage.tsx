import { FC, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { animationVariants } from "../animations";

export type SliderType = "scaleIn" | "fadeIn" | "centerImagesFromBottom" | null;
interface ExtraImage {
  src: string;
  bottom?: string;
  left?: string;
  right?: string;
}

interface IHeaderImage {
  src: string;
  extraImages?: ExtraImage[];
  extraAnimation: SliderType;
}

export const HeaderImage: FC<IHeaderImage> = ({ src, extraImages = [], extraAnimation }) => {
  const mainImgRef = useRef<HTMLImageElement | null>(null);
  const extraImgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [extraImagesVisible, setExtraImagesVisible] = useState(false);

  useEffect(() => {
    setExtraImagesVisible(false);
    if (mainImgRef.current) {
      const { from, to } = animationVariants.slideFromBottom;
      gsap.fromTo(mainImgRef.current, from, {
        ...to,
        duration: 0.8,
        ease: "power3.out",
        onComplete: () => setExtraImagesVisible(true)
      });
    }
  }, [src]);

  useEffect(() => {
    if (extraImagesVisible && extraAnimation) {
      requestAnimationFrame(() => {
        extraImgRefs.current.forEach((img, index) => {
          if (img) {
            const { from, to, delay } = animationVariants[extraAnimation](index);
            gsap.fromTo(
              img,
              from,
              { ...to, duration: 0.8, ease: "power3.out", delay }
            );
          }
        });
      });
    }
  }, [extraImagesVisible, extraAnimation]);

  return (
    <div className="relative flex items-center justify-items-center justify-center">
      <div className="relative">
        <img
          ref={mainImgRef}
          src={src}
          alt="Main Slider"
          className="drop-shadow-xl header--image"
        />
        {extraImagesVisible && extraImages.map((extraSrc, idx) => (
          <img
            key={idx}
            ref={(el) => (extraImgRefs.current[idx] = el)}
            src={extraSrc.src}
            alt={`Extra ${idx}`}
            style={{
              left: extraSrc.left ?? 'auto',
              right: extraSrc.right ?? 'auto',
              bottom: extraSrc.bottom ?? '50%'
            }}
            className="absolute transform -translate-y-1/2 header--image"
          />
        ))}
      </div>
    </div>
  );
};
