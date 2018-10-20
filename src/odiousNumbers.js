export const odiousNumbers = (start, end) => {
  const odious = [];
  for (let number = start; number <= end; number++) {
    const isOdiousNumber = number.toString(2).replace(/0/g, '').length % 2 !== 0;
    isOdiousNumber && odious.push(number);
  }
  return odious;
};
