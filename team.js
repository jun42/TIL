const process = require("process");

console.log("node-version:", process.version);

const { exec } = require("child_process");

exec("npm -v", (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`npm version: ${stdout.trim()}`);
});

////////////////////////
//과제1 array
//과제2
class Person {
  constructor(name, weight, height) {
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.BMI = (weight / (100 * height) ** 2) * 100 ** 2;
  }
}
const compareBMI = (personA, personB) => {
  if (personA.BMI === personB.BMI) {
    return true;
  }

  return false;
};

const alex = new Person("alex", 75, 1.75);
const brian = new Person("brian", 82, 1.82);

console.log(`Alex: ${alex.BMI} Brian: ${brian.BMI}`);
console.log("are same:", compareBMI(alex, brian));

///////////////////////////////////////////////////

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
