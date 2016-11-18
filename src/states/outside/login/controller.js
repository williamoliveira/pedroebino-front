import template from "./template.html";

export default {
  name: 'outside.login',
  url: '/login?redirect',
  template: template,
  controller: controller,
  controllerAs: 'vm',
}

/** @ngInject */
function controller(Auth, $location, $state) {

  const vm = this

  // Attributes
  vm.username = 'johndoe@gmail.com'
  vm.password = '12345678'
  vm.remember = true
  vm.loginFailed = false

  // Methods
  vm.login = login
  vm.alertClose = alertClose

  function login(username, password) {

    Auth.login(username, password)
      .then(function () {
        vm.loginFailed = false

        if ($state.params.redirect) {
          return $location.path($state.params.redirect)
        }

        $state.go('dashboard.home')
      })
      .catch(function () {
        vm.loginFailed = true
      })
  }

  function alertClose(){
    vm.loginFailed = false
  }

}