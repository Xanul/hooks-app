import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => {

  test('Debe de retornar los valores por defecto', () => {

    const { result } = renderHook( () => useCounter() );
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('Debe de generar el counter con el valor de 100', () => {

    const { result } = renderHook( () => useCounter(100) );
    expect(result.current.counter).toBe(100);
  });

  test('Debe de incrementar el contador', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { counter, increment, decrement, reset } = result.current;  
    
    act( () => {
      increment();
      increment(2);
    } );
    
    expect( result.current.counter ).toBe(103);

  });

  test('Debe de decrementar el contador', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { counter, decrement } = result.current;  
    
    act( () => {
      decrement();
      decrement();
    } );
    
    expect( result.current.counter ).toBe(98);

  });

  test('Debe de resetear el contrador', () => {

    const { result } = renderHook( () => useCounter(100) );
    const { counter, decrement, reset } = result.current;  
    
    act( () => {
      decrement(2);
      reset();
    } );
    
    expect( result.current.counter ).toBe(100);

  })

})
