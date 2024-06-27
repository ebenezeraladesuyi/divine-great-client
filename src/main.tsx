import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import IsLoading from './pages/isLoading/IsLoading'
import { RouterProvider } from 'react-router-dom'
import { element } from './router/Router'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <HelmetProvider>
      <Suspense fallback={<IsLoading />}>
        <RouterProvider router={element} />
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>,
)
