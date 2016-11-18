export default class TrucksIndexController {

  /** @ngInject */
  constructor($rootScope, $scope, MessageService, trucksResource) {
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.MessageService = MessageService
    this.trucksResource = trucksResource

    this.registerListeners()
    this.fetchTrucks()
  }

  registerListeners() {
    const unsub = this.$rootScope.$on('truck:created', () => this.fetchTrucks())
    this.$scope.$on('$destroy', unsub)
  }

  fetchTrucks() {
    return this.trucksResource
      .fetchMany({paginate: false})
      .then(({items}) => this.trucks = items)
  }

  destroy(model) {
    this.MessageService
      .confirm('Tem certeza que deseja excluir isto?')
      .then(() => this.doDestroy(model))
  }

  doDestroy(model) {
    this.trucksResource
      .deleteById(model.id)
      .then((res) => {
        console.log('deletado')
        this.fetchTrucks()
      })
  }
}