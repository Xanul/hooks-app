import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';
import './index.css';

// import { TodoApp } from './08-useReducer/TodoApp';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer'
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';




import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      <MultipleCustomHooks />
    {/* </React.StrictMode> */}
  </BrowserRouter>  
);
