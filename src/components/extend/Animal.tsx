class Animall {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animall {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 5) {
        console.log(`Slithering....`);
        //console.log(`${this.name} moved ${distanceInMeters}m.`);
        super.move(distanceInMeters);
    }
}
class Horse extends Animall {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 45) {
        console.log(`Galloping...`);
        super.move(distanceInMeters);
    }
}
let sam = new Snake('Sammy the Python');
let tom: Animall = new Horse('Tommy the Palomino');
sam.move();
tom.move();
//在typescript里 成员默认都是public
//当成员声明为private时候，不能再声明它的类的外部访问，只能在类内部访问