import * as React from "react";
import { AppProvider, Frame, TopBar, Stack } from "@shopify/polaris";
import appLogo from "./images/HighchartsVisualGuide.svg";
import Card from "./Card";

import "./App.scss";

interface State {
  searchText: string;
}

class App extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
    this.state = { searchText: "" };
  }

  handleSearchField = (value: string) => {
    this.setState({ searchText: value });
  };

  public render() {
    const { searchText } = this.state;
    const teal = "#357997";

    const theme = {
      colors: {
        topBar: {
          background: teal
        }
      },
      logo: {
        width: 170,
        topBarSource: appLogo,
        url: "https://highcharts-visual-guide.herokuapp.com/"
      }
    };

    const searchFieldMarkup = (
      <div className="SearchBarContainer">
        <TopBar.SearchField
          onChange={this.handleSearchField}
          value={searchText}
          placeholder="Search"
        />
      </div>
    );

    const topBarMarkup = <TopBar searchField={searchFieldMarkup} />;

    return (
      <AppProvider theme={theme}>
        <Frame topBar={topBarMarkup}>
          <Stack>
            <Card
              name="Line color"
              description="Main color of the line itself"
              link="https://api.highcharts.com/highcharts/plotOptions.line.color"
              implementation="{plotOptions: {line: {color: value}}"
              textFieldPlaceHolder="Default: #7CB5EC"
            />
            <Card
              name="Line width"
              description="Pixel width of the graph line"
              link="https://api.highcharts.com/highcharts/plotOptions.line.lineWidth"
              implementation="{plotOptions: {line: {lineWidth: value}}"
              textFieldPlaceHolder="Default: 2"
            />
            <Card
              name="Cursor type"
              description="Mouse icon on graph hover. i.e, pointer"
              link="https://api.highcharts.com/highcharts/plotOptions.line.cursor"
              implementation="{plotOptions: {line: {cursor: value}}"
              textFieldPlaceHolder="Default: undefined"
            />
            <Card
              name="Dash style"
              popoverItems={[
                "Solid",
                "ShortDash",
                "ShortDot",
                "ShortDashDot",
                "ShortDashDotDot",
                "Dot",
                "Dash",
                "LongDash",
                "DashDot",
                "LongDashDot",
                "LongDashDotDot"
              ]}
              link="https://api.highcharts.com/highcharts/plotOptions.line.dashStyle"
              implementation="{plotOptions: {line: {dashStyle: value}}"
              textFieldPlaceHolder="Default: solid"
            />
          </Stack>
        </Frame>
      </AppProvider>
    );
  }
}
export default App;
