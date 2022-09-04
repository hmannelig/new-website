import "./css/App.css";
import Page from "./components/Page";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the header</header>
      {/* <hr class="faded" /> */}
      <body className="App-body">
        <Page />
      </body>
      {/* <hr class="faded" /> */}
      <footer />
    </div>
  );
}

export default App;
