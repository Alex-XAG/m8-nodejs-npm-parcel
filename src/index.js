import validatePassword from "./js/validate-password.js";
import { addUser } from "./js/api-service.js";

// import * as apiServce from "./js/api-service.js";
import {
  fetchAllUsers,
  fetchUserById,
  updateUserById,
  x as value,
  y as name,
} from "./js/api-service.js";

console.log(validatePassword("qweqwe"));
// console.log(validatePassword("qweqwe"));

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

addUser("Alex");
