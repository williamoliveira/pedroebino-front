import dashboardState from './controller.js';

import entriesModule from './entries/module';
import trucksModule from './trucks/module';
import driversModule from './drivers/module';

export default angular
    .module('app.states.index', [
        entriesModule.name,
        trucksModule.name,
        driversModule.name,
    ])
    .config(config);


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state(dashboardState);
}