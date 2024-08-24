// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import { BrowserRouter } from 'react-router-dom'
// import './index.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import ToasterProvider from './components/providers/toaster-provider.jsx'

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//   <QueryClientProvider client={queryClient}>
//   <BrowserRouter>
//   <ToasterProvider />
//     <App />
//   </BrowserRouter>
//   <ReactQueryDevtools initialIsOpen={false} />
//   </QueryClientProvider>
//   </React.StrictMode>,
// )

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ToasterProvider from "./components/providers/toaster-provider.tsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ToasterProvider />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
