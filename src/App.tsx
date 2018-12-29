import * as React from "react";
import {
  AppProvider,
  Frame,
  TopBar,
  Navigation,
  ChoiceList
} from "@shopify/polaris";
import Card from "./components/Card";
import appLogo from "./images/HighchartsVisualGuide.svg";

import "./App.scss";

interface State {
  searchText: string;
  navigationSelect: [string];
}

class App extends React.Component<{}, State> {
  constructor(state: State) {
    super(state);
    this.state = { searchText: "", navigationSelect: [""] };
  }

  handleSearchField = (value: string) => {
    this.setState({ searchText: value });
  };

  handleNavigationSelect = (value: [string]) => {
    this.setState({ navigationSelect: value });
  };

  public render() {
    const { searchText, navigationSelect } = this.state;
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

    const navigationMarkup = (
      <Navigation location="/">
        <div className="NavigationContainer">
          <div className="NavigatorTitle">Only show graphs of type</div>
          <ChoiceList
            allowMultiple
            choices={[
              {
                label: "plotOptions",
                value: "plotOptions"
              }
            ]}
            selected={navigationSelect}
            onChange={this.handleNavigationSelect}
          />
        </div>
      </Navigation>
    );

    return (
      <AppProvider theme={theme}>
        <Frame topBar={topBarMarkup} navigation={navigationMarkup}>
          <div className="CardContainer">
            {/* <Stack> */}
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
            {/* </Stack> */}
          </div>
        </Frame>
      </AppProvider>
    );
  }
}
export default App;
