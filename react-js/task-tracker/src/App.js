import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <h1> Hello Welcome to React </h1> */}
      <Header title = "first header" id = "1" />
      <Header title = "second header" id = "2"/>
      <Header />
    </div>
  );
}

export default App;