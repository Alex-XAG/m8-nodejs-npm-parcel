// JSON;
const user = {
  name: "Mango",
  age: 2,
};

// console.log(JSON.stringify(user)); // {"name":"Mango","age":2}

// const savedUserData = '{"name":"Mango","age":2}';

// console.log(JSON.parse(savedUserData));

// ///////////////// localStorage ///////////////
console.log(localStorage);

localStorage.setItem("my-data", JSON.stringify(user));

console.log(localStorage.getItem("my-data")); // string

const savedData = localStorage.getItem("my-data");
console.log("savedData", savedData);

const parsedData = JSON.parse(savedData);
console.log("parsedData", parsedData);

//////////////// sessionStorage ///////////////
