import React from "react";

import allCardDetails from "./CardDetails";
import Card from "./components/Card";

interface Props {
  searchText: string;
  navigationSelect: [string];
}

class Cards extends React.Component<Props, {}> {
  public render() {
    const { searchText, navigationSelect } = this.props;

    const arrayOfCards = allCardDetails.map(i => <Card {...i} />);

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

  private cardName(card: JSX.Element) {
    return card.props.name.toLowerCase();
  }

  private cardImplementation(card: JSX.Element) {
    return card.props.implementation.toLowerCase();
  }
}
export default Cards;
