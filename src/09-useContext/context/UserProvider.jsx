import { useState } from "react";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

  // const user = {
  //   id: 123,
  //   name: 'Rodrigo Rivas',
  //   email: 'rivas@gmail.com'
  // }

  const test = () => {
    console.log(`Hola, ${user.name}`);
  }

  const [user, setUser] = useState();

  return (
    // <UserContext.Provider value={{hola: 'Mundo', user: user, test}}>
    <UserContext.Provider value={{user, test, setUser}}>
      { children }
    </UserContext.Provider>
  )
}
