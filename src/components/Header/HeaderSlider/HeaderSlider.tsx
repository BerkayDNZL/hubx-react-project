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
        <div className="flex w-[100vw] items-center place-content-center bg-white">
            <div className="relative w-[70em] xl:w-[90em] h-full md:max-h-[70em] overflow-hidden shadow-2x flex flex-col justify-end">
                <div className="w-full max-w-[90em] mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-center w-full pt-[5rem]">
                        <div className="w-full md:w-1/2 order-2 md:order-1 px-6 flex-shrink-0">
                            <HeaderImage
                                src={currentImage.src}
                                extraImages={currentImage.extraImages}
                                extraAnimation={currentImage.extraAnimation as SliderType}
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-1 md:order-2 px-6 flex-shrink-0 md:mb-0">
                            <HeaderTextSection
                                mainTitle={currentText.mainTitle}
                                subTitle={currentText.subTitle}
                                description={currentText.description}
                                onButtomClick={() => { }}
                            />
                        </div>
                    </div>
                    <HeaderButtons onSelect={setCurrentIndex} currentIndex={currentIndex} />
                </div>
            </div>
        </div>
    );

};

export default HeaderSlider;
