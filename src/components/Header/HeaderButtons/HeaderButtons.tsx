import { FC } from "react";

interface IHeaderButtons {
  onSelect: (currentIndex: number) => void;
  currentIndex: number;
}

export const HeaderButtons: FC<IHeaderButtons> = (props) => {
  const labels = ["1", "2", "3", "4"];
  const { onSelect, currentIndex } = props;

  return (
    <div className="flex justify-center mt-4 gap-4">
      {labels.map((label, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`w-10 h-10 rounded-full border-2 ${idx === currentIndex ? "bg-blue-500 text-white" : "bg-white"
            } hover:bg-blue-400 transition`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
