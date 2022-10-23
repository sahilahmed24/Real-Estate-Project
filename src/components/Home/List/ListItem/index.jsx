import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, address, rooms,  title, price, square,bathroom, deliveryFee, serviceTime, rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='Cover img' />
    <header>
      <h1>₹{price}</h1>
      <span>🌟<strong>{rating}</strong></span>
    </header>
    <body>
      <h2 >{title}</h2>
      <br/>
      <span>Address: <small>{address}</small></span>
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
