const id = 'https://nullplatform.com/schemas/id';

const specification = Object.freeze({
  $id: id,
  title: 'Id',
  type: 'string',
  format: 'uuid',
  description: 'Unique identifier for the entity represented as a UUID',
});

const schema = Object.freeze({ id, specification });

export default schema;
