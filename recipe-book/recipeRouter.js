const router = require("express").Router();

const Recipes = require("./recipeModel");

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      if (recipes) {
        res.status(200).json(recipes);
      } else {
        res
          .status(404)
          .json({ message: "We do not have any recipes right now" });
      }
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params;
  Recipes.getShoppingList(id)
    .then(shoppingList => {
      res.status(200).json(shoppingList);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;
  Recipes.getInstructions(id)
    .then(instruct => {
      res.status(200).json(instruct);
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;
