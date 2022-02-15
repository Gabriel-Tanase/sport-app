import router from "next/router";

// Generate a random hex color
export const generateHexColor: () => string = () =>
  "#" + Math.floor(Math.random() * 16777215).toString(16);

export const useRouterRefresh = () => {
  const { asPath } = router;

  return router.replace(asPath);
};

// Get image dimensions by aspect ratio
export const getImageDimensionByAspectRatio = (
  width: number,
  image: {
    width: number;
    height: number;
  }
) => {
  const imageHeight = image.height;
  const imageWidth = image.width;

  return { height: (width * imageHeight) / imageWidth, width };
};

// Darken/Lighten hex color util function
export const shadeColor = (color: string) => {
  let percent = 75

  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  percent = R + G + B > 382 ? percent * -1 : percent

  R = Math.floor((R * (100 + percent)) / 100);
  G = Math.floor((G * (100 + percent)) / 100);
  B = Math.floor((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
};

