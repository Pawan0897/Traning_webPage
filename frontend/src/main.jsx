import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
import { BrowserRouter } from "react-router"
import Layout from './components/Layout.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const clientProvider = new QueryClient;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={clientProvider}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </QueryClientProvider>

  </StrictMode>,
)
