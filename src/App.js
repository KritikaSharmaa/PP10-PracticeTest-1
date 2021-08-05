import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    FirstNum: 0,
    SecondNum: 0,
    Operator: "",
    FinalRes: 0,
    isSecondNum: false,
  };
  render = () => {
    return (
      <>
        <div className="main-container">
          <div className="Heading">
            <span>Calculator</span>
            <span className="material-icons calculate">calculate</span>
          </div>

          <div className="Number-Area">{this.state.FinalRes}</div>

          <div
            className="KeyPadArea"
            onClick={(e) => {
              // console.log(e.target.innerText);
              let input = e.target.innerText;

              if (
                input === "+" ||
                input === "-" ||
                input === "%" ||
                input === "X"
              ) {
                if (input === "X") input = "*";
                this.setState({ Operator: input });
              } else if (input === "Result") {
                let res = eval(
                  `${this.state.FirstNum}${this.state.Operator}${this.state.SecondNum}`
                );
                this.setState({ FinalRes: res });
                this.setState({ FirstNum: res, Operator: "", SecondNum: 0 });
              } else {
                if (this.state.isSecondNum) {
                  this.setState({ SecondNum: input });
                } else {
                  this.setState({ FirstNum: input, isSecondNum: true });
                }
              }
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
        </div>
      </>
    );
  };
}
export default App;
