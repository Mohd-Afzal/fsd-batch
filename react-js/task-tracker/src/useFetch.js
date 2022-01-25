import { useState, useEffect } from 'react';

function useFetch(url, toFetch) {
    const [data, setData] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(false);

    function callBack() {
      console.log("Use Effect Hook's callback has been invoked!");

      setTimeout(() => {
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
        }).catch((error) => {
          console.log(error.message);
        });
      }, 2000);
    }

    useEffect(() => {
      if(toFetch) {
        callBack();
      }
    }, [toFetch]);
    
    return {data, triggerFetch, setData, setTriggerFetch};
}

export default useFetch;