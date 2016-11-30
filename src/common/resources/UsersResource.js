import BaseResource from "./BaseResource";

export default class UsersResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/users`
  }
}