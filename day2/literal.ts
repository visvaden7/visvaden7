let literal: "tom" | "linda" | "jeff" | "sue" = "jeff";
literal = "sue";
literal = "tom";
// literal = "john";
// Type '"john"' is not assignable to type '"tom" | "linda" | "jeff" | "sue"'.ts(2322)

console.log(literal);
