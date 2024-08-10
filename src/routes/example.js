import { exampleController } from '../controllers/index.js';
import { exampleSchema, errorSchema } from '../schemas/index.js';

const {
  query: querySchema,
  list: listSchema,
  create: createSchema,
  read: readSchema,
  update: updateSchema,
  params: paramsSchema,
} = exampleSchema;
const { specification: error } = errorSchema;
const { create, read, update, remove, list } = exampleController;

export default async (server) => {
  server.get('/example', {
    schema: {
      summary: 'List examples',
      description: 'List examples',
      tags: ['Example'],
      security: [{ bearerAuth: [] }],
      query: querySchema,
      response: {
        '2xx': listSchema,
        '4xx': error,
        '5xx': error,
      },
    },
    handler: list.bind(exampleController),
  });

  server.post('/example', {
    schema: {
      summary: 'Create an example',
      description: 'Create an example',
      tags: ['Example'],
      security: [{ bearerAuth: [] }],
      body: createSchema,
      response: {
        '2xx': readSchema,
        '4xx': error,
        '5xx': error,
      },
    },
    handler: create.bind(exampleController),
  });

  server.get('/example/:id', {
    schema: {
      summary: 'Read an example',
      description: 'Read an example',
      tags: ['Example'],
      security: [{ bearerAuth: [] }],
      params: paramsSchema,
      response: {
        '2xx': readSchema,
        '4xx': error,
        '5xx': error,
      },
    },
    handler: read.bind(exampleController),
  });

  server.patch('/example/:id', {
    schema: {
      summary: 'Update an example',
      description: 'Update an example',
      tags: ['Example'],
      security: [{ bearerAuth: [] }],
      body: updateSchema,
      response: {
        '2xx': readSchema,
        '4xx': error,
        '5xx': error,
      },
    },
    handler: update.bind(exampleController),
  });

  server.delete('/example/:id', {
    schema: {
      summary: 'Delete an example',
      description: 'Delete an example',
      tags: ['Example'],
      security: [{ bearerAuth: [] }],
      params: paramsSchema,
      response: {
        '2xx': readSchema,
        '4xx': error,
        '5xx': error,
      },
    },
    handler: remove.bind(exampleController),
  });
};
