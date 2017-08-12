import * as React from 'react';

// temp
export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className='container-fluid'>
        {props.children}
    </div>
  );
};
