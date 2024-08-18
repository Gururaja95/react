import React from 'react';
import './Shop.css';
import w1 from '../../assets/w1.jpg';
import w2 from '../../assets/w2.jpg';
import w3 from '../../assets/w3.jpg';

 export const Shop = () => {
  return (
    <div className='shops'>
        <div className="shop">
            <img src={w1} alt="" />
        </div>
        <div className="shop">
            <img src={w2} alt="" />
        </div>
        <div className="shop">
            <img src={w3} alt="" />
        </div>
    </div>
  );
}

export default Shop;