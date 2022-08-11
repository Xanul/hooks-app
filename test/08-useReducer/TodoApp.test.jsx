import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en el componente <TodoApp />', () => {

  useTodos.mockReturnValue({
    todos: [
      {id: 1, description: 'Conseguir piedra del infinito', done: false},
      {id: 2, description: 'Conseguir piedra de la mente', done: true}
    ], 
    todosCount: 2, 
    pendingTodosCount: 1, 
    handleNewTodo: jest.fn(), 
    handleDeleteTodo: jest.fn(), 
    handleToggleTodo: jest.fn(),
  });

  test('Debe de mostrar el componente correctamente', () => {

    render(<TodoApp/>);

    // screen.debug();

    expect(screen.getByText('Conseguir piedra del infinito')).toBeTruthy();
    expect(screen.getByText('Conseguir piedra de la mente')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();
    console.log(screen.getByRole('textbox').placeholder);
    

  });

});