module.exports.load = function (mod) {
    mod.run(listener)
}

/** @ngInject */
function listener($rootScope, $state, PageTitleService) {

    $rootScope.$on('$stateChangeSuccess', function () {
        var stateTitle = $state.$current.locals.globals.pageTitle
        PageTitleService.setTitle(stateTitle)
    })

}
