import React, { useState } from 'react';
import Card from './Card';

const data = [
  { id: 1, color: '#0048BA', state: '' },
  { id: 1, color: '#0048BA', state: '' },
  { id: 2, color: '#B0BF1A', state: '' },
  { id: 2, color: '#B0BF1A', state: '' },
  { id: 3, color: '#FFBF00', state: '' },
  { id: 3, color: '#FFBF00', state: '' },
  { id: 4, color: '#E52B50', state: '' },
  { id: 4, color: '#E52B50', state: '' },
  { id: 5, color: '#72A0C1', state: '' },
  { id: 5, color: '#72A0C1', state: '' },
  { id: 6, color: '#DA1884', state: '' },
  { id: 6, color: '#DA1884', state: '' },
  { id: 7, color: '#0000FF', state: '' },
  { id: 7, color: '#0000FF', state: '' },
  { id: 8, color: '#AF6E4D', state: '' },
  { id: 8, color: '#AF6E4D', state: '' },
  { id: 9, color: '#FFFF99', state: '' },
  { id: 9, color: '#FFFF99', state: '' },
  { id: 10, color: '#232B2B', state: '' },
  { id: 10, color: '#232B2B', state: '' },
  { id: 11, color: '#00FFFF', state: '' },
  { id: 11, color: '#00FFFF', state: '' },
  { id: 12, color: '#1E90FF	', state: '' },
  { id: 12, color: '#1E90FF	', state: '' },
  { id: 13, color: '#696969', state: '' },
  { id: 13, color: '#696969', state: '' },
  { id: 14, color: '#1560BD', state: '' },
  { id: 14, color: '#1560BD', state: '' },
  { id: 15, color: '#4A646C', state: '' },
  { id: 15, color: '#4A646C', state: '' },
  { id: 16, color: '#563C5C	', state: '' },
  { id: 16, color: '#563C5C	', state: '' },
  { id: 17, color: '#0072BB', state: '' },
  { id: 17, color: '#0072BB', state: '' },
  { id: 18, color: '#6F00FF	', state: '' },
  { id: 18, color: '#6F00FF	', state: '' },
].sort(() => Math.random() - 0.5);

const Cards = () => {
  const [items, setItems] = useState(data);
  const [prev, setPrev] = useState(-1);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].state = 'correct';
      items[prev].state = 'correct';
      setPrev(-1);
    } else {
      items[current].state = 'wrong';
      items[prev].state = 'wrong';
      setItems([...items]);
      setTimeout(() => {
        items[current].state = '';
        items[prev].state = '';
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id) {
    // items[id].stat = 'active';
    // setItems([...items]);
    if (prev === -1) {
      items[id].state = 'active';
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }
  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
