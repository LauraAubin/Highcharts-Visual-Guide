import * as React from "react";

import Card from "./components/Card";

interface Props {
  name: string;
  implementation: string;
}

export default class CursorType extends React.Component<Props> {
  public render() {
    const { name, implementation } = this.props;

    return (
      <Card
        name={name}
        description="Mouse icon on hover"
        selectItems={[
          { label: "pointer", value: "pointer" },
          { label: "alias", value: "alias" },
          { label: "all-scroll", value: "all-scroll" },
          { label: "cell", value: "cell" },
          { label: "context-menu", value: "context-menu" },
          { label: "col-resize", value: "col-resize" },
          { label: "copy", value: "copy" },
          { label: "crosshair", value: "crosshair" },
          { label: "e-resize", value: "e-resize" },
          { label: "ew-resize", value: "ew-resize" },
          { label: "grab", value: "grab" },
          { label: "grab", value: "grab" },
          { label: "grabbing", value: "grabbing" },
          { label: "help", value: "help" },
          { label: "move", value: "move" },
          { label: "n-resize", value: "n-resize" },
          { label: "ne-resize", value: "ne-resize" },
          { label: "nesw-resize", value: "nesw-resize" },
          { label: "ns-resize", value: "ns-resize" },
          { label: "nw-resize", value: "nw-resize" },
          { label: "nwse-resize", value: "nwse-resize" },
          { label: "no-drop", value: "no-drop" },
          { label: "none", value: "none" },
          { label: "not-allowed", value: "not-allowed" },
          { label: "progress", value: "progress" },
          { label: "row-resize", value: "row-resize" },
          { label: "s-resize", value: "s-resize" },
          { label: "se-resize", value: "se-resize" },
          { label: "sw-resize", value: "sw-resize" },
          { label: "text", value: "text" },
          { label: "w-resize", value: "w-resize" },
          { label: "wait", value: "wait" },
          { label: "zoom-in", value: "zoom-in" },
          { label: "zoom-out", value: "zoom-out" }
        ]}
        link="https://api.highcharts.com/highcharts/plotOptions.line.cursor"
        implementation={implementation}
        identifier="cursor"
      />
    );
  }
}
