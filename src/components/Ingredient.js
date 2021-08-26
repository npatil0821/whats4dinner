import classes from "./Ingredient.module.css"; //gets CSS classes for Ingredient

//a list item with the name of the ingredient is rendered
function Ingredient(props) {
  return (
    <li>
      {props.name}
      <button
        className={classes.deleteButton}
        onClick={() => props.onDeleteIngredient(props.name)}
      >
        Delete
      </button>
    </li>
  );
}

export default Ingredient;
