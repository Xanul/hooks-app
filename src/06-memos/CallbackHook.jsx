import { useCallback, useEffect, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  
  const [counter, setCounter] = useState(10);
  
  const incrementFather = useCallback(
    (arg) => {  
      console.log('Clicked');
      console.log(arg);
      setCounter((c) => c + arg);
    },
    [],
  )

    // useEffect(() => {
    //   incrementFather();
    // }, [incrementFather])
    

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // }
  
  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increment={incrementFather}/>      

    </>
  )
}
