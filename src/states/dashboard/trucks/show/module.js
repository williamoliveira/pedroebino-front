import state from './controller.js';

export default angular.module('app.states.dashboard.trucks.show', [])
    .config(config);


/** @ngInject */
function config(modalStateProvider) {
    modalStateProvider.state(state);
}