import React, {useState} from 'react';
import { HiOutlineHeart } from "react-icons/hi2";

const BtnFav = (props) => {
  const [isFav, setIsFav] = useState(false);

  return (
    <button 
      type='button' 
      onClick={()=>setIsFav(!isFav)} 
      className={(isFav) ? 'product-fav active' : 'product-fav'}
    >
      <HiOutlineHeart/>
    </button>
  );
};

export default BtnFav;