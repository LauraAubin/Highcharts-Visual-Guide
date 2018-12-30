import React from "react";

import Card from "./components/Card";

interface Props {
  searchText: string;
  navigationSelect: [string];
}

class Cards extends React.Component<Props, {}> {
  public render() {
    const { searchText, navigationSelect } = this.props;

    const arrayOfCards = [
      <Card
        name="Line color"
        description="Main color of the line itself"
        link="https://api.highcharts.com/highcharts/plotOptions.line.color"
        implementation="{plotOptions: {line: {color: value}}"
        textFieldPlaceHolder="Default: #7CB5EC"
      />,
      <Card
        name="Line width"
        description="Pixel width of the graph line"
        link="https://api.highcharts.com/highcharts/plotOptions.line.lineWidth"
        implementation="{plotOptions: {line: {lineWidth: value}}"
        textFieldPlaceHolder="Default: 2"
      />,
      <Card
        name="Dash style"
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
        implementation="{plotOptions: {line: {dashStyle: value}}"
      />,
      <Card
        name="Cursor type"
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
        implementation="{plotOptions: {line: {cursor: value}}"
      />,
      <Card
        name="Data labels"
        description="..."
        link="https://api.highcharts.com/highcharts/plotOptions.line.dataLabels"
        implementation="..."
        selectItems={[
          { label: "True", value: "True" },
          { label: "False", value: "False" }
        ]}
        booleanChoice={true}
      />
    ];

    const filterWithSearch = arrayOfCards.filter(card =>
      this.cardName(card).includes(searchText.toLowerCase())
    );

    const joinedNavigationString = navigationSelect.join("").toLowerCase();
    const filterWithNavigation = arrayOfCards.filter(card =>
      this.cardImplementation(card).includes(joinedNavigationString)
    );

    const allFilters = filterWithSearch.filter(i =>
      filterWithNavigation.includes(i)
    );

    return <div className="CardContainer">{allFilters}</div>;
  }

  private cardName(name: JSX.Element) {
    return name.props.name.toLowerCase();
  }

  private cardImplementation(implementation: JSX.Element) {
    return implementation.props.implementation.toLowerCase();
  }
}
export default Cards;