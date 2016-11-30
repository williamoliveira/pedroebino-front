import UserShowController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.users.show', [])
  .config(config)

/** @ngInject */
function config(modalStateProvider) {

  modalStateProvider.state({
    name: 'dashboard.users.show',
    url: '/{id}',
    template,
    controller: UserShowController,
    controllerAs: 'vm',
    resolve: {
      /** @ngInject */
      user: ($stateParams, $state, usersResource) => {
        return usersResource.fetchById($state.$stateParams.id)
      }
    }
  })

}