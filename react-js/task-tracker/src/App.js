import Header from "./components/Header";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

function App() {
  return (
    // JSX 

    <div className="App">
      {/* <h1> Hello Welcome to React </h1> */}
      {/* <Header name = "Swammy" age = {30} /> */}
      {/* <Header name = "Aditya" age = "30"/> */ }
      <Header name = "Afzal" age = "27"/>
      {/* <Header /> */}
      <Button text = "Click Me!"/>
      <Tasks />
    </div>
  );
}

export default App;