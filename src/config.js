/** @ngInject */
export default function ($urlRouterProvider, $urlMatcherFactoryProvider) {
  
  $urlRouterProvider.when('', '/')
  
  $urlMatcherFactoryProvider.strictMode(false)
  
  // $urlRouterProvider.deferIntercept()
  
  /** @ngInject */
  $urlRouterProvider.otherwise(function ($injector) {
    const $state = $injector.get('$state')
    console.warn('State not found', $state)
    $state.go('outside.404')
  })
  
}