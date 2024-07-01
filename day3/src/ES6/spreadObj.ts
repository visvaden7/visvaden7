namespace NamespaceA {
  class A {
    aname: string = "A";
  }
  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b);
  console.log(c);
  console.log(d);

  a.aname = "a1";
  console.log(c);
  console.log(d);
}

//d의 경우에는 기존 함수의 포인터를 바라보는 것이고,

//c의 경우에는 새롭게 만드는 것이다.
