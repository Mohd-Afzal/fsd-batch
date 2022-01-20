import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(false);

    useEffect(() => {
        console.log("Use Effect Hook's callback has been invoked!");
        // Fetch the data from a server - JSON Server
        // returns a promise
        setTimeout(() => {
          // const resource = "persons";
          // fetch(`http://localhost:8000/${resource}`)
          fetch(url)
          .then((response) => {
            console.log("Fist Promise: ", response);
            if(!response.ok) {
              throw Error(`Unable to reach the mentioned resource`);
            }
            return response.json();
          })
          .then((response) => {
            console.log("Second Promise", response);
            setData(response);
            setTriggerFetch(true);
            // setShowData(true);
          }).catch((error) => {
            console.log(error.message);
          });
        }, 4000);
    }, []);

    return {data, triggerFetch, setData, setTriggerFetch};
}

export default useFetch;