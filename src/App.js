import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Stocks from "./components/Stocks";
const API_KEY = "N9wJwfuVyqBclNRtdw9V5zLLRQacv7nm0ONaM113GF9ywcihrPo3f0OABsGc";

class App extends Component {
  state = {
    symbol: undefined,
    name: undefined,
    price: undefined,
    fiftytwoWeekHigh: undefined,
    fiftytwoWeekLow: undefined,
    volume: undefined,
    fbPrice: undefined,
    fbSymbol: undefined,
    amznPrice: undefined,
    amznSymbol: undefined,
    aaplPrice: undefined,
    aaplSymbol: undefined,
    nflxPrice: undefined,
    nflxSymbol: undefined,
    googPrice: undefined,
    googSymbol: undefined,
    error: undefined
  };
  componentDidMount = async e => {
    const api_call = await fetch(
      `https://api.worldtradingdata.com/api/v1/stock?symbol=FB,AAPL,AMZN,NFLX,GOOG&api_token=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      fbSymbol: data.data[2].symbol,
      fbPrice: data.data[2].price,
      amznSymbol: data.data[1].symbol,
      amznPrice: data.data[1].price,
      aaplSymbol: data.data[0].symbol,
      aaplPrice: data.data[0].price,
      nflxSymbol: data.data[4].symbol,
      nflxPrice: data.data[4].price,
      googSymbol: data.data[3].symbol,
      googPrice: data.data[3].price,
      error: ""
    });
  };
  getStockPrice = async e => {
    e.preventDefault();
    const symbol = e.target.elements.symbol.value.toUpperCase();
    const api_call = await fetch(
      `https://api.worldtradingdata.com/api/v1/stock?symbol=${symbol}&api_token=${API_KEY}`
    );
    const data = await api_call.json();
    if (symbol) {
      console.log(data);
      this.setState({
        symbol: data.data[0].symbol,
        name: data.data[0].name,
        price: data.data[0].price,
        fiftytwoWeekHigh: data.data[0]["52_week_high"],
        fiftytwoWeekLow: data.data[0]["52_week_low"],
        volume: data.data[0].volume,
        error: ""
      });
    } else {
      this.setState({
        symbol: undefined,
        name: undefined,
        price: undefined,
        error: "Please enter the symbol of a company."
      });
    }
  };
  render() {
    return (
      <div>
        <Titles />
        <Form getStockPrice={this.getStockPrice} />
        <Stocks
          symbol={this.state.symbol}
          name={this.state.name}
          price={this.state.price}
          fiftytwoWeekHigh={this.state.fiftytwoWeekHigh}
          fiftytwoWeekLow={this.state.fiftytwoWeekLow}
          volume={this.state.volume}
          error={this.state.error}
          fbPrice={this.state.fbPrice}
          fbSymbol={this.state.fbSymbol}
          amznPrice={this.state.amznPrice}
          amznSymbol={this.state.amznSymbol}
          aaplPrice={this.state.aaplPrice}
          aaplSymbol={this.state.aaplSymbol}
          nflxPrice={this.state.nflxPrice}
          nflxSymbol={this.state.nflxSymbol}
          googPrice={this.state.googPrice}
          googSymbol={this.state.googSymbol}
        />
      </div>
    );
  }
}

export default App;
