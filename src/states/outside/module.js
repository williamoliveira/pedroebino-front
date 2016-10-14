import outsideState from './controller.js'

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
    $stateProvider.state(outsideState)
}