const items = [
  { name: "john", age: 20 },
  { name: "linda", age: 20 },
  { name: "sue", age: 20 },
  { name: "jeff", age: 20 },
];

const john = items.find((item) => {
  return item.name === "john";
});

console.log(john);
