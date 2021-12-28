import Header from "./components/Header";

function App() {
  return (
    // JSX 

    <div className="App">
      {/* <h1> Hello Welcome to React </h1> */}
      <Header name = "Swammy" age = {30} />
      {/* <Header name = "Aditya" age = "30"/>
      <Header name = "Afzal" age = "25"/> */}
      {/* <Header /> */}
    </div>
  );
}

export default App;