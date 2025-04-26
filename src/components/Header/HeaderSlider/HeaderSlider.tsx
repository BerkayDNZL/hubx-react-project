import { useState } from "react";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { HeaderImage, SliderType } from "../HeaderImage/HeaderImage";
import { slideSectionImages, slideSectionTexts } from "./HeaderSliderHelper";
import { HeaderTextSection } from "../HeaderTextSection/HeaderTextSection";



const HeaderSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = slideSectionImages[currentIndex];
    const currentText = slideSectionTexts[currentIndex];

    return (
        <div className="h-screen mx-auto flex items-center ">
            <div className="relative w-full h-[730px] overflow-hidden shadow-2xl bg-white flex flex-col justify-end">
                <div className="w-[1440px]">
                    <div className="flex items-center justify-center w-full">
                        <div className="w-1/2 justify-items-center px-6 ">
                            <HeaderImage src={currentImage.src} extraImages={currentImage.extraImages} extraAnimation={currentImage.extraAnimation as SliderType} />
                        </div>
                        <div className="w-1/2 px-6 ">
                            <HeaderTextSection mainTitle={currentText.mainTitle} subTitle={currentText.subTitle} description={currentText.description} onButtomClick={() => { }} />
                        </div>
                    </div>
                    <HeaderButtons onSelect={setCurrentIndex} currentIndex={currentIndex} />
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;
