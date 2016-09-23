import templateUrl from './template.html';

export default {
    name: 'dashboard.trucks.create',
    url: '/new',
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: 'vm'
};

/** @ngInject */
function controller($uibModalInstance, $state) {
    const vm = this;

    // Attributes
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
    ];

    // Methods assigments
    vm.success = success;
    vm.dismiss = dismiss;
    vm.submit = submit;

    // Method implementations

    function submit(model) {
        if (!vm.thisForm.$valid) {
            return console.error('Existem erros no formulário', 'Erro de validação');
        }

        $state.go('dashboard.home.truck', {id: 1});
    }

    function success(result) {
        $uibModalInstance.close(result);
    }

    function dismiss(reason) {
        $uibModalInstance.dismiss(reason);
    }
}