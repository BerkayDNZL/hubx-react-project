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
        <div className="w-auto text-center md:text-right px-10 font-sf">
            <p className="font-extrabold text-base leading-[100%] tracking-[2px] uppercase text-mainTitleBlue mb-4">{mainTitle}</p>
            <p className="font-bold text-[2rem] leading-[2.5rem] tracking-0 text-subTitleBlue mb-4">{subTitle}</p>
            <p className="font-normal text-xl leading-8 tracking-wider mb-4">{description}</p>
            <button
                onClick={onButtomClick}
                className="items-center justify-center  text-center font-normal font-[SF Pro Display] border-[1px] border-[#00000029] text-xl tracking-0 px-10 py-2 mt-4">
                Learn More
            </button>
        </div>
    );
};
