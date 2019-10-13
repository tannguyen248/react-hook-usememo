import React, { useMemo } from 'react';

const computeExpensiveValue = (a, b, from) => {
  console.log('computeExpensiveValue ' + from);

  const endPoint = Date.now() + 3000;

  while (Date.now() < endPoint) {
    // while loop is expensive task
  }

  return a + b;
};

export const ComponentMemo = ({ a, b, c }) => {
  const memoizedValue = useMemo(
    () => computeExpensiveValue(a, b, 'ComponentMemo'),
    [a, b]
  );

  return (
    <h3>
      memoizedValue: {memoizedValue} {c}
    </h3>
  );
};

export const ComponentNormal = ({ a, b, c }) => {
  const normalValue = computeExpensiveValue(a, b, 'ComponentNormal');

  return (
    <h3>
      normalValue: {normalValue} {c}
    </h3>
  );
};
