export const weatherPic = (weather) => {
  let condition = "";
  switch (weather) {
    case "Clear":
      condition = "./sun.png";
      break;
    case "Rain":
      condition = "rain2.png";
      break;
    case "Clouds":
      condition = "./1147979.avif";
      break;
    case "sunny":
      condition = "./sun.png";
      break;
    default:
      condition = "./1147979.avif";
      break;
  }
  return condition;
};
