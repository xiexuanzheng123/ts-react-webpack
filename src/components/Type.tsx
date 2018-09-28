import * as React from 'react';

let isDone: boolean = false;
let decliteral: number = 3;
let name: string = '123';
let list: number[] = [1, 2, 3, 4];
let listArray: Array<number> = [1, 2, 3];//泛型
//元组类型允许表示一个已知元素数量和类型的数组，
let x: [string, number];
x = ['hello', 10];
//x = [10, 'workd']报错

//枚举类型是对javascript标准数据类型的一个补充，
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
let colorName: string = Color[2];

//Any为编译阶段还不确定类型的变量指定一个类型
let notSure: any = 4;
notSure = "Maybe";
//类型断言有两种形式
let someValue: any = "string";
let strLength: number = someValue.length;
