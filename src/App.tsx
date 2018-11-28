import * as React from "react";
import "./App.scss";

import { Card, Page, AppProvider } from "@shopify/polaris";

import Chart from "./Chart";

interface State {
  color: string;
}

class App extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
    this.state = { color: "Teal" };
  }

  public render() {
    const {color} = this.state;

    return (
      <>
        <Chart />
      </>
    );
  }
}
export default App;
