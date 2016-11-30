import * as presenters from "../presenters";

export default class UsersIndexController {

  /** @ngInject */
  constructor($rootScope, $scope, MessageService, usersResource) {
    this.$rootScope = $rootScope
    this.$scope = $scope
    this.MessageService = MessageService
    this.usersResource = usersResource

    this.presentRole = presenters.presentRole

    this.registerListeners()
    this.fetchUsers()
  }

  registerListeners() {
    const unsub = this.$rootScope.$on('user:created', () => this.fetchUsers())
    this.$scope.$on('$destroy', unsub)
  }

  fetchUsers() {
    return this.usersResource
      .fetchMany({paginate: false})
      .then(({items}) => this.users = items)
  }

  destroy(model) {
    this.MessageService
      .confirm('Tem certeza que deseja excluir isto?')
      .then(() => this.doDestroy(model))
  }

  doDestroy(model) {
    this.usersResource
      .deleteById(model.id)
      .then((res) => {
        console.log('deletado')
        this.fetchUsers()
      })
  }
}