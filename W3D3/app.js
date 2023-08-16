const createRandomIntArray = (min, max, arrLength) => {
  const randomIntArray = Array.from(
    { length: arrLength },
    () => Math.floor(Math.random() * (max - min)) + min + 1
  );

  return randomIntArray;
};

const calcTips = (bills) => {
  const tips = bills.map((bill) => {
    if (bill >= 30) {
      return (bill * 15) / 100;
    } else if (bill < 30) {
      return (bill * 20) / 100;
    }
  });
  return tips;
};
const bills = createRandomIntArray(1, 100, 10);
console.log(bills);
const tips = calcTips(bills);
console.log(tips);
