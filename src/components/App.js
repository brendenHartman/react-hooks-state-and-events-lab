import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setClass] = useState("App light");
  const [modeText, setText] = useState('Dark Mode');

  function handleTheme(){
    setClass((appClass) => {
      if(appClass === "App light"){
        return "App dark";
      }
      else{
        return "App light";
      }
    });

    setText((modeText) => {
      if(modeText === "Dark Mode"){
        return "Light Mode"
      }
      else{
        return "Dark Mode";
      }
    });
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
