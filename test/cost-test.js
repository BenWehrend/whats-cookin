import { expect } from "chai";
import { calculateRecipeCost } from "../src/cost.js";
import ingredientsData from "../src/data/ingredients.js";
import { recipe1, recipe2 } from "../src/data/mockRecipe.js";

describe("calculateRecipeCost", function () {
  it("should default to zero dollars", function () {
    const totalCost = calculateRecipeCost({}, ingredientsData);
    expect(totalCost).to.be.equal(0);
  });

  it("should be able to calculate the total cost of recipe1", function () {
    const totalCost = calculateRecipeCost(recipe1, ingredientsData);
    expect(totalCost).to.be.equal(177.76);
  });

  it("should be able to calculate the total cost of recipe2", function () {
    const totalCost = calculateRecipeCost(recipe2, ingredientsData);
    expect(totalCost).to.be.equal(1715.46);
  });
});