import BaseResource from "./BaseResource";

export default class ProposalssResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/proposals`
  }
}