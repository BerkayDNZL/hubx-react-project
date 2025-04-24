import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface IHeaderImage {
    src: string;
    animation: any;
}

export const HeaderImage: FC<IHeaderImage> = (props) => {
    const { src, animation } = props;
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        if (imgRef.current) {
            const { from, to } = animation;
            gsap.fromTo(imgRef.current, from, { ...to, duration: 1.2, ease: "power3.out" });
        }
    }, [src, animation]);

    return (
        <img
            ref={imgRef}
            src={src}
            className="w-full h-full object-cover rounded-xl shadow-xl"
        />
    );
};