var knex = require("knex-ts")({
    client: 'pg',
    connection: process.env.DATABASE_URL
});