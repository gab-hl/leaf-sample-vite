import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './index.css'

import AppShellLayout from './layouts/AppShellLayout.jsx'
import TemplatesShellLayout from './layouts/TemplatesShellLayout.jsx'
import Home from './pages/Home.jsx'
import Foundations from './pages/Foundations.jsx'
import Components from './pages/Components.jsx'
import Templates from './pages/Templates.jsx'
import Login from './pages/Login.jsx'
import Checkout from './pages/Checkout.jsx'
import Cart from './pages/Cart.jsx'
import Form from './pages/templates/Form.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShellLayout />}>
          <Route index element={<Home />} />
          <Route path="foundations" element={<Foundations />} />
          <Route path="components" element={<Components />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="templates" element={<Outlet />}>
            <Route index element={<Templates />} />
            <Route element={<TemplatesShellLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
