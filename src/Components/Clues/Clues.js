import React, {useEffect, useState} from "react";
import axios from 'axios';
/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/

const Clues = () => {
  const [responseData, setResponseData] = useState({})

  useEffect(() => {
    axios.get('https://htf-2021.calibrate.be/api/cluedo/clues', {
  auth: {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD
  }
})
    .then(results => {
      console.log(results)
      setResponseData(results.data)
    })
  }, [])

  const mapResponse = () => {
    if (Object.keys(responseData).length !== 0) {
      return (responseData.map((i) => (
          <div>
            <p>{i.id}. {i.type}: {i.title}</p>
          </div>
        ))
      )
    }
    else {
        return (<div>No Data</div>)
    }
  }
  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div>Lijst hier de kamers, wapens en verdachten op.</div>
      {mapResponse()}
    </div>
  );
};








export default Clues;
