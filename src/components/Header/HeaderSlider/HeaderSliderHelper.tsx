import images from "../../../assets/images";

export const slideSectionImages = [
    { src: images.SliderImage1, extraImages: [], extraAnimation: null },
    { src: images.SliderImage2, extraImages: [{ src: images.SliderImage2MiniImage1, bottom: '0', left: '-3em' }, { src: images.SliderImage2MiniImage2, bottom: '4em', right: '-4em' }], extraAnimation: "scaleIn" },
    { src: images.SliderImage3, extraImages: [{ src: images.SliderImage3MiniImage1, left: '15%', bottom: '-8em' }, { src: images.SliderImage3MiniImage1, left: '15%', bottom: '-11em' }, { src: images.SliderImage3MiniImage1, left: '15%', bottom: '-14em' }], extraAnimation: "centerImagesFromBottom" },
    { src: images.SliderImage4, extraImages: [{ src: images.SliderImage4MiniImage1, bottom: '-11em', left: '0.5em' }, { src: images.SliderImage4MiniImage2, bottom: '-11em', right: '0.5em' }], extraAnimation: "fadeIn" },
    { src: images.SliderImage5, extraImages: [{ src: images.SliderImage5MiniImage1, bottom: '24em', left: '-5%' }, { src: images.SliderImage5MiniImage2, bottom: '18em', left: '-8%' }, { src: images.SliderImage5MiniImage3, bottom: '21em', left: '30%' }, { src: images.SliderImage5MiniImage4, bottom: '18em', right: '-8%' }], extraAnimation: "distributedInTheMiddle" },
];

export const slideSectionTexts = [
    { mainTitle: "Document Scanner", subTitle: "Scan with Ease", description: "Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format." },
    { mainTitle: "Sign & Stamp", subTitle: "One-Tap Focus", description: "Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!" },
    { mainTitle: "Batch Scanning", subTitle: "Multiple Page Scan", description: "Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document." },
    { mainTitle: "Advanced Filters", subTitle: "Unique Filters", description: "Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters." },
    { mainTitle: "Export & Share", subTitle: "All-Round Conversion", description: "Export your scans as PDF,JPG,ZIP,TXT and Word." },
];

export const buttonLabels = [
    { title: "Document Scanner", icon: "Scan with Ease" },
    { title: "Sign & Stamp", icon: "Scan with Ease" },
    { title: "Batch Scanning", icon: "Scan with Ease" },
    { title: "Advanced Filters", icon: "Scan with Ease" },
    { title: "Export & Share", icon: "Scan with Ease" },
];