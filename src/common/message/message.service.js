var modalTemplate = require('./message-modal.html')

module.exports.load = function (mod) {
  mod.factory('MessageService', MessageFactory)
}

/** @ngInject */
function MessageFactory($uibModal) {

  return {
    confirm,
    error,
    openModal
  }

  function confirm(message, title) {
    return openModal(title, message)
  }

  function error(message, title) {

    title = title || 'Erro'

    var options = {
      buttons: [
        {
          label: 'Ok',
          className: 'btn-success'
        }
      ]
    }

    return openModal(title, message, options)
  }

  function openModal(title, message, options) {

    if (!options) {
      options = {
        buttons: [
          {
            label: 'Cancelar',
            className: 'btn-default',
            click: 'dismiss'
          },
          {
            label: 'Confirmar',
            className: 'btn-success'
          }
        ]
      }
    }

    const modalInstance = $uibModal.open({
      template: modalTemplate,
      size: options.size || 'sm',
      /** @ngInject */
      controller: function ($scope, $uibModalInstance) {

        $scope.title = title ? title : 'Confirmação'
        $scope.message = message
        $scope.options = options

        $scope.dismiss = function () {
          $uibModalInstance.dismiss()
        }

        $scope.confirm = function () {
          $uibModalInstance.close(true)
        }
      }
    })

    return modalInstance.result
  }


}