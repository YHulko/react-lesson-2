import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";

const Content = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam ex
        blanditiis deserunt vel velit consequuntur, distinctio soluta eius a ut
        dolores ipsum expedita ducimus voluptates repellendus laudantium
        recusandae porro?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magnam ex
        blanditiis deserunt vel velit consequuntur, distinctio soluta eius a ut
        dolores ipsum expedita ducimus voluptates repellendus laudantium
        recusandae porro?
      </p>
    </>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Header title="React" title="=2023" />
      <Content />
      <Header title="TS" title="=2025" />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
