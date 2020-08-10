import Knex from 'knex';
import { getUuid } from 'toolkit-helper';
export async function seed(knex: Knex): Promise<any> {
  const emailValue = 'user@gmail.com';
  const passwordValue = 'pass';
  const uuid = getUuid();

  console.log('SEED USERS');
  return knex('user').insert({
    uuid: uuid,
    email: emailValue,
    password: passwordValue,
  });
}
