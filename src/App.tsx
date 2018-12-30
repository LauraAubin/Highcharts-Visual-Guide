import * as React from "react";
import {
  AppProvider,
  Frame,
  TopBar,
  Navigation,
  ChoiceList
} from "@shopify/polaris";
import Cards from "./components/Cards";
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
          <Cards searchText={searchText} navigationSelect={navigationSelect} />
        </Frame>
      </AppProvider>
    );
  }
}
export default App;
