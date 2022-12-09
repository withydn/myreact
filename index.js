function HelloWorldButton() {
  // useState값
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? "It's clicked" : "It's not clicked";
  return React.createElement(
    "button",
    { onClick: () => setClickState(!isClick) },
    React.createElement("div", null, React.createElement("span", null, text))
  );
}
const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));
