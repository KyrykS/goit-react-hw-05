// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../src/components/App';
// // import '';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Створіть root
root.render(<App />); 

