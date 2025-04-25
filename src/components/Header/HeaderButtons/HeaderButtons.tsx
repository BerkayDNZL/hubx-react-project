import { FC } from "react";
import { buttonLabels } from "../HeaderSlider/HeaderSliderHelper";
import images from "../../../assets/images";

interface IHeaderButtons {
  onSelect: (currentIndex: number) => void;
  currentIndex: number;
}

export const HeaderButtons: FC<IHeaderButtons> = (props) => {
  const { onSelect, currentIndex } = props;

  return (
    <div className="grid grid-cols-5 w-full relative bg-white border-gray-200 font-sf items-center">
      {buttonLabels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`w-full h-full py-4 border-2 flex items-center justify-center gap-4 ${idx === currentIndex ? "bg-activeButtonBacground" : "bg-white"} hover:bg-activeButtonBacground transition`}>
          <div className="rounded-full bg-white w-[56px] h-[56px] flex items-center justify-center border-[1px] border-gray-200">
            {<img
              src={images.DocumentScannerIcon}
            />}
          </div>
          <span className="text-[16px] leading-[1]">{label.title}</span>
        </button>
      ))}
    </div>
  );
};
