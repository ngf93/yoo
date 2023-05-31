import React from 'react';
import {Link} from 'react-router-dom';

const ProductCardMini = () => {
  return (
    <figure className="product-card-mini">
      <Link to='/'><img src="imgs/img3.png" alt="Ролл «Филадельфия»" /></Link>
      <figcaption>
        <div>
          <h6><Link to='/'>Ролл «Филадельфия»</Link></h6>
          <p className='gray'>240 г</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <p className='fw-6'>340 ₽</p>
          <button type='button' className='btn-3'>В корзину</button>
        </div>
      </figcaption>
    </figure>
  );
};

export default ProductCardMini;