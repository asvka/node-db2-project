
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    { vin: "1111", make: "Honda", model: "Civic", mileage: 100000.75, transmissionType: "automatic", cleanTitle: true, salvage: false },
    { vin: "2222", make: "Toyota", model: "Rav4", mileage: 200000.75, transmissionType: "manual", cleanTitle: true, salvage: false },
    { vin: "3333", make: "Acura", model: "Integra", mileage: 5555555.55, transmissionType: "manual" },
    { vin: "4444", make: "Ford", model: "Bronco", mileage: 5, transmissionType: "automatic", cleanTitle: false },
    { vin: "5555", make: "Chevrolet", model: "Silverado", mileage: 20.5, transmissionType: "manual", cleanTitle: true, salvage: false },
  ]);
};
