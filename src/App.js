import React from "react";
import "./App.css";
import KeyPad from "./KeyPad";

class App extends React.Component {
  state = {
    FirstNum: "",
    SecondNum: "",
    Operator: "",
    FinalRes: "",
    isOperatorClicked: false,
  };
  HandleAllOperationsAndCalculation = (input) => {
    if (input === "+" || input === "-" || input === "%" || input === "X") {
      if (input === "X") input = "*";
      this.setState({
        Operator: input,
        FinalRes: this.state.FinalRes + "" + input,
        isOperatorClicked: true,
      });
    } else if (input === "Result") {
      let res = eval(
        `${this.state.FirstNum}${this.state.Operator}${this.state.SecondNum}`
      );
      this.setState({ FinalRes: res });
      this.setState({ FirstNum: res, Operator: "", SecondNum: "" });
    } else {
      if (this.state.isOperatorClicked) {
        this.setState({
          SecondNum: this.state.SecondNum + input,
          FinalRes: this.state.FinalRes + "" + input,
        });
      } else if (!this.state.isOperatorClicked) {
        this.setState({
          FirstNum: this.state.FirstNum + input,
          FinalRes: this.state.FinalRes + "" + input,
        });
      }
    }
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
          <KeyPad HandlerFunction={this.HandleAllOperationsAndCalculation} />
        </div>
      </>
    );
  };
}
export default App;
