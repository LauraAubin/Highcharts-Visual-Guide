import * as React from "react";

import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

Exporting(Highcharts);

const purple = "#AF8BE2";

// interface Props {
//   rows: [number];
//   columns: [string];
// }

class Chart extends React.Component{
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
    // const { rows, columns } = this.props;

    Highcharts.chart("container", {
      chart: {
        height: 200,
        showAxes: true,
        spacing: [5, 15, 0, 0],
        type: "line"
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
          color: purple,
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
          data: [1, 2, 3]
        }
      ],
      title: {
        text: undefined
      },
      xAxis: {
        categories: [4, 5, 6],
        crosshair: {
          color: "rgba(204, 204, 204, 0.5)",
          width: 5
        },
        endOnTick: true,
        gridLineDashStyle: "Dash",
        gridLineWidth: 0,
        labels: {
          step: 10,
          y: 25
        },
        min: 0.5,
        minorTickLength: 2,
        tickLength: 5,
        tickmarkPlacement: "on"
      },
      yAxis: {
        minRange: 0.1,
        softMax: 10,
        softMin: 0,
        title: {
          text: undefined
        }
      }
    });
  }
}

export default Chart;