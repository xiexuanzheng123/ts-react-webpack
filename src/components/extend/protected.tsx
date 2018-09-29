class Persion {
    protected name: string;//protected在派生类中仍然可用
    protected constructor(theName: string) {
        this.name = theName;
    }
}

class Employeee extends Persion {
    private department: string;
    constructor(name: string, department: string) {
        super(name);//protected在派生类中仍然可用
        this.department = department;
    }
    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employeee("howard", 'Sales');
console.log(howard.getElevatorPitch());
//let john = new Persion('sss');错误
//console.log(howard.name);我们不能在Person外使用name，可以通过类来访问
//readonly修饰的关键字必须在声明时或构造函数里被初始化

//参数属性可以方便地让我们在一个地方定义并初始化一个成员