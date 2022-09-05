import React from "react";

const Link = ({ className, href, children }) => {
  let onClick = (e) => {
    // e.preventDefault();
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    window.history.pushState({}, "", href);

    const signal = new PopStateEvent("change");

    window.dispatchEvent(signal);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
