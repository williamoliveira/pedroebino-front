var mod = angular.module('app.message', [])

require('./message.service.js').load(mod)

module.exports = mod