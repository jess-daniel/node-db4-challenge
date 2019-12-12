
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { name: "pbj sandwich" }
      ]);
    });
};
