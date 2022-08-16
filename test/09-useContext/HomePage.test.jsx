import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('Pruebas en el componente <HomePage />', () => {

  const user = {
    id: 1,
    name: 'Fernando'
  }

  test('Debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{user: null}}>
        <HomePage/>
      </UserContext.Provider>
    );
    
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null')

  });

  test('Debe de mostrar el componente con el usuario', () => {

    render(
      <UserContext.Provider value={{user}}>
        <HomePage/>
      </UserContext.Provider>
    );
    
    const preTag = screen.getByLabelText('pre');
    // expect(preTag.innerHTML).toBe(JSON.stringify(user, null, 3));
    expect(preTag.innerHTML).toContain(user.name); //Al ser string se compara con el string del componente
    expect(preTag.innerHTML).toContain(user.id.toString()); // Tenemos que convertir el numero a string para que se compare

  });

})