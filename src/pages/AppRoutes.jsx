import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './auth/LoginPage'
import Home from './Home'
import SignUp from './auth/SignUp'
import NotFoundPage from '../elements/NotFoundPage'
import Dashboard from '../Merchant/Dashboard'
import Deals from '../Merchant/Deals'
import Orders from '../Merchant/Orders'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/merchant/sign-in' element={<LoginPage />} />
      <Route path='/merchant/sign-up' element={<SignUp />} />

      {/* dashboard */}
      <Route path='/merchant/dashboard' element={<Dashboard />} />
      <Route path='/merchant/deals' element={<Deals />} />
      <Route path='/merchant/orders' element={<Orders />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes