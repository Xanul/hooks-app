import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Rodrigo',
    email: 'rivas11@gmail.com'
  });

  const {username, email} = formState;

  const onInputChange = (eve) => {
    const {target} = eve;
    const {name, value} = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  useEffect(()=> {
    // console.log('useEffect called!');
  },[]);

  useEffect(()=> {
    // console.log('formState changed!');
  },[formState]);

  useEffect(()=> {
    // console.log('email changed!');
    // console.log(email);
  },[email]);


  

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
      type="text" 
      className="form-control mt-3"
      placeholder="Username"
      name="username"
      value={username}
      onChange={onInputChange}
      />

      <input 
      type="email" 
      className="form-control mt-3"
      placeholder="Email"
      name="email"
      value={email}
      onChange={onInputChange}
      />

      {
        (username === 'Rodrigo2') && <Message />
      }

    </>
  )
}
