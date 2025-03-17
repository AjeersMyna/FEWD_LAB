import React, { useState } from "react";
import MenuClass from "./MenuClass";
import MenuFunction from "./MenuFunction";
function App() {
  const menu = {
    Burger: 50,
    Pizza: 100,
    Sandwich: 40,
    Coffee: 30,
    Tea: 20,
  };
  const [funcItem, setFuncItem] = useState(""); 
  const [classItem, setClassItem] = useState(""); 
  const [funcPrice, setFuncPrice] = useState(null); 
  const [classPrice, setClassPrice] = useState(null);
  const handleFuncSubmit = (e) => {
    e.preventDefault();
    checkPrice(funcItem, setFuncPrice);
  };

  // 📌 Handle Class Component Input
  const handleClassSubmit = (e) => {
    e.preventDefault();
    checkPrice(classItem, setClassPrice);
  };

  // 📌 Function to check menu price
  const checkPrice = (item, setPrice) => {
    let formattedItem = item.trim();
    formattedItem = formattedItem.charAt(0).toUpperCase() + formattedItem.slice(1).toLowerCase();

    if (menu[formattedItem] !== undefined) {
      setPrice(`₹${menu[formattedItem]}`); // Set price if found
    } else {
      setPrice("Not Available"); // If item not found
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Canteen Management App</h1>

      {/* 📌 Functional Component Input */}
      <form onSubmit={handleFuncSubmit}>
        <input
          type="text"
          placeholder="Enter item for Functional Component"
          value={funcItem}
          onChange={(e) => setFuncItem(e.target.value)}
          required
        />
        <button type="submit">Get Price</button>
      </form>

      {/* 📌 Class Component Input */}
      <form onSubmit={handleClassSubmit} style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter item for Class Component"
          value={classItem}
          onChange={(e) => setClassItem(e.target.value)}
          required
        />
        <button type="submit">Get Price</button>
      </form>

      {/* 📌 Display Components */}
      <MenuFunction item={funcItem} price={funcPrice} />
      <MenuClass item={classItem} price={classPrice} />
    </div>
  );
}

export default App;
