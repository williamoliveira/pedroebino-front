/** @ngInject */
export default ($rootScope, $q, $log, PermRoleStore, Auth) => {

  PermRoleStore.defineManyRoles({
    /** @ngInject */
    'AUTHENTICATED': (Auth) => Auth.isAuthenticatedAsync(),
    'ADMIN': () => hasRole('ADMIN'),
    'CLIENT': () => hasRole('CLIENT'),
  });

  function hasRole(role) {
    return Auth.getCurrentUserAsync().then((user) => {
      return ((user.role === role) ? $q.resolve : $q.reject)()
    })
  }

}