import React from 'react'
import {createHashRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import AppLayout from '../layouts/AppLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Contacts from '../pages/Contacts'
import Promo from '../pages/Promo'
import OfferPage from '../pages/OfferPage'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />}/>
      <Route path="promo" element={<Promo/>} />
      <Route path="promo/:id" element={<OfferPage/>} />
      <Route path="contacts" element={<Contacts/>} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

const AppRouter = () => {
  return <RouterProvider router={router} />
};

export default AppRouter;