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
