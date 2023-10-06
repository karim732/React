// Primitives: number, string, boolean
// More complex types: arrays, objects
// functions types, parameters

// Primitives

let age: number = 12;

age = 24.0;

let username: string;

username = "Karim";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];
// let hobbies: number[];
// let hobbies: boolean[];

hobbies = ["sports", "coding"];

let person: {
  name: string;
  age: number;
  //   isEmployee: boolean;
};

person = {
  name: "Karim",
  age: 23,
};

// person = {
//   isEmployee: true,
// };

let people: {
  name: string;
  age: number;
  //   isEmployee: boolean;
}[];

people = [
  { name: "Karim", age: 23 },
  { name: "shaik", age: 28 },
];

// Type inference

let course = "React - The complete guide";
// course = 12341;

// union types

let lecture: string | number | boolean | string[] = "Using union type";
lecture = 12341;
lecture = true;
lecture = ["qwert", "asdfg"];

// Type alias

type Person = {
  name: string;
  age: number;
};

let candidate: Person;

candidate = {
  name: "karim",
  age: 23,
};
let candidates: Person[];

candidates = [
  { name: "karim", age: 23 },
  { name: "shaik", age: 28 },
];

// Functions and Functions Types

function add(a: number, b: number): number | string {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const demo = ["1", "2"];

const up = insertAtBeginning(demo, "3"); //['1', '2', '3']
