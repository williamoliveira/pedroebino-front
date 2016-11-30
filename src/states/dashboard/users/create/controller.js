
/** @ngInject */
export default function ($uibModalInstance,
                         $state,
                         $rootScope,
                         usersResource) {

  const vm = this

  // Attributes
  vm.roles = [
    {
      id: null,
      name: 'Selecione...'
    },
    {
      id: 'CLIENT',
      name: 'Cliente'
    },
    {
      id: 'ADMIN',
      name: 'Administrador'
    }
  ]

  vm.formModel = {
    role: vm.roles[0],
  }

  // Methods assigments
  vm.success = success
  vm.dismiss = dismiss
  vm.submit = submit

  init()

  // Method implementations

  function init() {

  }

  function submit(formModel) {
    if (!vm.form.$valid) {
      return console.error('Existem erros no formulário', 'Erro de validação')
    }

    const model = {
      ...formModel,
      role: formModel.role.id,
    }

    usersResource.create(model).then((res) => {
      $rootScope.$emit('user:created', {model})
      $state.go('dashboard.users')
    })

  }

  function success(result) {
    $uibModalInstance.close(result)
  }

  function dismiss(reason) {
    $uibModalInstance.dismiss(reason)
  }
}