import React from "react";
import { useState, useEffect } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    dataObtener();
  }, []);
  const dataObtener = async () => {

    const dataResolt = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10`
    );
    const dataFinaly = await dataResolt.json();
    setUsers(dataFinaly.results);
    
    
  };

//  console.log(users);
  return (
    
    <div>
      <ul>
      {users.map((item) => (
        <div key={item.name}>
        <h2 >{item.name}</h2>
        </div>
      )
      )}
      </ul>
      
    </div>
  );

};

export default Api;

