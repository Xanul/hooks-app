import { useState } from "react"


export const useCounter = (initialValue = 1) => {
  
  const [counter, setCounter] = useState(initialValue)

  const increment = (value = 1) => {
    console.log(value)
    setCounter(counter + 1);
  }

  const decrement = (value = 1) => {
    // if (counter === 0) return;
    setCounter(counter - 1);
  }

  const reset = () => {
    setCounter(initialValue);
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }

}