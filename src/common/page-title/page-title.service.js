module.exports.load = function(mod){
    mod.factory('PageTitleService', PageTitleService);
};

/** @ngInject */
function PageTitleService($rootScope){

    return {
        setTitle: setTitle
    };

    function setTitle(newTitle){
        $rootScope.pageTitle = newTitle;
    }
}