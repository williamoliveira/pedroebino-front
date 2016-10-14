import template from './template.html'

export default {
    name: 'dashboard.entries.show',
    url: 'entry/{id}',
    template: template,
    controller: controller,
    controllerAs: 'vm',
    resolve: {
        /** @ngInject */
        entry: function ($stateParams) {
            return {
                id: $stateParams.id,
                status: 'Aguardando',
                from: 'Ibirama (SC)',
                to: 'São Paulo (SP)',
                date: '10/10/2016',
                volume: 567,
                shareTruck: false
            }
        }
    }
}

/** @ngInject */
function controller($uibModalInstance, entry) {
    const vm = this

    // Attributes
    vm.entry = entry

    vm.options = [
        {
            date: '09/10/2016',
            price: 868.50
        },
        {
            date: '10/10/2016',
            price: 808.00
        },
        {
            date: '11/10/2016',
            price: 968.50
        },
    ]

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