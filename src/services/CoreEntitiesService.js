export default class CoreEntitiesService {
  constructor({ httpClient }) {
    this.httpClient = httpClient;
  }

  async getApplicationById(id) {
    return this.httpClient.get({ url: `application/${id}` });
  }
}
