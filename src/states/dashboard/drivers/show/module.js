import DriverShowController from './controller.js'
import template from './template.html'

export default angular.module('app.states.dashboard.drivers.show', [])
    .config(config)


/** @ngInject */
function config(modalStateProvider) {

    modalStateProvider.state({
        name: 'dashboard.drivers.show',
        url: '/driver/{id}',
        template,
        controller: DriverShowController,
        controllerAs: 'vm',
        resolve: {
            /** @ngInject */
            driver: ($stateParams, $state, DriversResource) => {
                return DriversResource.fetchById($state.$stateParams.id)
            }
        }
    })

}