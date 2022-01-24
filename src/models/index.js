// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item } = initSchema(schema);

export {
  Item
};