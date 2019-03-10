import * as React from "react";

import Card from "./components/Card";

interface Props {
  name: string;
  implementation: string;
}

export default class DashStyle extends React.Component<Props> {
  public render() {
    const { name, implementation } = this.props;

    return (
      <Card
        name={name}
        description="Defaults to solid"
        selectItems={[
          { label: "Solid", value: "Solid" },
          { label: "ShortDash", value: "ShortDash" },
          { label: "ShortDot", value: "ShortDot" },
          { label: "SolShortDashDotid", value: "ShortDashDot" },
          { label: "ShortDashDotDot", value: "ShortDashDotDot" },
          { label: "Dot", value: "Dot" },
          { label: "Dash", value: "Dash" },
          { label: "LongDash", value: "LongDash" },
          { label: "DashDot", value: "DashDot" },
          { label: "LongDashDot", value: "LongDashDot" },
          { label: "LongDashDotDot", value: "LongDashDotDot" }
        ]}
        link="https://api.highcharts.com/highcharts/plotOptions.line.dashStyle"
        implementation={implementation}
        identifier="dashStyle"
      />
    );
  }
}
