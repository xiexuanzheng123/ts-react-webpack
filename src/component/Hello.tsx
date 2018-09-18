import * as React from 'react';
import * as style from '../styles/hello.pcss';
import { Counter, ICounterProps } from './Counter';

const helloStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif'
};

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: IHelloProps) => {
  const counterProps: ICounterProps = {
    startsFrom: 3
  };
  return (
    <section>
      <h1 className={style.h1Style}  style={helloStyle}>
      <span className={style.span}>123</span>
        Hello, from {props.compiler} and {props.framework}!
      </h1>
      <Counter {...counterProps} />
    </section>
  );
};