import * as React from "react";

import Card from "./components/Card";

interface Props {
  name: string;
  implementation: string;
}

export default class LineWidth extends React.Component<Props> {
  public render() {
    const { name, implementation } = this.props;

    return (
      <Card
        name={name}
        description="Pixel width of the graph line"
        link="https://api.highcharts.com/highcharts/plotOptions.line.lineWidth"
        implementation={implementation}
        textFieldPlaceHolder="Default: 2"
        identifier="lineWidth"
      />
    );
  }
}
