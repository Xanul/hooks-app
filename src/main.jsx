import React from 'react';
import ReactDOM from 'react-dom/client';
import { Memorize } from './06-memos/Memorize';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FocusScreen } from './04-useRef/FocusScreen';



import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Memorize />
  // </React.StrictMode>
);
