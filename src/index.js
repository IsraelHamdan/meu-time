import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <QueryClientProvider>
            
       </QueryClientProvider>
       <App/>
    </React.StrictMode>

);

