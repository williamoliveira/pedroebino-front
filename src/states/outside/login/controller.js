import template from './template.html'

export default {
    name: 'outside.login',
    url: '/login?redirect',
    template: template,
    controller: controller,
    controllerAs: 'vm',
}

/** @ngInject */
function controller(Auth, $state) {

    var vm = this

    // Attributes
    vm.username = 'admin1@app.com'
    vm.password = '12345678'
    vm.remember = true
    vm.loginFailed = false

    // Methods
    vm.login = login

    function login(username, password) {

        Auth.login(username, password)
            .then(function () {
                vm.loginFailed = false
                $state.go('outside.place-selector')
            })
            .catch(function () {
                vm.loginFailed = true
            })
    }


}