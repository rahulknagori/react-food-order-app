import React from "react";

const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} type={props.type} id={props.id} min="1" max="5" />;
});

export default Input;
