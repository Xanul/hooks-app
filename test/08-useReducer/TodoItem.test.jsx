import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebnas en el componente <TodoItem />', () => {

  const todo = {
    id: 1,
    description: 'Piedra de la memoria',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test('Debe de mostrar el Todo pendiente de completar', () => {

    render( <TodoItem 
              todo={todo} 
              onToggleTodo={onToggleTodoMock} 
              onDeleteTodo={onDeleteTodoMock}
            /> );

    const liElement = screen.getByRole('listitem');
    // console.log(liElement.innerHTML);
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
    
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    // screen.debug();

  });

  test('Debe de mostrar el Todo completado', () => {

    todo.done = true;

    render( <TodoItem 
              todo={todo} 
              onToggleTodo={onToggleTodoMock} 
              onDeleteTodo={onDeleteTodoMock}
            /> );

    
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');

  });

  test('Span debe de llamar el ToggleTodo cuando se hace click', () => {

    render( <TodoItem 
              todo={todo} 
              onToggleTodo={onToggleTodoMock} 
              onDeleteTodo={onDeleteTodoMock}
            /> );

    
    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );

  });

  test('El boton debe de llamar el deleteTodo', () => {

    render( <TodoItem 
              todo={todo} 
              onToggleTodo={onToggleTodoMock} 
              onDeleteTodo={onDeleteTodoMock}
            /> );

    
    const deleteBtn = screen.getByRole('button', {name: 'Delete'});
    fireEvent.click(deleteBtn);

    expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );

  });

});