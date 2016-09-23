import templateUrl from './template.html';

export default {
    name: 'outside',
    abstract: true,
    templateUrl: templateUrl,
    controller: controller,
    controllerAs: 'ctrl',
    /** @ngInject */
    onEnter: (ENV) => {
        ENV.app.bodyClasses.push('bg-grey');
    },
    /** @ngInject */
    onExit:  (ENV) => {
        ENV.app.bodyClasses.pop();
    },
};

/** @ngInject */
function controller() {
    const ctrl = this;


}