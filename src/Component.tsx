import * as React from 'react';

function Component() {
  const [data] = React.useState([0, 1, 2]);

  return (
    <>
      {data.map(item => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}

export default Component;
