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
      if (ref) {
        if (idx === currentIndex) {
          const anim = gsap.fromTo(
            ref,
            { "--angle": "0deg" },
            {
              "--angle": "360deg",
              duration: 0.5,
              ease: "linear",
              onUpdate: () => {
                ref.style.setProperty(
                  "background",
                  `conic-gradient(from 0deg, #e5e7eb calc(360deg - var(--angle)), #0381ff 0deg)`
                );
              },
              onComplete: () => {
                ref.style.setProperty(
                  "background",
                  `conic-gradient(from 0deg, #0381ff 360deg, #0381ff 360deg)`
                );
              },
            }
          );
          animRefs.current[idx] = anim;
        } else {
          ref.style.setProperty(
            "background",
            `conic-gradient(from 0deg, #e5e7eb 360deg, #e5e7eb 360deg)`
          );
        }
      }
    });
  }, [currentIndex]);

  return (
    <div className="grid grid-cols-5 w-full relative bg-white font-sf items-center">
      {buttonLabels.map((label, idx) => {
        const isActive = idx === currentIndex;

        return (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            className={`w-full h-full py-4 border-2 flex items-center justify-center gap-4
              ${isActive ? "bg-activeButtonBacground border-transparent" : "bg-white border-gray-200 hover:border-buttonBorderColor"}
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
            <span className="text-[16px] leading-[1]">{label.title}</span>
          </button>
        );
      })}
    </div>
  );
};
