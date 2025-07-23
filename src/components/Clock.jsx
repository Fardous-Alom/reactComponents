import React, { useState } from "react"

export default function Clock() {
  const currentTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currentTime);
  

  const updateTime = ()=>{
    const currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
    
  }
  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <h1>{time}</h1>
  )
  
}