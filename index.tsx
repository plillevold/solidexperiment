import { createSignal, onCleanup, Component } from "solid-js";
import { render } from "solid-js/web";

let App: Component = () => {
  const [count, setCount] = createSignal(0);
  const timer = setInterval(() => setCount((c) => c + 1), 1000);
  onCleanup(() => clearInterval(timer));

  return <div>{count()}</div>;
};

render(() => <App />, document.getElementById("app"));
