import React from "react";

const SignUpParticulars = props => {
  return (
    <div>
      {props.info.map(info => {
        return (
          <div key={info.id}>
            <h4>{info.name}</h4>
            <input type={info.type} key={info.id}/>
          </div>
        );
      })}
    </div>
  );
};

export default SignUpParticulars;
