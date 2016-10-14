var mod = angular.module('app.page-title', [])

require('./page-title.service').load(mod)
require('./state-change-listener.run').load(mod)

module.exports = mod