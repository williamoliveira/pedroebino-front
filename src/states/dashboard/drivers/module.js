import indexState from './controller.js';
import driverService from './driver.service.js';

import createDriverModule from './create/module';
import showDriverModule from './show/module';

export default angular
    .module('app.states.dashboard.drivers', [
        createDriverModule.name,
        showDriverModule.name,
    ])
    .config(config)
    .factory('DriverService', driverService);


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state(indexState);
}