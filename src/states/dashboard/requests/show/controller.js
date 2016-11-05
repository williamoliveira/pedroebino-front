/** @ngInject */
export default function ($uibModalInstance, driver) {
  const vm = this
  
  // Attributes
  vm.driver = driver
  
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