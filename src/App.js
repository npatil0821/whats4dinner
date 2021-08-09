import React, { useState } from "react";
import NewIngredient from "./components/NewIngredient";
import IngredientList from "./components/IngredientList";

function App() {
  let [addedIngredients, setAddedIngredients] = useState([]);

  function addIngredientHandler(newIngredient) {
    const ingredientList = addedIngredients;
    ingredientList.push(newIngredient);

    setAddedIngredients(ingredientList);
  }

  console.log(addedIngredients);

  return (
    <main>
      <NewIngredient onAddIngredient={addIngredientHandler} />
      <IngredientList ingredients={addedIngredients} />
    </main>
  );
}

export default App;
