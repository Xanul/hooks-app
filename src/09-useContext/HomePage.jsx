import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const HomePage = () => {

  const {user} = useContext(UserContext)

  return (
    <>
      <h1>Home Page</h1>
      <hr />

      <h4>{user?.name}</h4>
      <h4>{user?.age}</h4>

      <pre>
        { JSON.stringify(user) }
      </pre>

      <button className="btn btn-primary">
        Set User
      </button>

    </>
  )
}