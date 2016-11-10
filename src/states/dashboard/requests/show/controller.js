/** @ngInject */
export default function ($uibModalInstance, request) {
  const vm = this
  
  // Attributes
  vm.request = request
  
  // Methods assigments
  vm.success = success
  vm.dismiss = dismiss
  
  
  // Method implementations
  
  function success(result) {
    $uibModalInstance.close(result)
  }
  
  function dismiss(reason) {
    $uibModalInstance.dismiss(reason)
  }
}