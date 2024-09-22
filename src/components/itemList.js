import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../appFeatures/item';
import Item from './item';

const ItemList = () => {
  const filteredItems = useSelector(selectFilteredItems);

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ul>
  );
};

export default React.memo(ItemList);
