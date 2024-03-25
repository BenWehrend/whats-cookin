//Here is an example demonstrating logic separated that can be imported into the scripts and test files. Feel free to update this later!
import ingredientsData from "./data/ingredients";

export const findRecipeIngredients = (recipe) => {
  return recipe.ingredients.reduce((list, recipeIngredient) => {
    list.push(findIngredient(recipeIngredient.id).name);
    return list;
  }, []);
};

export const findRecipeInstructions = (recipe) => {
  return recipe.instructions
    .sort((a, b) => a.number - b.number)
    .map((step) => step.instruction);
};

export function findIngredient(ingredientID) {
  return ingredientsData.find(
    (ingredientData) => ingredientData.id == ingredientID
  );
}