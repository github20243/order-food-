import { Header } from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import { useState } from "react";
import BasketView from "./components/basket/BasletView";

const meals = [
  {
    id: "f101",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "f19",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.0,
  },
  {
    id: "f5",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 12.99,
  },
  {
    id: "f3",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];

function App() {
  const [openBasket, setOpenBasket] = useState(false);

  function basketHandler() {
    setOpenBasket((prevState) => !prevState);
  }
  return (
    <>
      <Header onOpen={basketHandler} />
      <Summary />
      <Meals meals={meals} />
      {openBasket && <BasketView onClose={basketHandler} />}
    </>
  );
}

export default App;
