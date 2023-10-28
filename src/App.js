import "./css/App.css";
import Page from "./components/page/Page";
import Top from "./components/top/Top";

// import Box from "./components/Box";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <Top />
      </header>
      <body className="App-body">
        <Page />
      </body>
      <footer />
    </main>
  );
}

export default App;
