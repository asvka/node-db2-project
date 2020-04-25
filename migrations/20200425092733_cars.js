
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.integer("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
    })
  }

  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
  }