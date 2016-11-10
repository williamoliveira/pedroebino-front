
export default class {
  
  /** @ngInject */
  constructor($rootScope, $scope, MessageService, RequestsResource){
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.MessageService = MessageService
    this.RequestsResource = RequestsResource
    
    this.registerListeners()
    this.fetchRequests()
  }
  
  registerListeners() {
    const unsub = this.$rootScope.$on('request:created', () => this.fetchRequests())
    this.$scope.$on('$destroy', unsub)
  }
  
  fetchRequests() {
    return this.RequestsResource
      .fetchMany({paginate: false})
      .then(({ items }) => this.requests = items)
  }
  
  destroy(model){
    this.MessageService
      .confirm('Tem certeza que deseja excluir isto?')
      .then(() => this.doDestroy(model))
  }
  
  doDestroy(model){
    this.RequestsResource
      .deleteById(model.id)
      .then((res) => {
        console.log('deletado')
        this.fetchRequests()
      })
  }
  
  presentStatus(status){
    const map = {
      pending: "Aberto",
    }
    
    return map.hasOwnProperty(status) ? map[status] : status
  }
  
  presentCity(city){
    return `${city.name} (${city.state.initials})`
  }
  
}