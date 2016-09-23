import templateUrl from './template.html';

export default {
    name: 'dashboard.drivers',
    url: '/motoristas',
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: 'vm'
};

/** @ngInject */
function controller(DriverService) {
    const vm = this;

    init();

    function init() {
        DriverService.getAll().then((drivers) => vm.drivers = drivers);
    }
}