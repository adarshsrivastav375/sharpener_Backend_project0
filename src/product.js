console.log("hello world");
//1. product of two numbers

const product = (a, b) => a * b;
console.log(product(2, 8))

//2. Student object

const student = {
    name: "John",
    age: "23",
    greet() { console.log(`hi! I'm ${this.name}. I'm ${this.age} year old.`); }
}
student.greet();