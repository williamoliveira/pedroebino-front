import state from './controller'

export default angular.module('app.states.outside.register', [])
    .config(config)

/** @ngInject */
function config ($stateProvider) {
    $stateProvider.state(state)
}
