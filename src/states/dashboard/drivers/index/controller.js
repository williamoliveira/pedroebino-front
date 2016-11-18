export default class DriversIndexController {

  /** @ngInject */
  constructor($rootScope, $scope, MessageService, driversResource) {
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.MessageService = MessageService
    this.driversResource = driversResource

    this.registerListeners()
    this.fetchDrivers()
  }

  registerListeners() {
    const unsub = this.$rootScope.$on('driver:created', () => this.fetchDrivers())
    this.$scope.$on('$destroy', unsub)
  }

  fetchDrivers() {
    return this.driversResource
      .fetchMany({paginate: false})
      .then(({items}) => this.drivers = items)
  }

  destroy(model) {
    this.MessageService
      .confirm('Tem certeza que deseja excluir isto?')
      .then(() => this.doDestroy(model))
  }

  doDestroy(model) {
    this.driversResource
      .deleteById(model.id)
      .then((res) => {
        console.log('deletado')
        this.fetchDrivers()
      })
  }
}