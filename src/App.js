import React, { useState } from "react";
import NewIngredient from "./components/NewIngredient";
import IngredientList from "./components/IngredientList";

function App() {
  //stores an array of added ingredients
  let [addedIngredients, setAddedIngredients] = useState([]);

  //adds new ingredients to addedIngredients
  function addIngredientHandler(newIngredient) {
    if (!addedIngredients.includes(newIngredient)) {
      setAddedIngredients([...addedIngredients, newIngredient]);
    }
  }

  //deletes an ingredient
  function deleteIngredientHandler(ingredient) {
    //uses filter to return new array of everything !== ingredient
    setAddedIngredients(addedIngredients.filter((item) => item !== ingredient));
  }

  return (
    <main>
      <NewIngredient onAddIngredient={addIngredientHandler} />
      <IngredientList
        ingredients={addedIngredients}
        onDeleteIngredient={deleteIngredientHandler}
      />
    </main>
  );
}

export default App;
