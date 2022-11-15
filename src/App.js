import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [price, setPrice] = useState(0)
  const [lst, setLst] = useState([])


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="flex-grid">
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <li  key={index}>
          <BakeryItem product={item} price={price} setPrice={setPrice} lst={lst} setLst={setLst}></BakeryItem>
          </li>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        <h3>PRICE: {Math.round(price*100) / 100}</h3>
        {/* TODO: render a list of items in the cart */}
        <h3>Items:</h3>
        {lst.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
          // <p>Bakery Item {index}</p> // replace with BakeryItem component
          <li key={index}>
          {item}
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
