exports.up = function(knex) {
    return knex.schema
        .createTable("recipes", tbl => {
            tbl.increments();

            tbl.string("name", 255)
                .notNullable()
                .unique();
        })
        .createTable("instructions", tbl => {
            tbl.increments();

            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            
            tbl.integer("step_number")
                .unsigned()
                .notNullable();
            
            tbl.string("step_instructions", 255)
                .notNullable();
        })
        .createTable("ingredients", tbl => {
            tbl.increments();

            tbl.string("name", 255)
                .notNullable()
                .unique();
        })
        .createTable("recipe_ingredients", tbl => {
            tbl.primary(["recipe_id", "ingredient_id"]);

            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            
            tbl.float("quantity")
                .unsigned()
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("instructions")
        .dropTableIfExists("recipes");
};
