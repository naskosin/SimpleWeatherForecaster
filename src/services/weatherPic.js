export const weatherPic = (weather) => {
  let condition = "";
  switch (weather) {
    case "Clear":
      condition = "./sunny.png";
      break;
    case "Rain":
      condition = "sunny.png";
      break;
    case "Clouds":
      condition = "./1147979.avif";
      break;
    case "sunny":
      condition = "./1147979.avif";
      break;
    default:
      condition = "./1147979.avif";
      break;
  }
  return condition;
};
