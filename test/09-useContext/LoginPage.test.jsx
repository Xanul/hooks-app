import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en el componente <LoginPage/>', () => {

  test('Debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{user: null}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');

  });

  test('Debe de llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn()

    render(
      <UserContext.Provider value={{user: null, setUser: setUserMock}}>
        <LoginPage />
      </UserContext.Provider>
    );

    const loginBtn = screen.getByRole('button');
    fireEvent.click(loginBtn);

    expect(setUserMock).toHaveBeenCalledWith({"email": "xanul@gmail.com", "id": 555, "name": "Xanul"});
    

  });

});