/** @ngInject */
export default function TruckShowController($uibModalInstance, truck) {
  const vm = this

  // Attributes
  vm.truck = truck

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