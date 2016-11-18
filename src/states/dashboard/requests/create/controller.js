/** @ngInject */
export default function ($uibModalInstance,
                         $state,
                         $rootScope,
                         requestsResource,
                         statesResource,
                         citiesResource) {

  const vm = this

  vm.states = [{
    id: null,
    initials: 'Selecione...'
  }]

  vm.fromCities = [{
    id: null,
    name: 'Selecione...'
  }]

  vm.toCities = [{
    id: null,
    name: 'Selecione...'
  }]

  vm.formModel = {
    to: {
      state: vm.states[0],
      city: vm.toCities[0],
    },
    from: {
      state: vm.states[0],
      city: vm.fromCities[0],
    },
  }

  // Methods assigments
  vm.success = success
  vm.dismiss = dismiss
  vm.submit = submit
  vm.loadFromCities = loadFromCities
  vm.loadToCities = loadToCities

  init()

  // Method implementations

  function init() {
    loadStates()
  }

  function loadStates() {
    return statesResource.fetchMany({paginate: false}).then(({items}) => {
      vm.states = [vm.states[0], ...items]
    })
  }

  function loadFromCities(state) {
    const query = {
      'state.id': state.id,
      paginate: false
    }

    return citiesResource.fetchMany(query).then(({items}) => {
      vm.fromCities = [vm.fromCities[0], ...items]
    })
  }

  function loadToCities(state) {
    const query = {
      'state.id': state.id,
      paginate: false
    }

    return citiesResource.fetchMany(query).then(({items}) => {
      vm.toCities = [vm.toCities[0], ...items]
    })
  }

  function submit(formModel) {
    if (!vm.form.$valid) {
      return console.error('Existem erros no formulário', 'Erro de validação')
    }

    const model = {
      ...formModel,
      to: {
        ...formModel.to.city,
        state: formModel.to.state
      },
      from: {
        ...formModel.from.city,
        state: formModel.from.state
      }
    }

    requestsResource
      .create(model)
      .then((request) => {
        $rootScope.$emit('request:created', {model})
        $state.go('dashboard.requests.show', {id: request.id})
      })

  }

  function success(result) {
    $uibModalInstance.close(result)
  }

  function dismiss(reason) {
    $uibModalInstance.dismiss(reason)
  }

}