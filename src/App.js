import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBackward } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numpadScreen: []
    };
  }

  changeNumpadScreen = e => {
    const { numpadScreen } = this.state;
    const digits = [...numpadScreen];
    const numberLength = numpadScreen.length;

    if (numberLength <= 20) {
      digits.push(e.currentTarget.textContent);
      this.setState({ numpadScreen: digits });
    }
  };

  removeDigit = () => {
    const { numpadScreen } = this.state;
    const digits = [...numpadScreen];
    digits.length > 0 && digits.pop();
    this.setState({ numpadScreen: digits });
  };
  callScreenNumber = () => {
    const { numpadScreen } = this.state;
    const numberLength = numpadScreen.length;
    const numberLengthValidation = numberLength > 0 && numberLength === 10;
    const numberValidation =
      numpadScreen[0] === "7" ||
      numpadScreen[0] === "8" ||
      numpadScreen[0] === "9";
    if (!numberLengthValidation) {
      alert("Your number should be of 10 Digits");
      return false;
    }
    if (!numberValidation) {
      alert("Your number should start with 7,8 or 9 only !!");
      return false;
    }
    alert("Call Successfull !!");
  };

  render() {
    const { numpadScreen } = this.state;
    return (
      <div className="screen card mr-t-xxl">
        <div className="pd-xl br-b-xs text-center">
          <div style={{ height: 5 }}>{numpadScreen.map(item => item)}</div>
        </div>
        <div className="flex-vbox flex-cross-center">
          <div className="flex-hbox">
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              1
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              2
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              3
            </div>
          </div>
          <div className="flex-hbox">
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              4
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              5
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              6
            </div>
          </div>
          <div className="flex-hbox">
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              7
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              8
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              9
            </div>
          </div>
          <div className="flex-hbox">
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              *
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={e => this.changeNumpadScreen(e)}
            >
              0
            </div>
            <div
              className="pd-xl text-center text-info cursor-pointer"
              onClick={this.removeDigit}
            >
              <FontAwesomeIcon icon={faBackward} />
            </div>
          </div>
        </div>
        <div
          className="bg-success card text-center pd-lg cursor-pointer"
          onClick={this.callScreenNumber}
        >
          <FontAwesomeIcon icon={faPhone} />
        </div>
      </div>
    );
  }
}

export default App;
