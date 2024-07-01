namespace SpreadArray {
  const a = [1, 2, 3];
  const b = [4, 5, 6];

  const c = [...a, ...b]; //새로운 배열을 생성한다.
  const d = a.concat(b); //새로운 배열을 생성한다.

  console.log(`a before`, c);
  console.log(`d before`, d);

  a.push(10);

  console.log("a", a);
  console.log("c after", c);
  console.log("d after", d);
}
