import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas en el todoReducer', () => {

  const initialState = [
  {
    id: 1,
    description: 'Demo TODO',
    done: false,
  },
  {
    id: 2, 
    description: 'Todo 2',
    done: false,
  }];

  test('Debe de regresar el estado inicial', () => {

    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);

  });

  test('Debe de agregar un todo', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo Todo 2',
        done: false,
      }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(3);
    expect(newState).toContain(action.payload);
  });

  test('Debe de eliminar un todo', () => {

    const action = {
      type: '[TODO] Remove Todo',
      payload: 2
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);

  });

  test('Debe de realizar el Toggle del todo', () => {

    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].done).toBe(true)

    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);


  });

});