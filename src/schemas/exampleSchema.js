import cloneDeep from 'lodash-es/cloneDeep.js';
import merge from 'lodash-es/merge.js';
import pick from 'lodash-es/pick.js';
import omit from 'lodash-es/omit.js';
import pageSchema from './pageSchema.js';

const { query: baseQuerySchema, specification: basePageSchema } = pageSchema;

const base = Object.freeze({
  title: 'Example',
  type: 'object',
  properties: {
    id: {
      $ref: 'https://nullplatform.com/schemas/id',
    },
    name: {
      type: 'string',
      description: 'Name of the example',
    },
    description: {
      type: 'string',
      description: 'Description of the example',
    },
    tags: {
      type: 'array',
      items: {
        type: 'string',
      },
      description: 'Tags associated with the example',
    },
    data: {
      type: 'string',
      description: 'Data associated with the example',
    },
  },
  description: 'Object representing an example resource',
  additionalProperties: false,
});

const query = Object.freeze(
  merge(cloneDeep(baseQuerySchema), {
    $id: 'https://nullplatform.com/schemas/exampleQuery',
    properties: {
      id: { $ref: 'https://nullplatform.com/schemas/id' },
    },
  }),
);

const params = Object.freeze({
  $id: 'https://nullplatform.com/schemas/exampleParams',
  type: 'object',
  properties: {
    id: { $ref: 'https://nullplatform.com/schemas/id' },
  },
});

const create = Object.freeze(
  merge(cloneDeep(base), {
    $id: 'https://nullplatform.com/schemas/exampleCreate',
    properties: omit(base.properties, ['id']),
    required: ['name'],
  }),
);

const update = Object.freeze(
  merge(cloneDeep(base), {
    $id: 'https://nullplatform.com/schemas/exampleUpdate',
    properties: pick(base.properties, ['description', 'tags', 'data']),
  }),
);

const read = Object.freeze(
  merge(cloneDeep(base), {
    $id: 'https://nullplatform.com/schemas/exampleRead',
  }),
);

const list = Object.freeze(
  merge(cloneDeep(basePageSchema), {
    $id: 'https://nullplatform.com/schemas/exampleList',
    title: 'ExampleList',
    properties: {
      results: { items: { $ref: 'https://nullplatform.com/schemas/exampleRead#' } },
    },
  }),
);

const schema = Object.freeze({ query, params, create, update, read, list });
export default schema;
