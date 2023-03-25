import React from "react";

function Button(props) {
  return (
    <button type={props.type} className={props.class}>
      {props.text}
      {props.tag}
    </button>
  );
}

export default Button;
