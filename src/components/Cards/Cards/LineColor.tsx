import * as React from "react";

import Card from "./components/Card";

interface Props {
  name: string;
  implementation: string;
}

export default class LineColor extends React.Component<Props> {
  public render() {
    const { name, implementation } = this.props;

    return (
      <Card
        name={name}
        description="Main color of the line itself"
        link="https://api.highcharts.com/highcharts/plotOptions.line.color"
        implementation={implementation}
        textFieldPlaceHolder="Default: #7CB5EC"
        identifier="lineColor"
      />
    );
  }
}
