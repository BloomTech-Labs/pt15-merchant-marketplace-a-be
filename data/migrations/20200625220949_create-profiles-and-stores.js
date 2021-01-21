exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('okta_id').notNullable().unique().primary();
      table.string('name');
      table.string('email');
      table.string('billing_address');
      table.string('shipping_address');
      table.string('avatarUrl');
      table.boolean('merchant').defaultTo(false);
      table.timestamps(true, true);
    })
    .createTable('stores', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
      tb.string('name', 255);
      tb.string('description', 255);
      tb.string('address', 255);
      tb.string('phone_number', 255);
      tb.string('merchant_id')
        .notNullable()
        .unique()
        .references('profiles.okta_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('stores')
    .dropTableIfExists('profiles');
};
