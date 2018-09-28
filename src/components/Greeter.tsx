class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
let greeter = new Greeter('world');//构造函数中的参数
console.log(greeter.greet());

//继承
class Animal1 {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}`);
    }
}
class Dog1 extends Animal1 {
    bark() {
        console.log('wwww');
    }
}
const dog = new Dog1();
dog.bark();
dog.move(12);
dog.bark();
