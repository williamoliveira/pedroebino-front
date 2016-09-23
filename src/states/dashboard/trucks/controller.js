import templateUrl from './template.html';

export default {
    name: 'dashboard.trucks',
    url: '/caminhoes',
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: 'vm'
};

/** @ngInject */
function controller(TruckService) {
    const vm = this;

    init();

    function init() {
        TruckService.getAll().then((trucks) => vm.trucks = trucks);
    }
}