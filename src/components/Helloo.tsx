import * as React from 'react';
import './interface';
interface HelloProps {
    compiler: string;
    framework: string;
}
// export const Helloo = (props: HelloProps) => {
//    return <h1>Hello from {props.compiler} and {props.framework}</h1>
// }
let someValue: any = "string";
let strLength: number = (someValue as string).length;
console.log(strLength);

export class Helloo extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}</h1>;
    }
}