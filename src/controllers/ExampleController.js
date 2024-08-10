import BaseController from './BaseController.js';

export default class ExampleController extends BaseController {
  constructor({ authorizationService, exampleService }) {
    super({ authorizationService });
    this.exampleService = exampleService;
  }

  async create({ body }) {
    return this.exampleService.create(body);
  }

  async read({ params: { id } }, reply) {
    return this.#exists(id, reply);
  }

  async update({ params: { id }, body }, reply) {
    await this.#exists(id, reply);
    return this.exampleService.update(id, body);
  }

  async remove({ params: { id } }, reply) {
    await this.#exists(id, reply);
    return this.exampleService.remove(id);
  }

  async list({ query: { id, limit, offset } }) {
    return this.exampleService.list({ id }, { limit, offset });
  }

  async #exists(id, reply) {
    const example = await this.exampleService.read(id);
    if (!example) {
      reply.notFound(`Example ${id} not found`);
      return undefined;
    }
    return example;
  }
}
