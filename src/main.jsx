import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import AppShellLayout from './layouts/AppShellLayout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Checkout from './pages/Checkout.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShellLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
