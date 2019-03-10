import React from "react";

import {
  Subheading,
  TextStyle,
  TextField,
  Icon,
  Stack,
  Select
} from "@shopify/polaris";
import Chart from "./components/Chart";

import "./Card.scss";

interface Props {
  name: string;
  description: string;
  selectItems?: { label: string; value: string }[];
  link: string;
  implementation: string;
  textFieldPlaceHolder?: string;
  identifier: string;
}

interface State {
  input: string;
  valueSelected: string;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: "", valueSelected: "" };
  }

  handleInput = (input: string) => {
    this.setState({ input });
  };

  handleValueSelected = (newValue: string) => {
    this.setState({ valueSelected: newValue });
  };

  public render() {
    const {
      name,
      description,
      selectItems,
      link,
      implementation,
      textFieldPlaceHolder,
      identifier
    } = this.props;
    const { input, valueSelected } = this.state;

    const valueMarkup = selectItems ? (
      <div className="SelectButton">
        <Select
          label=""
          options={selectItems}
          onChange={this.handleValueSelected}
          value={valueSelected}
        />
      </div>
    ) : (
      <div className="TextField">
        <TextField
          label="Input field"
          labelHidden
          value={input}
          placeholder={textFieldPlaceHolder}
          onChange={this.handleInput}
        />
      </div>
    );

    const checkForNumberInputs =
      identifier === "lineWidth" ? parseInt(input) : input;
    const modifierValue = input === "" ? valueSelected : checkForNumberInputs;

    return (
      <div className="Card">
        <Stack distribution="equalSpacing" alignment="center" spacing="none">
          <Subheading>{name}</Subheading>

          <a className="Link" href={link} target="_blank">
            <Icon source="external" color="inkLighter" />
          </a>
        </Stack>

        <TextStyle variation="subdued">{description}</TextStyle>

        <div className="Chart">
          <Chart
            id={name}
            modifier={{
              type: identifier,
              value: modifierValue,
              inUse: modifierValue !== ""
            }}
          />
        </div>

        <Stack distribution="center">
          <div className="Code">{implementation}</div>
        </Stack>

        {valueMarkup}
      </div>
    );
  }
}
export default Card;
