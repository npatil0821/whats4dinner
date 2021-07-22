import { useRef } from "react";

function NewIngredient(props) {
  const ingredientRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); //prevents default HTTP request sent by HTML

    const enteredIngredient = ingredientRef.current.value;
    //gets current value of input when form is submitted

    props.onAddIngredient(enteredIngredient);
  }

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
