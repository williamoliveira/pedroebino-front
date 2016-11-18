import BaseResource from "./BaseResource";

export default class AgendaEntriesResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/agenda-entries`
  }
}