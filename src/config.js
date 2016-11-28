/** @ngInject */
export default function ($urlRouterProvider, $urlMatcherFactoryProvider, cfpLoadingBarProvider) {

  $urlRouterProvider.when('', '/')

  $urlMatcherFactoryProvider.strictMode(false)

  // $urlRouterProvider.deferIntercept()
  cfpLoadingBarProvider.latencyThreshold = 200;

  /** @ngInject */
  $urlRouterProvider.otherwise(function ($injector) {
    const $state = $injector.get('$state')
    console.warn('State not found', $state)
    $state.go('outside.404')
  })

}

export const datetimepicker = () => {
  return {
    dateFormat: 'dd/MM/yyyy HH:mm',
    defaultTime: '00:00:00',
    html5Types: {
      date: 'yyyy-MM-dd',
      'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
      'month': 'yyyy-MM'
    },
    initialPicker: 'date',
    reOpenDefault: false,
    enableDate: true,
    enableTime: true,
    buttonBar: {
      show: true,
      now: {
        show: true,
        text: 'Agora'
      },
      today: {
        show: true,
        text: 'Hoje'
      },
      clear: {
        show: true,
        text: 'Limpar'
      },
      date: {
        show: true,
        text: 'Data'
      },
      time: {
        show: true,
        text: 'Hora'
      },
      close: {
        show: true,
        text: 'Ok'
      }
    },
    closeOnDateSelection: true,
    appendToBody: false,
    altInputFormats: [],
    ngModelOptions: {}
  };
}