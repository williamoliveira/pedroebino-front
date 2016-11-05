import template from './template.html'
import controller from './controller.js'

import the404Module from './404/module'
import loginModule from './login/module'
import registerModule from './register/module'

export default angular
    .module('app.states.outside', [
        the404Module.name,
        registerModule.name,
        loginModule.name,
    ])
    .config(config)


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state({
      name: 'outside',
      abstract: true,
      template: template,
      controller: controller,
      controllerAs: 'vm',
      /** @ngInject */
      onEnter: (ENV) => {
        ENV.app.bodyClasses.push('bg-grey')
      },
      /** @ngInject */
      onExit:  (ENV) => {
        ENV.app.bodyClasses.pop()
      },
    })
}