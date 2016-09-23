import templateUrl from './template.html';

export default {
    name: 'dashboard.drivers.show',
    url: '/driver/{id}',
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: 'vm',
    resolve: {
        /** @ngInject */
        driver: ($stateParams, $state, DriverService) => {
            console.log($state.$stateParams);
            return DriverService.getById($state.$stateParams.id)
        }
    }
};

/** @ngInject */
function controller($uibModalInstance, driver) {
    const vm = this;

    // Attributes
    vm.driver = driver;

    // Methods assigments
    vm.success = success;
    vm.dismiss = dismiss;
    vm.submit = submit;


    // Method implementations

    function submit(model) {

    }

    function success(result) {
        $uibModalInstance.close(result);
    }

    function dismiss(reason) {
        $uibModalInstance.dismiss(reason);
    }
}