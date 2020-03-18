import React from "react";

const LoginParticulars = props => {
  return (
    <div>
      {props.info.map(info => {
        return (
          <div key={info.id}>
            <h4>{info.name}</h4>
            <input type={info.type} />
          </div>
        );
      })}
    </div>
  );
};
export default LoginParticulars;
