// React18動作確認用
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// React17動作確認用
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./components/App";

// ReactDOM.render(
//   <App />,

//   document.getElementById("root")
// );
