import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import useIsMobile from '../hooks/isMobile'
import AccountLayout from '../layouts/AccountLayout'
import Profile from '../pages/account/Profile'
import AccountMenu from '../pages/account/AccountMenu';
import Orders from '../pages/account/Orders'

const AccountRouter = () => {
  const isMobileLG = useIsMobile('1109px')
  const isMobileXL = useIsMobile('1289px')
  console.log('isMobileXL ='+isMobileXL)

  return (
    <Routes>
      <Route path="/" element={<AccountLayout isMobile={isMobileLG}/>}>
        {
          (isMobileLG) 
          ? <Route index element={<AccountMenu />} />
          : <Route index element={<Navigate to="orders" replace={true} />} />
        }
        <Route path="orders" element={<Orders/>} />
        <Route path="profile" element={<Profile/>} />
        {/* <Route path="profile/phone" element={<PhoneVerification/>} />
        <Route path="profile/email" element={<EmailVerification/>} />
        <Route path="offers" element={<Offers/>} />
        <Route path="offers/add" element={<AddOffer/>} />
        <Route path="purchase-history" element={<PurchaseHistory/>} />
        <Route path="sales-history" element={<SalesHistory/>} />
        <Route path="finance" element={<Finance/>} />
        <Route path="messages" element={<Messages isMobileXL={isMobileXL}/>}>
          {
            (isMobileXL) 
            ? <Route index element={<MessagesList/>} />
            : <Route index element={<Navigate to=":id" replace={true} />} />
          }
          <Route path=":id" element={<MessagesChat/>} />
          <Route path="general" element={<MessagesChat/>} />
        </Route>
        <Route path="feedback" element={<Feedback/>} />
        <Route path="feedback/add" element={<LeaveFeedback/>} />
        <Route path="callback" element={<Callback/>} />
        <Route path="callback/:id" element={<CallbackChat/>} />
        <Route path="favs" element={<SecFavorites/>} /> */}
      </Route>
    </Routes>
  )
}

export default AccountRouter