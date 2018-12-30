import React from "react";
import autobind from 'autobind-decorator'
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
  booleanChoice?: boolean;
  link: string;
  implementation: string;
  textFieldPlaceHolder?: string;
}

interface State {
  input: string;
  valueSelected: string;
  booleanSelected: boolean;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: "", valueSelected: "", booleanSelected: true };
  }

  handleInput = (input: string) => {
    this.setState({ input });
  };

  handleValueSelected = (newValue: string) => {
    this.setState({ valueSelected: newValue });
  };

  @autobind
  handleBooleanSelected() {
    const {booleanSelected} = this.state;

    this.setState({ booleanSelected: !booleanSelected });
  }

  public render() {
    const {
      name,
      description,
      selectItems,
      booleanChoice,
      link,
      implementation,
      textFieldPlaceHolder
    } = this.props;
    const { input, valueSelected, booleanSelected } = this.state;

    const evaluatedLineWidth = input === "" ? 2 : parseInt(input);

    const valueMarkup = selectItems ? (
      <div className="SelectButton">
        <Select
          label=""
          options={selectItems}
          onChange={
            booleanChoice
              ? this.handleBooleanSelected
              : this.handleValueSelected
          }
          value={booleanChoice ? booleanSelected.toString() : valueSelected}
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
            lineColor={name === "Line color" ? input : undefined}
            lineWidth={name === "Line width" ? evaluatedLineWidth : undefined}
            cursor={name === "Cursor type" ? valueSelected : undefined}
            dashStyle={name === "Dash style" ? valueSelected : undefined}
            dataLabels={name === "Data labels" ? booleanSelected : undefined}
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
