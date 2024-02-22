import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
  // Route,
  // Link,
} from "react-router-dom";
import App from './App.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />),
  },
  {
    path: "/",
    element: (<App />),
  }
]);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
