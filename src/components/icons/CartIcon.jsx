// src/components/icons/CartIcon.jsx

import React from 'react';

function CartIcon({ size = 24, color = '#999' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 18C6.17 18 5.5 18.67 5.5 19.5C5.5 20.33 6.17 21 7 21C7.83 21 8.5 20.33 8.5 19.5C8.5 18.67 7.83 18 7 18ZM17 18C16.17 18 15.5 18.67 15.5 19.5C15.5 20.33 16.17 21 17 21C17.83 21 18.5 20.33 18.5 19.5C18.5 18.67 17.83 18 17 18ZM6.2 4H4V6H5.2L7.6 13.59C7.77 14.11 8.26 14.5 8.8 14.5H18.5C19.05 14.5 19.55 14.09 19.69 13.55L21.5 7H7.12L6.2 4Z"/>
    </svg>
  );
}

export default CartIcon;
