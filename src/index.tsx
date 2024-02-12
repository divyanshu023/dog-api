import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';

// console.log("Hello World!");

const root = createRoot(document.getElementById('app'));
root.render(<App/>);