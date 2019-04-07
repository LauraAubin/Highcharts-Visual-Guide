import * as React from "react";

import * as Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";

Exporting(Highcharts);

const defaultHighchartsBlue = "#7CB5EC";
const grey = "#e2e2e2";

interface Props {
  id: string;
  rows?: [string];
  columns?: [number];
  modifier: { type: string, value: string | number, inUse: boolean };
}

class Chart extends React.Component<Props> {
  public render() {
    const { id } = this.props;

    return <div id={id} />;
  }

  public componentDidMount() {
    this.renderChart();
  }

  public componentDidUpdate() {
    this.renderChart();
  }

  public renderChart() {
    const {
      id,
      rows = ["a", "b", "c", "d", "e"],
      columns = [1, 2, 6, 2, 1],
      modifier
    } = this.props;

    const modifiers = {
      lineColor: defaultHighchartsBlue,
      cursor: "pointer",
      dashStyle: "solid",
      lineWidth: 3,
      backgroundColor: "white"
    };

    const inUseItem = {[modifier.type]: modifier.value};
    const inUseModifiers = modifier.inUse ? {...modifiers, ...inUseItem} : modifiers

    Highcharts.chart(id, {
      chart: {
        height: 200,
        backgroundColor: inUseModifiers.backgroundColor
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
          color: inUseModifiers.lineColor,
          cursor: inUseModifiers.cursor,
          dashStyle: inUseModifiers.dashStyle,
          lineWidth: inUseModifiers.lineWidth
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
