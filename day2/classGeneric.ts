namespace GenericNamespace {
  interface Wheels {
    count: number;
    diameter: number;
  }

  interface Handles {
    count: number;
    diameter: number;
  }
  interface Vehicle<T> {
    getName(): string;
    getWheelCount: () => T;
  }

  class Automobile implements Vehicle<Wheels> {
    constructor(private name: string, private wheels: Wheels) {}
    getName(): string {
      return this.name;
    }
    getWheelCount(): Wheels {
      return this.wheels;
    }
  }

  class Motocycle implements Vehicle<Handles> {
    constructor(private name: string, private handles: Handles) {}
    getName(): string {
      return this.name;
    }
    getWheelCount(): Handles {
      return this.handles;
    }
  }

  class Chevy extends Automobile {
    constructor() {
      super("Chevy", { count: 4, diameter: 18 });
    }
  }

  const chevy = new Chevy();
  console.log("car name ", chevy.getName());
  console.log("wheels ", chevy.getWheelCount());

  const motocycle = new Motocycle("dd", { count: 4, diameter: 18 });
  console.log("car name ", chevy.getName());
  console.log("wheels ", chevy.getWheelCount());
}
