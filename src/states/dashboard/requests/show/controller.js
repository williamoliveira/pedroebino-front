import * as presenters from "../presenters";

export default class {

  /** @ngInject */
  constructor($rootScope, $uibModalInstance, requestsResource, request) {
    this.$uibModalInstance = $uibModalInstance
    this.$rootScope = $rootScope
    this.request = request
    this.requestsResource = requestsResource

    this.presentCity = presenters.presentCity
    this.presentStatus = presenters.presentStatus
    this.staticMapUrl = presenters.staticMapUrl
  }

  selectProposal(request, proposal) {
    return this.requestsResource
      .chooseProposal(request, proposal)
      .then((newRequest) => this.requestUpdated(newRequest))
  }

  cancelRequest(request) {
    return this.requestsResource
      .cancelRequest(request)
      .then((newRequest) => this.requestUpdated(newRequest))
  }

  success(result) {
    this.$uibModalInstance.close(result)
  }

  dismiss(reason) {
    this.$uibModalInstance.dismiss(reason)
  }

  requestUpdated(request) {
    this.request = {...this.request, ...request}
    this.$rootScope.$emit('request:updated', {request})
  }

  googleMapsUrl(request){
    return `https://www.google.com.br/maps/dir/${request.from.name},+${request.from.state.initials}/${request.to.name},+${request.to.state.initials}`
  }
}
