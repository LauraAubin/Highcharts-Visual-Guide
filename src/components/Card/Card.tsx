import React from "react";

import {
  Subheading,
  TextStyle,
  TextField,
  Icon,
  Stack,
  Button,
  Collapsible,
  List
} from "@shopify/polaris";
import Chart from "./components/Chart";

import "./Card.scss";

interface Props {
  name: string;
  description?: string;
  popoverItems?: string[];
  link: string;
  implementation: string;
  textFieldPlaceHolder: string;
}

interface State {
  input: string;
  expandArea: boolean;
}

class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { input: "", expandArea: false };
  }

  handleInput = (input: string) => {
    this.setState({ input });
  };

  handleExpandableArea = () => {
    const { expandArea } = this.state;

    this.setState({ expandArea: !expandArea });
  };

  public render() {
    const {
      name,
      description,
      popoverItems,
      link,
      implementation,
      textFieldPlaceHolder
    } = this.props;
    const { input, expandArea } = this.state;

    const evaluatedLineWidth = input === "" ? 2 : parseInt(input);

    return (
      <div className="Card">
        <Stack distribution="equalSpacing" alignment="center" spacing="none">
          <Subheading>{name}</Subheading>
          <a className="Link" href={link} target="_blank">
            <Icon source="external" color="inkLighter" />
          </a>
        </Stack>

        <TextStyle variation="subdued">{description}</TextStyle>

        {popoverItems && (
          <div className="PopoverButton">
            <Stack vertical>
              <Button
                onClick={this.handleExpandableArea}
                ariaExpanded={expandArea}
              >
                Possible values
              </Button>
              <Collapsible open={expandArea} id="basic-collapsible">
                <div className="popoverList">
                  <List type="bullet">
                    {popoverItems.map(item => (
                      <List.Item>{item}</List.Item>
                    ))}
                  </List>
                </div>
              </Collapsible>
            </Stack>
          </div>
        )}

        <div className="Chart">
          <Chart
            id={name}
            lineColor={name === "Line color" ? input : undefined}
            lineWidth={name === "Line width" ? evaluatedLineWidth : undefined}
            cursor={name === "Cursor type" ? input : undefined}
            dashStyle={name === "Dash style" ? input : undefined}
          />
        </div>

        <Stack distribution="center">
          <div className="Code">{implementation}</div>
        </Stack>

        <div className="TextField">
          <TextField
            label="Input field"
            labelHidden
            value={input}
            placeholder={textFieldPlaceHolder}
            onChange={this.handleInput}
          />
        </div>
      </div>
    );
  }
}
export default Card;
