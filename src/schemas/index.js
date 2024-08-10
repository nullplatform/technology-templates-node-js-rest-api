import { JsonSchema } from '@nullplatform/json-schema';
import errorSchema from './common/errorSchema.js';
import idSchema from './common/idSchema.js';
import exampleSchema from './exampleSchema.js';

const commonSchemas = [idSchema, errorSchema];
const modelSchemas = [exampleSchema];

commonSchemas.forEach((schema) => JsonSchema.addSchema(schema.specification));
modelSchemas.forEach((schema) => {
  JsonSchema.addSchema(schema.query);
  JsonSchema.addSchema(schema.params);
  JsonSchema.addSchema(schema.create);
  JsonSchema.addSchema(schema.update);
  JsonSchema.addSchema(schema.read);
  JsonSchema.addSchema(schema.list);
});

export { idSchema, errorSchema, exampleSchema };
