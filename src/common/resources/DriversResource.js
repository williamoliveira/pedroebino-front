import BaseResource from "./BaseResource";

export default class DriversResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/drivers`
  }
}