import react from "react";
import Button from "./components/Button";
import PersonDetail from "./components/PersonDetail";
import { useState } from 'react';


function App() {

  const [persons, setPersons] = useState(
    [ 
      {
        firstName: "Aman",
        age: 29,
        goal: "Commercial Pilot"
      },

      {
        firstName: "Eva Mariam",
        age: 24,
        goal: "Scientist"
      },

      {
        firstName: "Afzal",
        age: 29,
        goal: "Director of Innomatics"
      },

      {
        firstName: "Monica",
        age: 24,
        goal: "Software Developer - II"
      }
    ]
  );

  const [showData, setShowData] = useState(false);
  const [buttonText, setButtonText] = useState("Show Data");

  function renderPersons() {
    if (showData) {
      setShowData(false);
      setButtonText("Show Data")
    } else {
      setShowData(true);
      setButtonText("Collapse");
    }
  }

  return (
    <div className="App">
      <div >
        <Button click = {renderPersons} text = {buttonText}/>

        {/* Map to iterate over the list of persons */}

        {
            showData ? 
            persons.map((person, index) => {
              return <PersonDetail key = {index} person = {person}/>
            })
            : null
        }


        {/* <PersonDetail person = {persons[0]}/>
        <PersonDetail person = {persons[1]}/>
        <PersonDetail person = {persons[2]}/>
        <PersonDetail person = {persons[3]}/> */}
      </div>


    </div>
  );
}

export default App;