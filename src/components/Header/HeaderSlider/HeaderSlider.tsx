import { useState } from "react";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { HeaderImage } from "../HeaderImage/HeaderImage";
import { slideSectionImages, slideSectionTexts } from "./HeaderSliderHelper";
import { HeaderTextSection } from "../HeaderTextSection/HeaderTextSection";



const HeaderSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentImage = slideSectionImages[currentIndex];
    const currentText = slideSectionTexts[currentIndex];

    return (
        <div className="w-[1440px] h-screen mx-auto flex items-center ">
            <div className="relative  h-[730px] overflow-hidden shadow-2xl bg-white px-6">
                <div className="flex items-center justify-center w-full">
                    <div className="w-1/2">
                        <HeaderImage src={currentImage.src} animation={currentImage.animation} />
                    </div>
                    <div className="w-1/2">
                        <HeaderTextSection mainTitle={currentText.mainTitle} subTitle={currentText.subTitle} description={currentText.description} onButtomClick={() => { }} />
                    </div>
                </div>
                <HeaderButtons onSelect={setCurrentIndex} currentIndex={currentIndex} />
            </div>
        </div>
    );
};

export default HeaderSlider;
