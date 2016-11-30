import * as presenters from "../presenters";

/** @ngInject */
export default function UserShowController($uibModalInstance, user) {
  const vm = this

  vm.presentRole = presenters.presentRole

  // Attributes
  vm.user = user

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