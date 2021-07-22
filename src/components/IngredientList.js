import Ingredient from "./Ingredient";

function IngredientList(props) {
  return (
    <section>
      <h1>Entered Ingredients:</h1>
      <ul>
        {props.ingredients.map((ingredient) => (
          <Ingredient key={ingredient} name={ingredient} />
        ))}
      </ul>
    </section>
  );
}

export default IngredientList;
