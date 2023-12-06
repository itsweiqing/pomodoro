import React from 'react';

const Button = ({ className, onClick, icon, altText }) => {
  return (
    <button className={className} onClick={onClick}>
      <img src={icon} alt={altText} />
    </button>
  );
};

export default Button;