import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  console.log('CREATE ITEM SCHEMA...');
  return knex.schema.createTable('item', function (table: Knex.CreateTableBuilder) {
    table.bigIncrements('id').primary().notNullable().unique();
    table.string('uuid', 36).notNullable().unique();
    table.string('title').notNullable();
    table.string('createdBy').notNullable();
    table.string('description');
    table.string('image_location');
    table.float('price');
    table.boolean('isDeleted').defaultTo(0);
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.string('creator_uuid', 36);
  });
}
export async function down(knex: Knex): Promise<any> {
  console.log('DROP ITME SCHEMA...');

  return knex.schema.dropTableIfExists('item');
}
