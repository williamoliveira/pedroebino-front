/** @ngInject */
export default ($rootScope, $log, PermRoleStore) => {
  
  PermRoleStore.defineManyRoles({
    /** @ngInject */
    'AUTHENTICATED': (Auth) => Auth.isAuthenticatedAsync(),
    /** @ngInject */
    'USER': (Auth) => Auth.getCurrentUserAsync().then((user) => user.roles.includes('USER')),
    /** @ngInject */
    'ADMIN': (Auth) => Auth.getCurrentUserAsync().then((user) => user.roles.includes('ADMIN')),
  });
  
}