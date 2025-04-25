import { FC } from "react";
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
  const buttonIcons = [
    <DocumentScannerIcon color={currentIndex === 0 ? "#0381FF" : '#666666'} />,
    <SignAndStamp color={currentIndex === 1 ? "#0381FF" : '#666666'} />,
    <BatchScanning color={currentIndex === 2 ? "#0381FF" : '#666666'} />,
    <AdvancedFilters color={currentIndex === 3 ? "#0381FF" : '#666666'} />,
    <ExportAndShare color={currentIndex === 4 ? "#0381FF" : '#666666'} />,
  ];

  return (
    <div className="grid grid-cols-5 w-full relative bg-white border-gray-200 font-sf items-center">
      {buttonLabels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`w-full h-full py-4 border-2 flex items-center justify-center gap-4 ${idx === currentIndex ? "bg-activeButtonBacground" : "bg-white"} hover:bg-activeButtonBacground transition`}>
          <div className="rounded-full bg-white w-[56px] h-[56px] flex items-center justify-center border-[1px] border-gray-200">
            {buttonIcons[idx]}
          </div>
          <span className="text-[16px] leading-[1]">{label.title}</span>
        </button>
      ))}
    </div>
  );
};
