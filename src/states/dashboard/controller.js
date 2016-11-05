
/** @ngInject */
export default function (Auth) {
  const dashboardCtrl = this
  
  init()
  
  function init() {
    Auth.getCurrentUserAsync().then((user) =>{
      dashboardCtrl.user = user
    })
  }
}