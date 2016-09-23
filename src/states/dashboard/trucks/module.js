import indexState from './controller.js';
import truckService from './truck.service.js';

import createTruckModule from './create/module';
import showTruckModule from './show/module';

export default angular
    .module('app.states.dashboard.trucks', [
        createTruckModule.name,
        showTruckModule.name,
    ])
    .config(config)
    .factory('TruckService', truckService);


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state(indexState);
}