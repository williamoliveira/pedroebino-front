/** @ngInject */
export default function ($rootScope, Auth, $location, $state) {
  const dashboardCtrl = this

  init()

  function init() {

    Auth.getCurrentUserAsync().then((user) => {
      dashboardCtrl.user = user
    })

    $rootScope.$on('auth.unauthenticated', () => {
      $state.go('outside.login', {redirect: $location.path()})
    })
  }

  dashboardCtrl.logout = () => {
    Auth.logout();
    dashboardCtrl.user = null;
    $state.go('outside.login');
  }
}