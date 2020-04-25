
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.integer("vin").notNull().unique()
        table.text("make").notNull()
        table.text("model").notNull()
        table.float("mileage").notNull()
        table.text("transmissionType")
        table.boolean("cleanTitle")
        table.boolean("salvage")
    })
  }

  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
  }