import { useState } from "react";
import { animationVariants } from "../animations";
import { HeaderButtons } from "../HeaderButtons/HeaderButtons";
import { HeaderImage } from "../HeaderImage/HeaderImage";
import images from "../../../assets/images";

const slides = [
    { src: images.SliderImage1, animation: animationVariants.slideFromRight },
    { src: images.SliderImage2, animation: animationVariants.slideFromBottom },
    { src: images.SliderImage3, animation: animationVariants.zoomIn },
    { src: images.SliderImage4, animation: animationVariants.rotateIn },
];

const HeaderSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const current = slides[currentIndex];

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div className="relative h-[400px] w-full overflow-hidden bg-black rounded-xl">
                <HeaderImage src={current.src} animation={current.animation} />
            </div>
            <HeaderButtons onSelect={setCurrentIndex} currentIndex={currentIndex} />
        </div>
    );
};

export default HeaderSlider;
