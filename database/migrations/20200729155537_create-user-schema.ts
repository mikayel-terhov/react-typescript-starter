import Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  console.log('CREATE USER SCHEMA...');

  return knex.schema.createTable('user', function (table: Knex.CreateTableBuilder) {
    table.bigIncrements('id').primary().notNullable().unique();
    table.string('uuid', 36).notNullable().unique();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('profilePic').nullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}
export async function down(knex: Knex): Promise<any> {
  console.log('DROP USER SCHEMA...');

  return knex.schema.dropTableIfExists('user');
}
