import RequestsIndexController from "./controller.js";
import template from "./template.html";

export default angular.module('app.states.dashboard.requests.index', [])
  .config(config)

/** @ngInject */
function config($stateProvider) {
  $stateProvider.state({
    name: 'dashboard.requests',
    url: '/solicitacoes',
    template: template,
    controller: RequestsIndexController,
    controllerAs: 'vm',

    /** @ngInject */
    onEnter($rootScope)  {
      $rootScope.main.app.bodyClasses.push('light-grey-bg')
    },

    /** @ngInject */
    onExit($rootScope){
      $rootScope.main.app.bodyClasses.pop()
    }
  })
}