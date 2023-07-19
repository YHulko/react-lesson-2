import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

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
      <Header title="React" year={2023} />
      <Content />
      <Header title="TS" year={2083} />
      <Article title="NEWS!" description="Lorem BLATT" autor="John Doe" />
      <Article title="NEWS_$$$$$" description="Lorem BLATT-aaaaa" autor="John lee" />
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
