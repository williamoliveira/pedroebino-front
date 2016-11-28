/** @ngInject */
export default ($rootScope, $q, $log, PermRoleStore, Auth) => {

  PermRoleStore.defineManyRoles({
    /** @ngInject */
    'AUTHENTICATED': (Auth) => Auth.isAuthenticatedAsync(),
    'USER': () => hasRole('USER'),
    'ADMIN': () => hasRole('ADMIN'),
    'CLIENT': () => hasRole('CLIENT'),
  });

  function hasRole(role) {
    return Auth.getCurrentUserAsync().then((user) =>
      (user.roles.includes(role) ? $q.resolve : $q.reject)()
    )
  }

}