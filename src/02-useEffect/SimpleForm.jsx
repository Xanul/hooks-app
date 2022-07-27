import { useEffect, useState } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'Rodrigo',
    email: 'rivas11@gmail.com',
    age: 32
  })

  const {username, email, age} = formState;

  const onInputChange = ({target}) => {
    const {name, value} = target;

    // console.log(name, value);

    setFormState({
      ...formState,
      [name]: value
    })
  }

  useEffect(() => {
    console.log('useEffect Called!');
  }, []);

  useEffect(() => {
    console.log('formState Changed!');
  }, [formState]);

  useEffect(() => {
    console.log('email Changed!');
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text" 
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input 
        type="email" 
        className="form-control mt-3"
        placeholder="rivas@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input 
        type="number" 
        className="form-control mt-3"
        placeholder="Age"
        name="age"
        value={age}
        onChange={onInputChange}
      />


    </>
  )
}
