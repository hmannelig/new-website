import React from "react";
import "./smallbox.css";
import UoG from "../../resources/university-of-glasgow-logo.png";

class SmallBox extends React.Component {
  render() {
    return (
      <a
        className="small-box"
        href="https://www.gla.ac.uk/postgraduate/taught/softwaredevelopment/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="picture-container"
          src={UoG}
          alt="University of Glasgow"
        />
        <h5>MSc Software Development</h5>
        <p>Postgraduate</p>
      </a>
    );
  }
}

export default SmallBox;
