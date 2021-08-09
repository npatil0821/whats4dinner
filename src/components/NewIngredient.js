import { useRef } from "react";

function NewIngredient(props) {
  const ingredientRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); //prevents default HTTP request sent by HTML

    //gets current value of input when form is submitted
    const enteredIngredient = ingredientRef.current.value;

    //passes new ingredient to function in App.js to be added
    props.onAddIngredient(enteredIngredient);
  }

  //a simple text input and submit button form is rendered
  return (
    <section>
      <h1>Enter Ingredient: </h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="ingredient">Ingredient Name: </label>
        <input type="text" required id="ingredient" ref={ingredientRef} />
        <button>Add</button>
      </form>
    </section>
  );
}

export default NewIngredient;
