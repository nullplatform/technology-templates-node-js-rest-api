export default class ExampleService {
  constructor({ exampleRepository }) {
    this.exampleRepository = exampleRepository;
  }

  async create(data) {
    return this.exampleRepository.create(data);
  }

  async read(id) {
    return this.exampleRepository.read(id);
  }

  async update(id, data) {
    const example = await this.read(id);
    if (example) {
      await this.exampleRepository.update(id, data);
    }
    return this.read(id);
  }

  async remove(id) {
    const example = await this.read(id);
    await this.exampleRepository.remove(id);
    return example;
  }

  async list(query, options) {
    return this.exampleRepository.findAll(query, options);
  }
}
