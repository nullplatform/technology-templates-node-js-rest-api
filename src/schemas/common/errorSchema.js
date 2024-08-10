const id = 'https://nullplatform.com/schemas/error';

const specification = Object.freeze({
  $id: id,
  title: 'Error',
  type: 'object',
  properties: {
    statusCode: { type: 'number', description: 'HTTP status code indicating the error' },
    code: { type: 'string', description: 'Unique error code for reference and categorization' },
    error: { type: 'string', description: 'Short, human-readable error type or category' },
    message: { type: 'string', description: 'Detailed error message providing additional context' },
  },
  description: 'Format for representing errors during API interactions',
  required: ['statusCode', 'error', 'message'],
});

const schema = Object.freeze({ id, specification });

export default schema;
