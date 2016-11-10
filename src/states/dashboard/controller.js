
/** @ngInject */
export default function (Auth, $state) {
  const dashboardCtrl = this
  
  init()
  
  function init() {
    Auth.getCurrentUserAsync().then((user) =>{
      dashboardCtrl.user = user
    })
  }
  
  dashboardCtrl.logout = () => {
    Auth.logout();
    dashboardCtrl.user = null;
    $state.go('outside.login');
  }
}