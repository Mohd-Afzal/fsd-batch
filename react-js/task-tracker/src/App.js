import Button from "./components/Button";
import Tasks from "./components/Tasks";

function App() {
  return (
    // JSX 

    <div className="App">
      {/* <h1> Hello Welcome to React </h1> */}
      {/* <Header name = "Swammy" age = {30} /> */}
      {/* <Header name = "Aditya" age = "30"/> */ }
      {/* <Header /> */}
      <div className="container">
        <Button text = "Click Me!"/>
        <Tasks />
      </div>
    </div>
  );
}

export default App;