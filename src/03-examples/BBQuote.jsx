import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const BBQuote = (props) => {
  
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width: 0, height: 0});

  useLayoutEffect(() => {
    
    // console.log(pRef.current.getBoundingClientRect().width);

    const {width, height} =  pRef.current.getBoundingClientRect();
    setBoxSize({height, width});

  }, [props.quote])


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p 
          className="mb-1"
          ref={pRef}
        >{props.quote}</p>
        <footer className="blockquote-footer mt-1">{props.author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>

    </>
    
  )
}
