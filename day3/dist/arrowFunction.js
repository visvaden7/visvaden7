const myfunc = (message, title, age) => {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myfunc("hello", "myFirstArrowFunc", 30);
const func = () => console.log("func");
const func1 = () => ({ name: "dave" });
//소괄호 ()는 자바스크립트에게 이 부분이 객체 리터럴이라는 것을 명확히 알려줍니다. 소괄호 없이 객체 리터럴을 반환하려고 하면 자바스크립트는 중괄호를 함수 본문으로 해석합니다.
const func2 = () => {
    const val = 20;
    return val;
};
console.log(func());
console.log(func1());
console.log(func2());
export {};
