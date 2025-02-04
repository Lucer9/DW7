import React from "react";
import "./buttonFilter.css";
import ButtonImg from "./buttonImg/buttonImg";

class ButtonFilter extends React.Component {
  constructor(props, ref) {
    super(props);
    this.state = {
      title: this.props.title,
      tooltip: this.props.tooltip,
      size: this.props.size,
      buttons: this.props.buttons,
      selected: this.props.selected,
    };
  }

  setSelected(item){
    console.log(item)
    this.setState({selected:item})
  }
  

  clearSelected(){
    this.setState({selected:""})
  }

  getSelected(){
    return this.state.selected
  }

  render() {
    return (
      <div className="filter-container">
        <div className="title">
          <h2>
            {this.state.title}
            <span>
              ?<p className="tooltip">{this.state.tooltip}</p>
            </span>
          </h2>
        </div>
        {this.state.buttons.map((item, index) => (
          <div
            key={index}
            className={`button ${this.state.size} ${item.name === this.state.selected ? "selected" : ""}`}
            onClick={(e) => this.setSelected(item.name, e)}            
          >
            <ButtonImg
              label={item.name}
              src={require("../images/" + item.src + ".png")}
            ></ButtonImg>
          </div>
        ))}
      </div>
    );
  }
}

export default ButtonFilter;
