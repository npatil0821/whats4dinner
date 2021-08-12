import React, { useState } from "react";
import NewIngredient from "./components/NewIngredient";
import IngredientList from "./components/IngredientList";

function App() {
  //stores an array of added ingredients
  let [addedIngredients, setAddedIngredients] = useState([]);

  //adds new ingredients to addedIngredients
  function addIngredientHandler(newIngredient) {
    setAddedIngredients([...addedIngredients, newIngredient]);
  }

  return (
    <main>
      <NewIngredient onAddIngredient={addIngredientHandler} />
      <IngredientList ingredients={addedIngredients} />
    </main>
  );
}

export default App;
