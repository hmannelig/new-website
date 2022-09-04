import React from "react";
import "../css/box.css";

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.paragraph}</p>
        {/* <div>A</div>
        <div>B</div>
        <div>C</div> */}
      </div>
    );
  }
}

export default Box;
