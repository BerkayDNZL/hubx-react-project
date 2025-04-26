import images from "../../../assets/images";

export const slideSectionImages = [
    { src: images.SliderImage1, extraImages: [], extraAnimation: null },
    { src: images.SliderImage2, extraImages: [{ src: images.SliderImage2MiniImage1, top: 'calc(50% + 80px)', left: '60px' }, { src: images.SliderImage2MiniImage2, top: 'calc(50% - 20px)', left: '420px' }], extraAnimation: "scaleIn" },
    { src: images.SliderImage3, extraImages: [{ src: images.SliderImage3MiniImage1, top: '280px' }, { src: images.SliderImage3MiniImage1, top: '320px' }, { src: images.SliderImage3MiniImage1, top: '360px' }], extraAnimation: "centerImagesFromBottom" },
    { src: images.SliderImage4, extraImages: [{ src: images.SliderImage4MiniImage1, top: 'calc(50% + 50px)', left: '124px' }, { src: images.SliderImage4MiniImage2, top: 'calc(50% + 50px)', left: '504px' }], extraAnimation: "fadeIn" },
    { src: images.SliderImage5, extraImages: [{ src: images.SliderImage5MiniImage1, top: '50px', left: '50px' }, { src: images.SliderImage5MiniImage2, top: '30px', left: '80px' }, { src: images.SliderImage5MiniImage3, top: '10px', left: '224px' }, { src: images.SliderImage5MiniImage4, top: '30px', left: '360px' }], extraAnimation: "distributedInTheMiddle" },
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