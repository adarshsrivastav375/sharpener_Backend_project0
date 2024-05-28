const array = ["apple", "oranges", " ", "mango", " ", "lemon"];
const newArray = array.map((item) => {
  if (item.trim() == "") {
    return "empty string";
  } else {
    return item;
  }
});
console.log(array);
console.log(newArray);
