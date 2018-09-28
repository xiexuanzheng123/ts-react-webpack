class Animal2 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino extends Animal2 {
    constructor() {
        super('Rhino');
    }
}
class Employee {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
} 
let animal = new Animal2('Goat');
let rihno = new Rhino();
let employee = new Employee('Bob');
//Animal和Rihno共享了来自Animal的私有成员private name,因此他们是兼容的
animal = rihno;
//animal = employee；