import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import useIsMobile from '../hooks/isMobile';
import AccountLayout from '../layouts/AccountLayout';
import Profile from '../pages/account/Profile';
import AccountMenuMobile from '../pages/account/AccountMenuMobile';
import Orders from '../pages/account/Orders';
import Order from '../pages/account/Order';
import Settings from '../pages/account/Settings';
import Addresses from '../pages/account/Addresses';
import AddAddress from '../pages/account/AddAddress';
import EditAddress from '../pages/account/EditAddress';
import Bonuses from '../pages/account/Bonuses';
import Offers from '../pages/account/Offers';

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
        <Route path="addresses" element={<Addresses/>} />
        <Route path="addresses/add" element={<AddAddress/>} />
        <Route path="addresses/edit" element={<EditAddress/>} />
        <Route path="bonus" element={<Bonuses/>} />
        <Route path="offers" element={<Offers/>} />
      </Route>
      <Route path="settings" element={<Settings/>} />
      <Route path="/*" element={<Navigate to="orders" replace={true} />} />
    </Routes>
  )
}

export default AccountRouter