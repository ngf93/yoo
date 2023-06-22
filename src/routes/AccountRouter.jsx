import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import AccountLayout from '../layouts/AccountLayout'
import Profile from '../pages/account/Profile'
import AccountMenuMobile from '../pages/account/AccountMenuMobile';
import Orders from '../pages/account/Orders'
import Edit from '../pages/account/Edit'
import Order from '../pages/account/Order'

const AccountRouter = () => {
  const isMobileLG = useIsMobile('991px');

  return (
    <Routes>
      <Route path="/" element={<AccountLayout isMobile={isMobileLG}/>}>
        {
          (isMobileLG) 
          ? <Route index element={<AccountMenuMobile/>} />
          : <Route index element={<Navigate to="orders" replace={true} />} />
        }
        <Route path="orders" element={<Orders/>} />
        <Route path="orders/:id" element={<Order/>} />
        <Route path="profile" element={<Profile/>} />
      </Route>
      <Route path="/*" element={<Edit/>} />
    </Routes>
  )
}

export default AccountRouter