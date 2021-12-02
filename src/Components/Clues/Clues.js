import React, { useEffect, useState } from "react";
import axios from "axios";
/*
   AANWIJZINGEN
   ------------
   Lijst hier de kamers, wapens en verdachten op.
*/

const Clues = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    axios
      .get("https://htf-2021.calibrate.be/api/cluedo/clues", {
        auth: {
          username: process.env.REACT_APP_USERNAME,
          password: process.env.REACT_APP_PASSWORD,
        },
      })
      .then((results) => {
        console.log(results);
        setResponseData(results.data);
      });
  }, []);

  const itemResponse = (i) => {
    return (
      <div className="item-container">
        <p className="id">{i.id}</p>
        <p className="title">
          {i.title}
        </p>
        <img src={`${process.env.REACT_APP_BASE_URL}/${i.image}`} />
      </div>
    );
  };

  const mapResponse = () => {
    if (Object.keys(responseData).length !== 0) {
      let previousType;
      return responseData.map((i) => {
        if (previousType !== i.type) {
          previousType = i.type;
          return (
            <div>
              <div className="type">{i.type}s</div>
              {itemResponse(i)}
            </div>
          );
        }
        return itemResponse(i);
      });
    } else {
      return <div>No Data</div>;
    }
  };

  return (
    <div className="full file">
      <h2>Aanwijzingen</h2>
      <div>{mapResponse()}</div>
    </div>
  );
};

export default Clues;
