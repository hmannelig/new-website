import React from "react";
import "./Box.css";
import SmallBox from "../smallbox/SmallBox";

class Box extends React.Component {
  render() {
    return (
      <div className="box">
        {/* <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.paragraph}</p> */}
        <div className="small-boxes-container">
          <SmallBox />
          <SmallBox />
          <SmallBox />
        </div>
      </div>
    );
  }
}

export default Box;
