
exports.up = function(knex) {
  return knex.schema
    .createTable('products', (tb) => {
      tb.increments();
      tb.string('name').notNullable();
      tb.integer('stock').notNullable().defaultTo(0);
      tb.double('price').notNullable().defaultTo(0);
      tb.string('description');
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('image_url');
      tb.string('store_id')
        .notNullable()
        .references('stores.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('categories', (tb) => {
      tb.increments();
      tb.string('name').notNullable().unique();
    })
    .createTable('tags', (tb) => {
      tb.increments();
      tb.string('name').notNullable().unique();
    })
    .createTable('product_categories', (tb) => {
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('products.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.integer('category_id')
        .unsigned()
        .notNullable()
        .references('categories.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.primary(['product_id', 'category_id']);
    })
    .createTable('product_tags', (tb) => {
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('products.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('tags.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tb.primary(['product_id', 'tag_id']);
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('product_tags')
    .dropTableIfExists('product_categories')
    .dropTableIfExists('tags')
    .dropTableIfExists('categories')
    .dropTableIfExists('products');
};
