function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}

export const generateColor = (num: number = 1) => {
  let colors = [];

  for (let i = 0; i < num; i++) {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    const color = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    colors.push(color);
  }

  return colors;
};
