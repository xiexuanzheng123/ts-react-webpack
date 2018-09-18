import * as React from 'react';

export interface ICounterProps {
  startsFrom: number
}

interface ICounterState {
  counter: number
}

export class Counter extends React.Component <ICounterProps, ICounterState> {
  constructor(props: ICounterProps) {
    super(props);

    this.state = { counter: props.startsFrom };
  }

  onIncrementClick = () => {
    this.setState(this.increment);
  }

  increment(state: ICounterState) {
    return { ...state, counter: state.counter + 1};
  }

  render() {
    return <button onClick={this.onIncrementClick}>{this.state.counter}</button>;
  }
}