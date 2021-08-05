import React from "react";
class KeyPad extends React.Component {
  render = () => {
    return (
      <div
        className="KeyPadArea"
        onClick={(e) => {
          this.props.HandlerFunction(e.target.innerText);
        }}
      >
        <div className="operations">
          <button>+</button>
          <button className="sub">-</button>
          <button>%</button>
          <button>X</button>
          <button className="result">Result</button>
        </div>
        <div className="keypad-Numbers">
          <div className="Numbers-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className="Numbers-row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div className="Numbers-row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className="Numbers-row">
            {" "}
            <button>0</button>
          </div>
        </div>
      </div>
    );
  };
}
export default KeyPad;
