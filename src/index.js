import React from "react";
import ReactDOM from "react-dom/client";
function Crashcourse() {
  return <h1 className="name">Hello World</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Crashcourse />);
