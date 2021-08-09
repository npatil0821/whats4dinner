import React, { useState } from "react";
import NewIngredient from "./components/NewIngredient";
import IngredientList from "./components/IngredientList";

function App() {
  //stores an array of added ingredients
  let [addedIngredients, setAddedIngredients] = useState([]);

  //used to add new ingredients to addedIngredients
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
