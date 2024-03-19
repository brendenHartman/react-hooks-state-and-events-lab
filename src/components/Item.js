import React, { useState } from "react";

function Item({ name, category }) {
  const [liClass, setClass] = useState("");
  const [liText, setText] = useState('Add to Cart');

  function handleClick(){
    setClass((liClass) => {
      if(liClass === ""){
        return 'in-cart'; 
      }
      else{
        return ""; 
      }
    });
    setText((liText) => {
      if(liText === 'Add to Cart'){
        return 'Remove From Cart'; 
      }
      else{
        return 'Add to Cart'; 
      }
    });
  };

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{liText}</button>
    </li>
  );
}

export default Item;
