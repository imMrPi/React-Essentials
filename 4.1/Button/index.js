import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassButton from './components/Button/ClassBaseButton';
import FunctionalButton from './components/Button/FunctionalButton';

const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);
root.render(<FunctionalButton/>);
