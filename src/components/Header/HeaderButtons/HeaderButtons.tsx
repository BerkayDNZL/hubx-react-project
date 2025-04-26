import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import { buttonLabels } from "../HeaderSlider/HeaderSliderHelper";
import { DocumentScannerIcon } from "../../../assets/images/svg/DocumentScannerIcon";
import { SignAndStamp } from "../../../assets/images/svg/SignAndStamp";
import { BatchScanning } from "../../../assets/images/svg/BatchScanning";
import { AdvancedFilters } from "../../../assets/images/svg/AdvancedFilters";
import { ExportAndShare } from "../../../assets/images/svg/ExportAndShare";

interface IHeaderButtons {
  onSelect: (currentIndex: number) => void;
  currentIndex: number;
}

export const HeaderButtons: FC<IHeaderButtons> = ({ onSelect, currentIndex }) => {
  const borderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animRefs = useRef<gsap.core.Tween[]>([]);
  const prevIndex = useRef<number>(currentIndex);

  const buttonIcons = [
    <DocumentScannerIcon color={currentIndex === 0 ? "#0381FF" : '#666666'} />,
    <SignAndStamp color={currentIndex === 1 ? "#0381FF" : '#666666'} />,
    <BatchScanning color={currentIndex === 2 ? "#0381FF" : '#666666'} />,
    <AdvancedFilters color={currentIndex === 3 ? "#0381FF" : '#666666'} />,
    <ExportAndShare color={currentIndex === 4 ? "#0381FF" : '#666666'} />,
  ];

  useEffect(() => {
    borderRefs.current.forEach((ref, idx) => {
      animRefs.current[idx]?.kill();
    });

    const prev = prevIndex.current;
    const next = currentIndex;

    if (borderRefs.current[prev]) {
      const prevRef = borderRefs.current[prev];
      gsap.fromTo(
        prevRef,
        { "--angle": "0deg" },
        {
          "--angle": "360deg",
          duration: 0.5,
          ease: "linear",
          onUpdate: () => {
            prevRef!.style.setProperty(
              "background",
              `conic-gradient(from 0deg, #e5e7eb var(--angle), #0381ff 0deg)`
            );
          },
          onComplete: () => {
            prevRef!.style.setProperty(
              "background",
              `conic-gradient(from 0deg, #e5e7eb 360deg, #e5e7eb 360deg)`
            );
          },
        }
      );
    }

    if (borderRefs.current[next]) {
      const nextRef = borderRefs.current[next];
      const anim = gsap.fromTo(
        nextRef,
        { "--angle": "0deg" },
        {
          "--angle": "360deg",
          duration: 0.5,
          ease: "linear",
          onUpdate: () => {
            nextRef!.style.setProperty(
              "background",
              `conic-gradient(from 0deg, #e5e7eb calc(360deg - var(--angle)), #0381ff 0deg)`
            );
          },
          onComplete: () => {
            nextRef!.style.setProperty(
              "background",
              `conic-gradient(from 0deg, #0381ff 360deg, #0381ff 360deg)`
            );
          },
        }
      );
      animRefs.current[next] = anim;
    }

    prevIndex.current = currentIndex;
  }, [currentIndex]);

  return (
    <div className="flex relative bg-white font-sf items-center overflow-x-auto snap-x snap-mandatory scroll-smooth min-w-full touch-pan-x no-scrollbar">
      {buttonLabels.map((label, idx) => {
        const isActive = idx === currentIndex;

        return (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`flex-shrink-0 md:flex-shrink md:flex-grow h-full py-4 px-6 md:px-0 flex items-center justify-center gap-4 snap-start border-2 
            ${isActive ? "bg-activeButtonBacground border-transparent" : "bg-white border-transparent"}
            ${idx !== buttonLabels.length - 1 ? "border-r-gray-200" : ""}
            ${!isActive ? "hover:border-buttonBorderColor hover:border-r-buttonBorderColor" : ""}
            transition-all duration-300 ease-in-out`}
          >
            <div
              className="w-[3.5rem] h-[3.5rem] rounded-full p-[2px]"
              ref={(el) => (borderRefs.current[idx] = el)}
              style={{
                background: "conic-gradient(from 0deg, #e5e7eb 360deg, #e5e7eb 360deg)",
              }}
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                {buttonIcons[idx]}
              </div>
            </div>
            <span className="text-base leading-[1] whitespace-nowrap">{label.title}</span>
          </button>
        );
      })}
    </div>
  );
};
