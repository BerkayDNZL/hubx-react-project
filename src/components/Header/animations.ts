export const animationVariants = {
  slideFromBottom: { from: { y: 600, scale: 0.85 }, to: { y: 0, scale: 0.85 } },
  scaleIn: (index: number) => ({
    from: { opacity: 0, x: 0, scale: 0 },
    to: { opacity: 1, x: 0, scale: 0.85 - (index / 5) },
    delay: index * 0.1,
  }),
  fadeIn: (index: number) => ({
    from: { opacity: 0, x: 0, scale: 0.85 },
    to: { opacity: 1, x: 0, scale: 0.85 },
    delay: index * 0.1,
  }),
  centerImagesFromBottom: (index: number) => ({
    from: { opacity: 0, y: 500, scale: 0.85 },
    to: { opacity: 1, y: 0, scale: 0.65 + (index / 10) },
    delay: index * 0.1,
  }),
  distributedInTheMiddle: (index: number) => ({
    from: { opacity: 0, y: 600, x: 0, scale: 0.85 },
    to: { opacity: 1, y: 350, x: 0, scale: 0.85 },
    delay: index * 0.1,
  }),
};