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

    const vm = this

    // Attributes
    vm.username = 'admin@admin.com'
    vm.password = '12345678'
    vm.remember = true
    vm.loginFailed = false

    // Methods
    vm.login = login

    function login(username, password) {

        Auth.login(username, password)
            .then(function () {
                vm.loginFailed = false
                $state.go('dashboard.home')
            })
            .catch(function () {
                vm.loginFailed = true
            })
    }


}