import MyApp from "./components/MyApp";

function App() {
  return (
    // JSX 

    <div className="App">
      {/* <h1> Hello Welcome to React </h1> */}
      {/* <Header name = "Swammy" age = {30} /> */}
      {/* <Header name = "Aditya" age = "30"/> */ }
      {/* <Header /> */}
      {/* <div className="container">
        <Button text = "Click Me!"/>
        <Tasks />
      </div> */}

      <MyApp heading = "Type your text in the box below!"/>
    </div>
  );
}

export default App;