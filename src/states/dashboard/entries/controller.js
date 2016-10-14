import template from './template.html'

export default {
    name: 'dashboard.entries',
    url: '/',
    template: template,
    controller: controller,
    controllerAs: 'vm'
}

/** @ngInject */
function controller() {
    const vm = this

    vm.entries = [
        {
            id: 1,
            status: 'Aberto',
            from: 'Ibirama (SC)',
            to: 'São Paulo (SP)',
            date: '11/10/2016',
            volume: 567,
            shareTruck: false
        },
        {
            id: 2,
            status: 'Concluído',
            from: 'Rio do Sul (SC)',
            to: 'Blumenau (SC)',
            date: '11/11/2016',
            volume: 900,
            shareTruck: true
        },
        {
            id: 3,
            status: 'Definido',
            from: 'Ibirama (SC)',
            to: 'Boa Vista (RO)',
            date: '11/10/2016',
            volume: 156,
            shareTruck: true
        },
        {
            id: 4,
            status: 'Cancelado',
            from: 'Ibirama (SC)',
            to: 'São Paulo (SP)',
            date: '17/10/2016',
            volume: 794,
            shareTruck: false
        },
    ]
}