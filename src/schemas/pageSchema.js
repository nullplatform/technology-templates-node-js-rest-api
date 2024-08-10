const specification = Object.freeze({
  title: 'Page',
  type: 'object',
  properties: {
    paging: {
      type: 'object',
      properties: {
        limit: {
          type: 'integer',
          minimum: 1,
          description: 'Limits the number of results returned',
        },
        offset: {
          type: 'integer',
          minimum: 0,
          description: 'Specifies the offset for paginated results',
        },
      },
      required: ['limit', 'offset'],
    },
    results: {
      type: 'array',
      items: {},
    },
  },
  required: ['paging', 'results'],
  description:
    'Object representing pagination parameters for controlling the number and order of results',
});

const query = Object.freeze({
  type: 'object',
  properties: {
    limit: {
      type: 'string',
      minLength: 1,
      description: 'Limits the number of results returned per page',
    },
    offset: {
      type: 'string',
      minLength: 1,
      description: 'Specifies the offset for paginating through results',
    },
  },
  description: 'Object representing page query options',
  additionalProperties: false,
});

const schema = Object.freeze({ specification, query });

export default schema;
