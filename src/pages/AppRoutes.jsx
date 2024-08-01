import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './auth/LoginPage'
import Home from './Home'
import SignUp from './auth/SignUp'
import NotFoundPage from '../elements/NotFoundPage'
import Dashboard from '../Merchant/Dashboard'
import Deals from '../Merchant/Deals'
import Orders from '../Merchant/Orders'
import About from '../Index/About'
import Features from '../Index/Features'
import FAQ from '../Index/FAQ'
import Contact from '../Index/Contact'

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

      {/* company */}
      <Route path='/company/about' element={<About />} />
      <Route path='/features' element={<Features />} />
      <Route path='/company/faqs' element={<FAQ />} />
      <Route path='/customer-support' element={<Contact />} />

      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AppRoutes