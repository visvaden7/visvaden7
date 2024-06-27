function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Tood old");
  } else if (age <= 18) {
    return false;
  }
  return true;
  // age <= 18 ? false : true
}

// 원래 호출되지 않은 값(에러)이 나오는 경우 never로 처리하게 된다.
console.log(oldEnough(23));
