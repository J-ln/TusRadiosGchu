const currentColor = `#fff`;
const backgroundGradient1 = `radial-gradient(
        160% 160% at 50% 100%,
        rgba(0, 0, 0, 0.3) 55%,
        ${currentColor} 0%`;

const backgroundGradient2 = `linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.3) 35%,
            ${currentColor} 50%,
            rgba(0, 0, 0, 0.3) 65%`;
const backgroundGradient3 = `radial-gradient(
              125% 125% at 50% 10%,
              rgba(0, 0, 0, 0.3) 30%,
              ${currentColor} 100%`;

export {
  backgroundGradient1,
  backgroundGradient2,
  backgroundGradient3,
  currentColor,
};
