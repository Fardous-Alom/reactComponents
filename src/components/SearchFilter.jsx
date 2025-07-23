import React, { useState } from "react";
import foodData from "../data/foods.json";

export default function Search() {
  const [store, setStore] = useState(foodData);
  const [data, setData] = useState("");
  const getData = (e)=> {
    setData(e.target.value);
  }
  let filterOut = store.filter((currentValue) => {
    return (
      currentValue.name.toLowerCase().includes(data) ||
      currentValue.origin.toLowerCase().includes(data) ||
      currentValue.type.toLowerCase().includes(data)
    );
  })
  return (
    <div>
      <input type="text" placeholder="Search food" onChange={getData}/>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "10px",
          }}
        >
          <p>Name</p>
          <p>Origin</p>
          <p>Spicy</p>
          <p>Type</p>
          <p>Rating</p>
        </div>
        {filterOut.map((food) => (
          <div
            key={food.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "10px",
            }}
          >
            <p>{food.name}</p>
            <p>{food.origin}</p>
            <p>{food.isSpicy ? "🔥 Spicy" : "❄️ Not Spicy"}</p>
            <p>{food.type}</p>
            <p>⭐ {food.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
