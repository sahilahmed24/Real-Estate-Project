import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, address, rooms,  title, price, square,bathroom, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='image' />
    <header>
      <h1>₹{price}</h1>
      <span>🌟{rating}</span>
    </header>
    <body>
      <h2 >{title}</h2>

      <small>{address}</small>
    </body>

    <hr />
    <footer>
      <p>
        <div>Rooms {rooms}</div>
      </p>

      <p>Bathrooms: {bathroom}</p>

      <p>Area: {square}</p>
      
    </footer>
  </div>
);

export default ListItem;
