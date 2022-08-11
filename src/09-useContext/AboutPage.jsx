import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {

  const newUser2 = {
    name: 'Juan',
    id: 1222,
    email: 'juan@gmail.com'
  }

  const algo = useContext(UserContext);
  console.log(algo);

  return (
    <>
      <h1>AboutPage</h1>
      <hr />

      <button
        className="btn btn-danger"
        onClick={() => algo.setUser(newUser2)}
      >
        Change User
      </button>

    </>
  )
}