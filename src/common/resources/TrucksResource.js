import BaseResource from "./BaseResource";

export default class TrucksResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/trucks`
  }
}