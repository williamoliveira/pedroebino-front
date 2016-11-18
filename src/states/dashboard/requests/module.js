import indexRequestModule from "./index/module";
import createRequestModule from "./create/module";
import showRequestModule from "./show/module";

export default angular
  .module('app.states.dashboard.requests', [
    indexRequestModule.name,
    createRequestModule.name,
    showRequestModule.name,
  ])