import Knex from 'knex';
import { v4 as getUuid } from 'uuid';
export async function seed(knex: Knex): Promise<any> {
  const title = 'Title #';
  const createdBy = 'Shop';
  const description = 'Buy this';
  const image_location = '/images/image';
  const items = [];
  for (let i = 1; i < 24; i++) {
    items.push({
      title: title + 'Nr#' + `${i.toString()}`,
      uuid: getUuid(),
      createdBy: createdBy + 'Nr#' + `${i.toString()}`,
      description: description + 'Nr#' + `${i.toString()}`,
      image_location: image_location + `${i.toString()}` + '.jpg',
      price: i * 10.0,
    });
  }
  console.log('SEED ITEM TABLE');
  return knex.batchInsert('item', items);
}
