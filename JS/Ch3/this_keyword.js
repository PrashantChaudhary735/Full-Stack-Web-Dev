// this keyword: this keyword referes to an object that is executing the current piece of code.
const student = {
  name: "Karan",
  age: 23,
  eng: 89,
  maths: 90,
  phy: 97,
  getAvg() {
    let avg = (this.eng + this.maths + this.phy) / 3;
    console.log(`${this.name} got avg marks = ${avg}`);
  },
};
student.getAvg()
