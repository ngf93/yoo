import React from 'react';
import { HiOutlineGift } from "react-icons/hi2";

const Gifts = () => {
  return (
    <ul className='gifts'>
      <li className='gifts-item'>
        <div className='gifts-item-bar'></div>
        <div className='gifts-item-icon'><HiOutlineGift/></div>
      </li>
      <li className='gifts-item'>
        <div className='gifts-item-bar'></div>
        <div className='gifts-item-icon'><HiOutlineGift/></div>
      </li>
      <li className='gifts-item'>
        <div className='gifts-item-bar'></div>
        <div className='gifts-item-icon'><HiOutlineGift/></div>
      </li>
    </ul>
  );
};

export default Gifts;