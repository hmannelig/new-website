import "./css/App.css";
import Page from "./components/Page";
// import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pablo Berjon Galan</h1>
        <h3>
          Full stack <b>software engineer</b>, <b>geographer</b> and{" "}
          <b>powerlifter</b>.
        </h3>
        <p>
          Java, Python, SQL, Machine Learning, React, Spring Boot
        </p>
      </header>
      <body className="App-body">
        <Page />
      </body>
      <footer />
    </div>
  );
}

export default App;
