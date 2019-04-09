import React from "react";

import allCardDetails from "./CardDetails";
import Card from "./components/Card";

interface Props {
  searchText: string;
  navigationSelect: string[];
}

class Cards extends React.Component<Props, {}> {
  public render() {
    const { searchText } = this.props;

    const arrayOfCards = allCardDetails.map(i => <Card {...i} />);

    const filterWithSearch = arrayOfCards.filter(card =>
      this.cardName(card).includes(searchText.toLowerCase())
    );

    const filterWithNavigation = arrayOfCards.filter(card =>
      this.checkForRelatableText(card)
    );

    const cardsAfterAllFilters = filterWithSearch.filter(i =>
      filterWithNavigation.includes(i)
    );

    return <div className="CardContainer">{cardsAfterAllFilters}</div>;
  }

  private cardName(card: JSX.Element) {
    return card.props.name.toLowerCase();
  }

  private cardImplementationText(card: JSX.Element) {
    return card.props.implementation;
  }

  private checkForRelatableText(card: any) {
    const { navigationSelect } = this.props;

    if (navigationSelect.length === 0) {
      return true;
    }

    const implementationText = this.cardImplementationText(card);

    return navigationSelect.some(function(filter) {
      // breaks when this is true
      return implementationText.includes(filter);
    });
  }
}
export default Cards;
