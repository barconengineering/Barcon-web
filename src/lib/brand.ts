export const brandLogos = {
  color: { src: "/barcon-logo-color.png", width: 330, height: 378 },
  white: { src: "/barcon-logo-white.png", width: 325, height: 374 },
  black: { src: "/barcon-logo-black.png", width: 325, height: 374 },
  "horizontal-color": {
    src: "/barcon-logo-horizontal-color.png",
    width: 446,
    height: 128,
  },
  "horizontal-white": {
    src: "/barcon-logo-horizontal-white.png",
    width: 436,
    height: 124,
  },
};

export type BrandVariant = keyof typeof brandLogos;
