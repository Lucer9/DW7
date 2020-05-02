import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      color: this.props.color,
    };
  }

  render() {
    return (
      <div className="button-container">
        <span className={this.state.color}>{this.state.label}</span>
      </div>
    );
  }
}

export default Button;
