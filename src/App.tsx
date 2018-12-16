import * as React from "react";
import { AppProvider } from "@shopify/polaris";

import "./App.scss";

import Card from "./Card";

class App extends React.Component {
  public render() {
    return (
      <AppProvider>
        <Card
          name="Line color"
          description="Main color of the line itself"
          link="https://api.highcharts.com/highcharts/plotOptions.line.color"
          implementation="{plotOptions: {line: {color: value}}"
          textFieldPlaceHolder="Default: #7CB5EC"
        />
      </AppProvider>
    );
  }
}
export default App;
