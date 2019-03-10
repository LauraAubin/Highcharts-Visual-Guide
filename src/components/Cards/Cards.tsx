import React from "react";

import LineColor from "./Cards/LineColor";
import LineWidth from "./Cards/LineWidth";
import DashStyle from "./Cards/DashStyle";
import CursorType from "./Cards/CursorType";

interface Props {
  searchText: string;
  navigationSelect: [string];
}

class Cards extends React.Component<Props, {}> {
  public render() {
    const { searchText, navigationSelect } = this.props;

    const arrayOfCards = [];
    arrayOfCards.push(
      <LineColor
        name="Line color"
        implementation="{plotOptions: {line: {color: value}}"
      />,
      <LineWidth
        name="Line width"
        implementation="{plotOptions: {line: {lineWidth: value}}"
      />,
      <DashStyle
        name="Dash style"
        implementation="{plotOptions: {line: {dashStyle: value}}"
      />,
      <CursorType
        name="Cursor type"
        implementation="{plotOptions: {line: {cursor: value}}"
      />
    );

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
