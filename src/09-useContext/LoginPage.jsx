import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

  const newUser = {
    id: 555,
    name: 'Xanul',
    email: 'xanul@gmail.com'
  }

  const {setUser, user, test} = useContext(UserContext);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>

      <button 
        className="btn btn-primary"
        onClick={() => setUser(newUser)}
      >
          Establecer Usuario
      </button>

    </>
  )
}