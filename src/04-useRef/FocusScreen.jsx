import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef();
  const secondRef = useRef();
  
  const onClickBtn = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
    secondRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef } 
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2" 
      />
      <input 
        ref={ secondRef }
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2" 
      />
      <input 
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2" 
      />
      <input 
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2" 
      />

      <button 
        className="btn btn-primary mt-2 mt-2"
        onClick={onClickBtn}
      >
        Set Focus
      </button>

    </>
  )
}
