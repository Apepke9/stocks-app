import React, { Component } from "react";

class Stocks extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.fbSymbol && this.props.fbPrice && (
            <p>
              Facebook Stock Price: {this.props.fbSymbol} , {this.props.fbPrice}{" "}
              per share
            </p>
          )}
          {this.props.amznSymbol && this.props.amznPrice && (
            <p>
              Amazon Stock Price: {this.props.amznSymbol} ,{" "}
              {this.props.amznPrice} per share
            </p>
          )}
          {this.props.aaplSymbol && this.props.aaplPrice && (
            <p>
              Apple Stock Price: {this.props.aaplSymbol} ,{" "}
              {this.props.aaplPrice} per share
            </p>
          )}
          {this.props.nflxSymbol && this.props.nflxPrice && (
            <p>
              Netflix Stock Price: {this.props.nflxSymbol} ,{" "}
              {this.props.nflxPrice} per share
            </p>
          )}
          {this.props.googSymbol && this.props.googPrice && (
            <p>
              Google Stock Price: {this.props.googSymbol} ,{" "}
              {this.props.googPrice} per share
            </p>
          )}
          <br />
        </div>
        <div>
          {this.props.name && this.props.price && (
            <p>
              Stock Information: {this.props.name} , {this.props.price} per
              share
            </p>
          )}
          {this.props.fiftytwoWeekHigh && (
            <p>52 week High: {this.props.fiftytwoWeekHigh}</p>
          )}
          {this.props.fiftytwoWeekLow && (
            <p>52 week Low: {this.props.fiftytwoWeekLow}</p>
          )}
          {this.props.volume && <p> Volume: {this.props.volume}</p>}
          {this.props.error && <p> {this.props.error}</p>}
        </div>
      </React.Fragment>
    );
  }
}

export default Stocks;
