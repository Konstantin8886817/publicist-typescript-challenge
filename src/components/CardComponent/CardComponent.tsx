import React from 'react';

const Cards: React.FunctionComponent = (props) => {
    return (
      <div>
        <div>
          <div>{props.children}</div>
        </div>
      </div>
    );
  };
  
  export default Cards;