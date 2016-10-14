export default class DriversIndexController {

    /** @ngInject */
    constructor($rootScope, $scope, MessageService, DriversResource){
        this.$rootScope = $rootScope
        this.$scope = $scope
        this.MessageService = MessageService
        this.DriversResource = DriversResource

        this.registerListeners()
        this.fetchDrivers()
    }

    registerListeners() {
        const unsub = this.$rootScope.$on('driver:created', () => this.fetchDrivers())
        this.$scope.$on('$destroy', unsub)
    }

    fetchDrivers() {
        return this.DriversResource
            .fetchMany({paginate: false})
            .then(({ items }) => this.drivers = items)
    }

    destroy(model){
        this.MessageService
            .confirm("Tem certeza que deseja excluir este motorista?")
            .then(() => this.doDestroy(model))
    }

    doDestroy(model){
        this.DriversResource
            .deleteById(model.id)
            .then((res) => {
                console.log('deletado');
                this.fetchDrivers();
            })
    }
}