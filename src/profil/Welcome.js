import React from "react";

const Welcome = props => {
    
    return (
      <button onClick={() => props.alertMyInput(`Welcome ${props.fullName} `)}>
        Welcome
      </button>
    );
   };
export default Welcome ;