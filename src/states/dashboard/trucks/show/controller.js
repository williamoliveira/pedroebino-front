import template from './template.html'

export default {
    name: 'dashboard.trucks.show',
    url: '/truck/{id}',
    template: template,
    controller: controller,
    controllerAs: 'vm',
    resolve: {
        /** @ngInject */
        truck: ($stateParams, $state, TruckService) => {
            console.log($state.$stateParams)
            return TruckService.getById($state.$stateParams.id)
        }
    }
}

/** @ngInject */
function controller($uibModalInstance, truck) {
    const vm = this

    // Attributes
    vm.truck = truck

    // Methods assigments
    vm.success = success
    vm.dismiss = dismiss
    vm.submit = submit


    // Method implementations

    function submit(model) {

    }

    function success(result) {
        $uibModalInstance.close(result)
    }

    function dismiss(reason) {
        $uibModalInstance.dismiss(reason)
    }
}