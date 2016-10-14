import indexState from './controller.js'

import createEntryModule from './create/module'
import showEntryModule from './show/module'

export default angular
    .module('app.states.dashboard.entries', [
        createEntryModule.name,
        showEntryModule.name,
    ])
    .config(config)


/** @ngInject */
function config($stateProvider) {
    $stateProvider.state(indexState)
}