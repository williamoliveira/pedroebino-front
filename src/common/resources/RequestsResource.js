import BaseResource from "./BaseResource";

export default class RequestsResource extends BaseResource {

  constructor($http, ENV) {
    super($http)

    this.endpoint = `${ENV.api.baseUrl}/requests`
  }

  chooseProposal(request, proposal) {
    return this.chooseProposalByIds(request.id, proposal.id)
  }

  chooseProposalByIds(requestId, proposalId) {
    const data = {
      id: proposalId
    }

    return this.$http
      .post(`${this.getEndpoint()}/${requestId}/choose-proposal`, data)
      .then(this._getData)
  }

  cancelRequest(request) {
    return this.cancelRequestById(request.id)
  }

  cancelRequestById(requestId) {
    return this.$http
      .post(`${this.getEndpoint()}/${requestId}/cancel`)
      .then(this._getData)
  }
}