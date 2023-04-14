import React from "react";
import { Link } from "react-router-dom";
function Li_nk({ cssStyle, url, content, isScrollTop }) {
  function TopScoll() {
    if (isScrollTop) {
      window.scrollTo({ top: 0 });
    }
  }
  return (
    <span onClick={TopScoll} className={cssStyle + ` block`}>
      <Link to={url}>{content}</Link>
    </span>
  );
}

export default Li_nk;
