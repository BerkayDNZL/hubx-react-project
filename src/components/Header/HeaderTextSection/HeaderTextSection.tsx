import { FC } from "react";

interface IHeaderTextSection {
    mainTitle: string;
    subTitle: string;
    description: string;
    onButtomClick: () => void;
}

export const HeaderTextSection: FC<IHeaderTextSection> = (props) => {
    const { mainTitle, subTitle, description, onButtomClick } = props;
    return (
        <div className="w-auto text-right px-10 font-sf">
            <p className="font-extrabold text-[16px] leading-[100%] tracking-[2px] uppercase text-mainTitleBlue">{mainTitle}</p>
            <p className="font-bold text-[32px] leading-[40px] tracking-[0px] text-subTitleBlue">{subTitle}</p>
            <p className="font-normal text-[20px] leading-[32px] tracking-[0.8px]">{description}</p>
            <button
                onClick={onButtomClick}
                className="items-center justify-center  text-center font-normal font-[SF Pro Display] border-[0.5px] border-[#00000029] text-[20px] tracking-[0px] px-10 py-2 mt-4">
                Learn More
            </button>
        </div>
    );
};
