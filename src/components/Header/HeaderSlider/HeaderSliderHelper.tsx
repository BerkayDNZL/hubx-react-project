import images from "../../../assets/images";
import { animationVariants } from "../animations";

export const slideSectionImages = [
    { src: images.SliderImage1, animation: animationVariants.slideFromBottom },
    { src: images.SliderImage2, animation: animationVariants.slideFromRight },
    { src: images.SliderImage3, animation: animationVariants.zoomIn },
    { src: images.SliderImage4, animation: animationVariants.rotateIn },
    { src: images.SliderImage5, animation: animationVariants.slideFromBottom },
];


export const slideSectionTexts = [
    { mainTitle: "Document Scanner", subTitle: "Scan with Ease", description: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format." },
    { mainTitle: "Sign & Stamp", subTitle: "One-Tap Focus", description: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!" },
    { mainTitle: "Batch Scanning", subTitle: "Multiple Page Scan", description: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document." },
    { mainTitle: "Advanced filters", subTitle: "Unique Filters", description: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters." },
    { mainTitle: "Export & Share", subTitle: "All-Round Conversion", description: "Export your scans as PDF,JPG,ZIP,TXT and Word." },
];


export const buttonLabels = [
    {title: "Document Scanner", icon: "Scan with Ease"},
    {title: "Sign & Stamp", icon: "Scan with Ease"},
    {title: "Batch Scanning", icon: "Scan with Ease"},
    {title: "Advanced filters", icon: "Scan with Ease"},
    {title: "Export & Share", icon: "Scan with Ease"},
];