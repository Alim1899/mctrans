import React, { useState, useEffect } from "react";
import axios from "axios";

const Write = () => {
  const [serverData, setServerData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/readfromserver");
        const dataFromServer = response.data;
        console.log(response);
        setServerData(dataFromServer);
      } catch (error) {
        console.error("Error getting data", error);
      }
    };
    fetchData();
  }, []);

  return <div>{serverData.map(el=>{
    return <h1>{el.content}</h1>
  })}</div>;
};

export default Write;
