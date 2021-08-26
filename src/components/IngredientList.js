import Ingredient from "./Ingredient"; //gets Ingredient component
import classes from "./IngredientList.module.css"; //gets CSS classes for IngredientList

//an unordered list is returned. is returned as an Ingredient component
function IngredientList(props) {
  const ingredients = props.ingredients;
  const ingredientList = ingredients.map((ingredient) => (
    <Ingredient
      key={ingredient}
      name={ingredient}
      onDeleteIngredient={props.onDeleteIngredient}
    />
  ));

  return (
    <section>
      <h1>Entered Ingredients:</h1>
      <ul className={classes.list}>{ingredientList}</ul>
    </section>
  );
}

export default IngredientList;
