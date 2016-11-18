import * as presenters from "../presenters";

export default class {

  /** @ngInject */
  constructor($rootScope, $scope, MessageService, requestsResource) {
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.MessageService = MessageService
    this.requestsResource = requestsResource

    this.presentCity = presenters.presentCity
    this.presentStatus = presenters.presentStatus
    this.staticMapUrl = presenters.staticMapUrl

    this.registerListeners()
    this.fetchRequests()
  }

  registerListeners() {
    const unsubs = [
      this.$rootScope.$on('request:created', () => this.fetchRequests()),
      this.$rootScope.$on('request:updated', () => this.fetchRequests())
    ]

    this.$scope.$on('$destroy', () => unsubs.forEach((unsub) => unsub()))
  }

  fetchRequests() {
    return this.requestsResource
      .fetchMany({paginate: false, sort: "id"})
      .then(({items}) => this.requests = items)
  }

  destroy(model) {
    this.MessageService
      .confirm('Tem certeza que deseja excluir isto?')
      .then(() => this.doDestroy(model))
  }

  doDestroy(model) {
    this.requestsResource
      .deleteById(model.id)
      .then((res) => {
        console.log('deletado')
        this.fetchRequests()
      })
  }


}