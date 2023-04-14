import React from "react";

function Button({ cssStyle, handClick, content, typeBtn }) {
  return (
    <button type={typeBtn} className={cssStyle} onClick={handClick}>
      {content}
    </button>
  );
}

export default Button;
