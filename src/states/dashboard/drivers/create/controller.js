/** @ngInject */
export default function ($uibModalInstance,
                         $state,
                         $rootScope,
                         driversResource,
                         StatesResource,
                         CitiesResource) {

  const vm = this

  // Attributes
  vm.licenses = [
    {
      id: null,
      name: 'Selecione...'
    },
    {
      id: 'A',
      name: 'A'
    },
    {
      id: 'B',
      name: 'B'
    },
    {
      id: 'C',
      name: 'C'
    },
    {
      id: 'D',
      name: 'D'
    },
    {
      id: 'E',
      name: 'E'
    },
  ]

  vm.states = [{
    id: null,
    initials: 'Selecione...'
  }]

  vm.fromCities = [{
    id: null,
    name: 'Selecione...'
  }]

  vm.formModel = {
    license: vm.licenses[0],
    state: vm.states[0],
    city: vm.fromCities[0],
  }

  // Methods assigments
  vm.success = success
  vm.dismiss = dismiss
  vm.submit = submit
  vm.loadFromCities = loadCities

  init()

  // Method implementations

  function init() {
    loadStates()
  }

  function loadStates() {
    return StatesResource.fetchMany({paginate: false}).then(({items}) => {
      vm.states = [vm.states[0], ...items]
    })
  }

  function loadCities(state) {
    const query = {
      'state.id': state.id,
      paginate: false
    }

    return CitiesResource.fetchMany(query).then(({items}) => {
      vm.fromCities = [vm.fromCities[0], ...items]
    })
  }

  function submit(formModel) {
    if (!vm.form.$valid) {
      return console.error('Existem erros no formulário', 'Erro de validação')
    }

    const model = {
      ...formModel,
      city: {
        ...formModel.city,
        state: formModel.state
      },
      license: formModel.license.id,
      state: undefined
    }

    driversResource.create(model).then((res) => {
      $rootScope.$emit('driver:created', {model})
      $state.go('dashboard.drivers')
    })

  }

  function success(result) {
    $uibModalInstance.close(result)
  }

  function dismiss(reason) {
    $uibModalInstance.dismiss(reason)
  }
}