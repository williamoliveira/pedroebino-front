
/** @ngInject */
export default function ($uibModalInstance,
                         $state,
                         $rootScope,
                         TrucksResource) {
  
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
  
  vm.formModel = {
    license: vm.licenses[0],
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
      license: formModel.license.id,
    }
    
    TrucksResource.create(model).then((res) => {
      $rootScope.$emit('truck:created', {model})
      $state.go('dashboard.trucks')
    })
    
  }
  
  function success(result) {
    $uibModalInstance.close(result)
  }
  
  function dismiss(reason) {
    $uibModalInstance.dismiss(reason)
  }
}