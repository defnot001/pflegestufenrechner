import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HomePage } from './routes/index.tsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './routes/error.tsx';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
  ],
  {
    basename: '/pflegestufenrechner',
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
