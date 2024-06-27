namespace abstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount}`);
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log(`Motorcycle has ${this.wheelCount}`);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`Automobile moved ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motocycle();
  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels(); //expect moved 6
  const automobile = new Automobile();
  motorCycle.updateWheelCount(5);
  automobile.showNumberOfWheels(); //expect moved 4
}
