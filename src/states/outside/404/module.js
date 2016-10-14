import state from './controller'

export default angular.module('app.states.outside.404', [])
    .config(config)

/** @ngInject */
function config ($stateProvider) {
    $stateProvider.state(state)
}
