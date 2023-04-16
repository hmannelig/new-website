import React from "react";
import "../css/Top.css";
import myPicture from "../resources/profile_pic.png";

class Top extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: ["Full Stack Software Engineer", "Geographer", "Powerlifter"],
      currentWordIndex: 0,
    };

    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        currentWordIndex:
          (prevState.currentWordIndex + 1) % prevState.words.length,
      }));
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const currentWord = this.state.words[this.state.currentWordIndex];

    return (
      <div>
        <div className="circle-image">
          <img src={myPicture} alt="" />
        </div>

        <div>
          <h1>Pablo Berjon Galan</h1>
          <h3 className="word-wrap">
            <span className="word">{currentWord}</span>
          </h3>
          <p>Java, Python, SQL, Machine Learning, React, Spring Boot</p>
        </div>
      </div>
    );
  }
}

export default Top;

// https://diogotc.com/#aboutme
