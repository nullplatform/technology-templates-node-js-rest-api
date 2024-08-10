import { SequelizeRepository } from '@nullplatform/relational-database';

export default class ExampleRepository extends SequelizeRepository {
  constructor(model) {
    super(model);
    this.addAllowInQuery('name');
  }
}
