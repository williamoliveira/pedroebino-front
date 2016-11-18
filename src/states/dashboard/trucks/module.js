import indexDriverModule from "./index/module";
import createDriverModule from "./create/module";
import showDriverModule from "./show/module";

export default angular
  .module('app.states.dashboard.trucks', [
    indexDriverModule.name,
    createDriverModule.name,
    showDriverModule.name,
  ])