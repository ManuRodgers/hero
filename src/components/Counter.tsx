import React, { MouseEvent, MouseEventHandler } from 'react';

export interface ICounterProps {
  label: string;
  counter: number;
  handleIncrement: MouseEventHandler<HTMLButtonElement>;
}

const Counter: React.FunctionComponent<ICounterProps> = props => {
  const { counter, label, handleIncrement } = props;
  return (
    <div>
      <span>
        {label}: {counter}
      </span>
      <br />
      <button type={`button`} onClick={handleIncrement}>{`Increment`}</button>
    </div>
  );
};

export default Counter;
