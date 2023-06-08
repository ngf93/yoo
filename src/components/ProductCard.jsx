import React, {useState} from 'react';
import { HiOutlineShoppingBag, HiOutlineHeart } from "react-icons/hi2";
import Fish from '../assets/imgs/fish.png';
import Halal from '../assets/imgs/halal.png';
import Chicken from '../assets/imgs/chicken.png';
import Meat from '../assets/imgs/meat.png';
import Spicy from '../assets/imgs/pepper.png';
import Vegetarian from '../assets/imgs/vegetarian.png';

const ProductCard = () => {
  const [isFav, setIsFav] = useState(false);

  return (
    <div className="product">
      <div className="product-img">
        <img src="imgs/img3.png" alt="Ролл «Филадельфия»"/>
        <ul className="product-stickers">
          <li>
            <img src={Fish} alt="рыба" />
          </li>
          <li>
            <img src={Halal} alt="халяль" />
          </li>
        </ul>
        <ul className="product-tags">
          <li>
            <div className="hit">Хит!</div>
          </li>
          <li>
            <div className="new">Новинка</div>
          </li>
        </ul>
        <button 
          type='button' 
          onClick={()=>setIsFav(!isFav)} 
          className={(isFav) ? 'product-fav active' : 'product-fav'}
        >
          <HiOutlineHeart/>
        </button>
      </div>
      
      <h6>Ролл «Филадельфия»</h6>
      <p>Лосось, сливочный сыр, огурец, рис, нори</p>
      <hr />
      <div className="d-flex justify-content-between">
        <div className='gray'>300 г</div>
        <div className='d-flex'>
          <div>
            <div className='fs-12'>650 ₽</div>
            <div className='gray fs-09 text-decoration-line-through'> 650 </div>
          </div>
          <button type='button' className='btn-7 rounded-pill ms-3'>
            <HiOutlineShoppingBag className='fs-15'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;