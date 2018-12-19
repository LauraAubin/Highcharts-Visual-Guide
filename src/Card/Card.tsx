import React from "react";

import {
  Subheading,
  TextStyle,
  TextField,
  Icon,
  Stack
} from "@shopify/polaris";
import Chart from "../Chart";
import Code from "../Code";

import "./Card.scss";

interface Props {
  name: string;
  description: string;
  link: string;
  implementation: string;
  textFieldPlaceHolder: string;
}

interface State {
  input: string;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: "" };
  }

  handleInput = (input: string) => {
    this.setState({ input });
  };

  public render() {
    const {
      name,
      description,
      link,
      implementation,
      textFieldPlaceHolder
    } = this.props;
    const { input } = this.state;

    const defaultValue = textFieldPlaceHolder.replace("Default: ", "");
    const modifiedImplementationText =
      input === ""
        ? implementation.replace("value", defaultValue)
        : implementation.replace("value", input);

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
          <Chart lineColor={name === "Line color" ? input : undefined} />
        </div>

        <Code surroundingText={implementation} value={input}>
          <TextField
            label="Input field"
            labelHidden
            value={input}
            placeholder={textFieldPlaceHolder}
            onChange={this.handleInput}
          />
        </Code>
      </div>
    );
  }
}
export default Card;
