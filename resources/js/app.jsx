import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import './bootstrap';

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );

    const loader = document.getElementById('app-loader');
    if (loader) {
        window.requestAnimationFrame(() => {
            window.setTimeout(() => {
                loader.classList.add('portfolio-loader--hidden');
                window.setTimeout(() => loader.remove(), 500);
            }, 550);
        });
    }
}
