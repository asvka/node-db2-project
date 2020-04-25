// Update with your config settings.

module.exports = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/car-dealer.db3'
    },
    seeds: {
      directory: './data/seeds'
    }
};
