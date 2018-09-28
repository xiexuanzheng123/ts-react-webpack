interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = {
    size: 10,
    label: '23'
};
printLabel(myObj);

interface SquareConfig {
    color?: string,
    readonly width?: number
}
function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 10};
    if (config.color){
        newSquare.color = config.color;
    }
    if(config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: 'black'});
console.log(mySquare);

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {x: 10, y: 10};

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

interface SearchFunc {
    (source: string, subString:string): boolean
}
//参数列表和返回值类型
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

interface StringArray {
    [index: number]: string;
}
//StringArray接口表示它具有索引签名，
let myArray: StringArray;
myArray = ["Bob", "Fred"];
for (let i in myArray) {
    console.log(typeof i);
}
let myStr: string = myArray[0];
//共有支持两种索引签名，字符串和数字，可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型
//这是因为当使用number来索引时，javascript会将它转换为string然后再去索引对象

class Animal {
    name: string
}
class Dog extends Animal {
    breed: string
}
interface NotOkay {
    [x: string]: Animal;
}
//字符串索引签名能很好的描述dictionary模式，并且他们也会确保所有属性与其返回值类型想匹配，

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: number;
}
/********************* */
interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myArray1: ReadonlyStringArray = ['alice', 'bob'];
//myArray1[2] = 'mar';

// interface ClockInterface {
//     currentTime: Date;
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     constructor(h: number, m: number) {}
// }

//类静态部分与实例部分的区别
//操作类和接口的时候，你要知道类是具有两个类型的，静态部分的类型和实例部分的类型
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;//用构造器签名去定义一个接口，然后试图定义一个类来实现这个接口
}
interface ClockInterface {
    tick(): any;
}
// class Clock1 implements ClockConstructor {//当一个类实现了一个接口时，只对其实例部分进行类型检查
//     currentTime: Date;
//     constructor(h: number, m: number);//constructor存在于类的静态部分，所以不在检查范围
// }