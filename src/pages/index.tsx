import React, { MouseEventHandler } from 'react';

import Counter from '../components/Counter';

export interface IAppProps {}

export interface IAppState {
  counter: number;
  label: string;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      counter: 0,
      label: 'Manu',
    };
  }

  public handleIncrement: MouseEventHandler<HTMLButtonElement> = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  public render() {
    const { counter, label } = this.state;
    return (
      <div>
        <Counter handleIncrement={this.handleIncrement} counter={counter} label={label} />
      </div>
    );
  }
}
