const db = require("../data/dbConfig");

const getRecipes = () => {
  return db("recipes");
};

const getShoppingList = id => {
  return db("ingredients as i")
    .select("r.name as recipe", "i.name as ingredients", "ri.quantity")
    .join("recipe_ingredients as ri", "i.id", "ri.ingredient_id")
    .join("recipes as r", "ri.recipe_id", "r.id")
    .where("recipe_id", id);
};

const getInstructions = id => {
  return db("instructions as i")
    .select(
      "i.id",
      "r.name as recipe",
      "i.step_number as step",
      "i.step_instructions as instructions"
    )
    .join("recipes as r", "i.recipe_id", "r.id")
    .where("r.id", id)
    .orderBy("i.step_number");
};

// Possibly sql code for /:id/recipes
// select distinct r.id
// , r.name
// from recipes as r
// join recipe_ingredients as ri
//     on r.id = ri.recipe_id
// where r.id = 1
// having ri.ingredient_id in r.id

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
