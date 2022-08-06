import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   name: 'Rodrigo',
//   age: 32,
//   smart: true
// }

export const UserProvider = ({children}) => {

  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  )
}
