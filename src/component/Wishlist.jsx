import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';


const WishlistPage = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useContext(AppContext);

  return (
    <div>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <>
          <button onClick={clearWishlist}>Clear Wishlist</button>
          <ul>
            {wishlist.map(item => (
              <li key={item.productId}>
                <h4>{item.title}</h4>
                <img src={item.imgsrc} alt={item.title} width="100" />
                <p>Price: {item.price}</p>
                <button onClick={() => removeFromWishlist(item.productId)}>Remove</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WishlistPage;
