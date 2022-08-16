import { useContext } from "react";
import { UserContext } from "./context/UserContext";


export const HomePage = () => {

  const {user, hola, test} = useContext(UserContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <h4>Bienvenido, {user?.name}</h4>
      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>

    </>
  )
}