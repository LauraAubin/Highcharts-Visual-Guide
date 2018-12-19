import React, { ReactNode } from "react";

import "./Code.scss";

interface Props {
  surroundingText: string;

  /* Text field */
  value: string;
  children: ReactNode;
}

class Code extends React.Component<Props> {
  public render() {
    const { surroundingText, value, children } = this.props;

    const splitText = surroundingText.split("value");

    const length = value.length === 0 ? this.textWidth(surroundingText) : this.textWidth(value);

    const foo = {
      width: `${length}px`,
    }

    return (
      <div className="Code">
        <div>{splitText[0]}</div>
          <div className="TextField" style={foo}>
            {children}
          </div>
        <div>{splitText[1]}</div>
      </div>
    );
  }

  private textWidth(text: string) {
    return text.length * 4.8;
  }
}
export default Code;
