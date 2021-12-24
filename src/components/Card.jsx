import React from 'react';

const Card = ({ item, id, handleClick }) => {
  const itemClass = item.state ? ' active ' + item.state : '';

  return (
    <div className={'card' + itemClass} onClick={() => handleClick(id)}>
      <div style={{ backgroundColor: item.color, width: '70%', height: '70%' }}></div>
      {/* <img src={item.img} className="" alt={item.id} /> */}
    </div>
  );
};

export default Card;
