import "./css/App.css";
import Page from "./components/Page";
import Top from "./components/Top";

// import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Top />
      </header>
      <body className="App-body">
        <Page />
      </body>
      <footer />
    </div>
  );
}

export default App;
