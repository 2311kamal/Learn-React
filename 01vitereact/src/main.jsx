import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}

// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const anotherElement = (
//   <a href="https://google.com" target="_blank">
//     Visit Google
//   </a>
// );
const anotherUser = "Kamal Garg";
const ReactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Visit Google",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // MyApp() // also  works
  // <MyApp /> // aslo works

  // ReactElement // don't work bcz this is a custom object but reactDOM render expects some other keys not type, props, children
  // Instead we can use React.createElement
  // anotherElement  // works

  ReactElement
);
