
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, step_instructions: "Get Peanut Butter and Jelly"},
        {recipe_id: 1, step_number: 2, step_instructions: "Put on both slices of bread"},
        {recipe_id: 1, step_number: 3, step_instructions: "Eat the sandwich"}
      ]);
    });
};
