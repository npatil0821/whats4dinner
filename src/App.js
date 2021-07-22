import NewIngredient from "./components/NewIngredient";
import IngredientList from "./components/IngredientList";

function App() {
  const ingredientList = [];

  function addIngredientHandler(newIngredient) {
    ingredientList.push(newIngredient);
  }

  return (
    <main>
      <NewIngredient onAddIngredient={addIngredientHandler} />
      <IngredientList ingredients={ingredientList} />
    </main>
  );
}

export default App;
