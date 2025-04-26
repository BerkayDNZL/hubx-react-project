export const animationVariants = {
  slideFromBottom: { from: { y: 600 }, to: { y: 0 } },
  scaleIn: (index: number) => ({
    from: { opacity: 0, x: 0, scale: 0 },
    to: { opacity: 1, x: 0, scale: 1 },
    delay: index * 0.2,
  }),
  fadeIn: (index: number) => ({
    from: { opacity: 0, x: 0 },
    to: { opacity: 1, x: 0 },
    delay: index * 0.2,
  }),
  centerImagesFromBottom: (index: number) => ({
    from: { opacity: 0, y: 500, scale: 1 },
    to: { opacity: 1, y: 0, scale: 0.8 + (index / 10) },
    delay: index * 0.3,
  }),
  distributedInTheMiddle: (index: number) => ({
    from: { opacity: 0, y: 600, x: 0 },
    to: { opacity: 1, y: 350, x: 50 },
    delay: index * 0.3,
  }),
};