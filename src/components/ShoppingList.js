import React, { useState } from "react";
import Item from "./Item";
import { getAllByLabelText } from "@testing-library/react";

function ShoppingList({ items }) {
  const [selectedCategory, setCategory] = useState('All');

  function handleChange(event){
    setCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory !== 'All' ? items.filter((item) => item.category === selectedCategory).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )) : items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
