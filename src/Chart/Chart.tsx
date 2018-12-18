import * as React from "react";

import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

Exporting(Highcharts);

const defaultHighchartsBlue = "#7CB5EC";
const grey = "#e2e2e2";

interface Props {
  rows?: [string];
  columns?: [number];
  lineColor?: string;
}

class Chart extends React.Component<Props> {
  public render() {
    return <div id="container" />;
  }

  public componentDidMount() {
    this.renderChart();
  }

  public componentDidUpdate() {
    this.renderChart();
  }

  public renderChart() {
    const {
      rows = ["a", "b", "c", "d", "e"],
      columns = [1, 2, 6, 2, 1],
      lineColor = defaultHighchartsBlue
    } = this.props;

    Highcharts.chart("container", {
      chart: {
        height: 200
      },
      credits: {
        enabled: false
      },
      exporting: { enabled: false },
      legend: {
        enabled: false
      },
      plotOptions: {
        line: {
          color: lineColor,
          lineWidth: 3
        },
        series: {
          marker: {
            enabled: false,
            radius: 2,
            symbol: "circle"
          },
          states: {
            hover: {
              enabled: true,
              halo: false,
              lineWidthPlus: 0
            }
          }
        }
      },
      series: [
        {
          data: columns
        }
      ],
      title: {
        text: undefined
      },
      tooltip: { enabled: false },
      xAxis: {
        categories: rows,
        crosshair: {
          color: grey,
          width: 5
        },
        min: 0.5,
        tickmarkPlacement: "on"
      },
      yAxis: {
        title: {
          text: undefined
        }
      }
    });
  }
}

export default Chart;
