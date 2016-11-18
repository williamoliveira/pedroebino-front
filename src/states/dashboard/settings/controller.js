/** @ngInject */
export default function ($state,
                         $rootScope,
                         $http,
                         ENV) {

  const vm = this
  const SETTINGS_ENDPOINT = `${ENV.api.baseUrl}/admin-settings`

  vm.formModel = {}

  // Methods assigments
  vm.submit = submit

  init();

  function init() {
    $http.get(SETTINGS_ENDPOINT).then((res) => {
      vm.formModel = res.data
    })
  }

  function submit(settings) {
    if (!vm.form.$valid) {
      return console.error('Existem erros no formulário', 'Erro de validação')
    }

    $http.post(SETTINGS_ENDPOINT, settings).then((res) => {
      vm.formModel = res.data
      $rootScope.$emit('settings:saved', {settings})
    })
  }

}