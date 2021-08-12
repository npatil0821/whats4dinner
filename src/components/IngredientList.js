import Ingredient from "./Ingredient";

//an unordered list is returned. is returned as an Ingredient component
function IngredientList(props) {
  const ingredients = props.ingredients;
  const ingredientList = ingredients.map((ingredient) => (
    <Ingredient key={ingredient} name={ingredient} />
  ));

  return (
    <section>
      <h1>Entered Ingredients:</h1>
      <ul>{ingredientList}</ul>
    </section>
  );
}

export default IngredientList;
