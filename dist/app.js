webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(74);

	__webpack_require__(76);

	__webpack_require__(77);

	__webpack_require__(79);

	__webpack_require__(80);

	var _module2 = __webpack_require__(89);

	var _module3 = _interopRequireDefault(_module2);

	var _module4 = __webpack_require__(95);

	var _module5 = _interopRequireDefault(_module4);

	var _module6 = __webpack_require__(97);

	var _module7 = _interopRequireDefault(_module6);

	var _module8 = __webpack_require__(100);

	var _module9 = _interopRequireDefault(_module8);

	var _module10 = __webpack_require__(132);

	var _module11 = _interopRequireDefault(_module10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Global dependencies
	__webpack_require__(144);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(149);
	__webpack_require__(150);

	// Styles


	// App dependencies


	// Main module declaration
	var _module = angular.module("pedro&bino", [

	// Vendors
	"ui.router", // (angular-ui-router)
	"ui.bootstrap", // (angular-ui-bootstrap)
	'http-auth-interceptor', // (angular-http-auth)
	'angular-growl', 'formly', 'formlyBootstrap', 'ngStorage',

	// App
	_module3.default.name, _module5.default.name, _module7.default.name, _module9.default.name, _module11.default.name]);

	_module.value('ENV', {
	    "debug": true,
	    "html5Route": false,
	    "html5RouteBaseHref": "/",
	    "loadingBarLatencyThreshold": 200,
	    "api": {
	        "baseUrl": "/api",
	        "auth": {
	            "url": "/oauth2/access_token",
	            "clientId": "1",
	            "clientSecret": "1"
	        }
	    },
	    "app": {
	        name: 'Pedro&Bino',
	        year: new Date().getFullYear(),
	        bodyClasses: []
	    }
	});

	// Configs
	/** @ngInject */
	_module.config(["$urlRouterProvider", "$urlMatcherFactoryProvider", function ($urlRouterProvider, $urlMatcherFactoryProvider) {

	    $urlRouterProvider.when('', '/');

	    $urlMatcherFactoryProvider.strictMode(false);

	    /** @ngInject */
	    $urlRouterProvider.otherwise(function ($injector) {
	        var $state = $injector.get("$state");
	        console.warn('State not found', $state);
	        $state.go("outside.404");
	    });
	}]);

	// <html> level controller
	/** @ngInject */
	_module.controller('MainController', ["ENV", function (ENV) {
	    var main = this;

	    main.app = ENV.app;
	}]);

	// Bootstrap the main module
	angular.element(document).ready(function () {
	    angular.bootstrap(document.getElementsByTagName("html"), ["pedro&bino"]);
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var mod = angular.module("app.oauth", []);

	__webpack_require__(90).load(mod);
	__webpack_require__(91).load(mod);
	__webpack_require__(92).load(mod);
	__webpack_require__(93).load(mod);
	__webpack_require__(94).load(mod);

	module.exports = mod;

/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";

	module.exports.load = function (mod) {
	    mod.factory("AuthBearerTokenService", AuthBearerTokenService);
	};

	/** @ngInject */
	function AuthBearerTokenService() {
	    "use strict";

	    var token = null;
	    var expirationTime = null;

	    return {
	        getToken: getToken,
	        setToken: setToken,
	        deleteToken: deleteToken,
	        hasToken: hasToken,
	        setExpirationTime: setExpirationTime,
	        isExpired: isExpired
	    };

	    function hasToken() {
	        return !!getToken();
	    }

	    function getToken() {
	        return token;
	    }

	    function setToken(tkn) {
	        if (tkn) {
	            token = tkn;
	        } else {
	            deleteToken();
	        }
	    }

	    function deleteToken() {
	        token = null;
	    }

	    function setExpirationTime(seconds) {
	        var now = new Date();
	        //*10 because js dates works in milliseconds
	        expirationTime = new Date(now.getTime() + seconds * 10);
	    }

	    function isExpired() {
	        var now = new Date();
	        return expirationTime.getTime() <= now.getTime();
	    }
	}

/***/ },
/* 91 */
/***/ function(module, exports) {

	"use strict";

	AuthRefreshTokenService.$inject = ["$localStorage"];
	module.exports.load = function (mod) {
	    mod.factory("AuthRefreshTokenService", AuthRefreshTokenService);
	};

	/** @ngInject */
	function AuthRefreshTokenService($localStorage) {

	    return {
	        getToken: getToken,
	        setToken: setToken,
	        deleteToken: deleteToken,
	        hasToken: hasToken
	    };

	    function hasToken() {
	        return !!getToken();
	    }

	    function getToken() {
	        return $localStorage.refreshToken;
	    }

	    function setToken(token) {
	        if (token) {
	            $localStorage.refreshToken = token;
	        } else {
	            deleteToken();
	        }
	    }

	    function deleteToken() {
	        delete $localStorage.refreshToken;
	    }
	}

/***/ },
/* 92 */
/***/ function(module, exports) {

	'use strict';

	AuthTokenInterceptor.$inject = ["$q", "ENV", "AuthBearerTokenService"];
	module.exports.load = function (mod) {
	    mod.factory('AuthTokenInterceptor', AuthTokenInterceptor);

	    mod.config(["$httpProvider", function ($httpProvider) {
	        $httpProvider.interceptors.push('AuthTokenInterceptor');
	    }]);
	};

	/** @ngInject */
	function AuthTokenInterceptor($q, ENV, AuthBearerTokenService) {
	    'use strict';

	    return {
	        request: addAuthToken
	    };

	    function addAuthToken(config) {

	        var token = AuthBearerTokenService.getToken();

	        if (isApiCall(config) && token) {
	            config.headers = config.headers || {};
	            config.headers['Authorization'] = 'Bearer ' + token;
	        }

	        return config || $q.when(response);
	    }

	    function isApiCall(config) {
	        return config.url.indexOf(ENV.api.baseUrl) === 0;
	    }
	}

/***/ },
/* 93 */
/***/ function(module, exports) {

	"use strict";

	Auth.$inject = ["$http", "$q", "$rootScope", "$log", "ENV", "AuthBearerTokenService", "AuthRefreshTokenService"];
	module.exports.load = function (mod) {
	    mod.factory('Auth', Auth);
	};

	/** @ngInject */
	function Auth($http, $q, $rootScope, $log, ENV, AuthBearerTokenService, AuthRefreshTokenService) {
	    "use strict";

	    var currentUser = null;

	    var endpoints = {
	        me: ENV.api.baseUrl + "/profile/me",
	        accessToken: ENV.api.baseUrl + ENV.api.auth.url
	    };

	    return {
	        login: login,
	        logout: logout,
	        getCurrentUser: getCurrentUser,
	        getCurrentUserAsync: getCurrentUserAsync,
	        getCurrentUserFromServer: getCurrentUserFromServer,
	        isAuthenticated: isAuthenticated,
	        isAuthenticatedAsync: isAuthenticatedAsync,
	        refreshToken: refreshToken
	    };

	    function isAuthenticated() {
	        return !!currentUser;
	    }

	    function isAuthenticatedAsync() {

	        return getCurrentUserAsync().then(function () {
	            return $q.resolve();
	        }).catch(function () {
	            return $q.reject();
	        });
	    }

	    function getCurrentUser() {
	        return currentUser;
	    }

	    function getCurrentUserAsync() {

	        if (currentUser) {
	            return $q.resolve(currentUser);
	        }

	        return getCurrentUserFromServer();
	    }

	    function getCurrentUserFromServer() {

	        if (!AuthRefreshTokenService.hasToken()) {
	            return $q.reject("No refresh token");
	        }

	        if (!AuthBearerTokenService.hasToken()) {
	            return refreshToken();
	        }

	        return $http.get(endpoints.me).then(function (response) {

	            if (!response.data) {
	                return $q.reject(response);
	            }

	            currentUser = response.data;

	            $rootScope.$emit("userLoaded", currentUser);

	            return currentUser;
	        });
	    }

	    function login(username, password) {

	        var grant = {
	            grant_type: "password",
	            username: username,
	            password: password,
	            client_id: ENV.api.auth.clientId,
	            client_secret: ENV.api.auth.clientSecret
	        };

	        var config = {
	            ignoreAuthModule: true
	        };

	        return $http.post(endpoints.accessToken, grant, config).then(function (response) {

	            setTokensFromResponse(response.data);
	            $rootScope.$emit("auth.authenticated");

	            return getCurrentUserAsync();
	        }).catch(function (response) {
	            return $q.reject(response.data);
	        });
	    }

	    function refreshToken() {

	        if (!AuthRefreshTokenService.hasToken()) {
	            return $q.reject("No refresh token");
	        }

	        var grant = {
	            grant_type: "refresh_token",
	            refresh_token: AuthRefreshTokenService.getToken(),
	            client_id: ENV.api.auth.clientId,
	            client_secret: ENV.api.auth.clientSecret
	        };

	        var config = {
	            ignoreAuthModule: true
	        };

	        $log.debug('Refreshing token');

	        return $http.post(endpoints.accessToken, grant, config).then(function (response) {

	            setTokensFromResponse(response.data);
	            $rootScope.$emit("auth.authenticated");

	            return getCurrentUserAsync();
	        }).catch(function (response) {
	            deleteTokens();
	            return $q.reject(response);
	        });
	    }

	    function logout() {
	        currentUser = null;
	        deleteTokens();
	        $rootScope.$broadcast("auth.unauthenticated");

	        return $q.resolve();
	    }

	    function deleteTokens() {
	        AuthBearerTokenService.deleteToken();
	        AuthRefreshTokenService.deleteToken();
	    }

	    function setTokensFromResponse(response) {

	        AuthBearerTokenService.setToken(response.access_token);
	        AuthBearerTokenService.setExpirationTime(response.expires_in);

	        AuthRefreshTokenService.setToken(response.refresh_token);
	    }
	}

/***/ },
/* 94 */
/***/ function(module, exports) {

	'use strict';

	AuthListener.$inject = ["$rootScope", "authService", "Auth", "AuthTokenInterceptor"];
	module.exports.load = function (mod) {
	    mod.run(AuthListener);
	};

	function AuthListener($rootScope, authService, Auth, AuthTokenInterceptor) {
	    'use strict';

	    $rootScope.$on('event:auth-loginRequired', function () {
	        Auth.refreshToken().then(loginSuccess).catch(unauthenticated);
	    });

	    function loginSuccess() {
	        authService.loginConfirmed('success', function (config) {
	            return AuthTokenInterceptor.request(config);
	        });
	    }

	    function unauthenticated() {
	        Auth.logout();
	        authService.loginCancelled();
	    }
	}

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mod = angular.module('app.modal-state', []);

	__webpack_require__(96).load(mod);

	module.exports = mod;

/***/ },
/* 96 */
/***/ function(module, exports) {

	'use strict';

	modalState.$inject = ["$stateProvider"];
	module.exports.load = function (mod) {
	    mod.provider('modalState', modalState);
	    //mod.run(interceptor);
	};

	///** @ngInject */
	//function interceptor($rootScope, $state){
	//
	//    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
	//
	//        if(toState.data.$previousState){
	//            return;
	//        }
	//
	//        toState.data.$previousState = fromState;
	//        toState.data.$previousState.$stateParams = fromParams;
	//    });
	//}

	/**
	 * Modal provider. Adds state which will open a modal.
	 * Opens or closes modal on URL change.
	 */

	/** @ngInject */
	function modalState($stateProvider) {

	    var provider = this;

	    this.$get = function () {
	        return provider;
	    };

	    this.state = function (stateName, options) {

	        openModal.$inject = ["$rootScope", "$uibModal", "$state", "$stateParams"];
	        var modalResult;
	        var modalInstance;

	        if (angular.isObject(stateName)) {
	            options = stateName;
	            stateName = options.name;
	        }

	        var resolve = options.resolve;

	        $stateProvider.state(stateName, {
	            url: options.url,
	            data: options.data || {},
	            onEnter: openModal,

	            /** @ngInject */
	            onExit: ["$state", function onExit($state) {
	                if (modalInstance) {
	                    modalInstance.dismiss();

	                    modalInstance = modalResult = null;
	                }

	                if ($state.$stateParams) delete $state.$stateParams;
	            }]
	        });

	        /** @ngInject */
	        function openModal($rootScope, $uibModal, $state, $stateParams) {

	            $state.$stateParams = $stateParams;

	            options.resolve = resolve;

	            modalInstance = $uibModal.open(options);

	            modalInstance.result.then(function (result) {
	                modalResult = result;
	                $rootScope.$broadcast('statefulModalResult', result);
	            }).catch(function (reason) {
	                $rootScope.$broadcast('statefulModalDismissed', reason);
	            }).finally(function () {
	                // modal closes

	                if ($state.$current.name === stateName) {
	                    //
	                    //var previousState = $state.current.data.$previousState;
	                    //
	                    //if (previousState.name) {
	                    //    $state.go(previousState.name, previousState.$stateParams);
	                    //    delete $state.current.data.$previousState;
	                    //}
	                    //else {
	                    $state.go('^'); // go to parent state
	                    //}
	                }

	                modalInstance = modalResult = null;
	            });
	        }

	        return provider;
	    };
	}

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mod = angular.module('app.page-title', []);

	__webpack_require__(98).load(mod);
	__webpack_require__(99).load(mod);

	module.exports = mod;

/***/ },
/* 98 */
/***/ function(module, exports) {

	'use strict';

	PageTitleService.$inject = ["$rootScope"];
	module.exports.load = function (mod) {
	    mod.factory('PageTitleService', PageTitleService);
	};

	/** @ngInject */
	function PageTitleService($rootScope) {

	    return {
	        setTitle: setTitle
	    };

	    function setTitle(newTitle) {
	        $rootScope.pageTitle = newTitle;
	    }
	}

/***/ },
/* 99 */
/***/ function(module, exports) {

	'use strict';

	listener.$inject = ["$rootScope", "$state", "PageTitleService"];
	module.exports.load = function (mod) {
	    mod.run(listener);
	};

	/** @ngInject */
	function listener($rootScope, $state, PageTitleService) {

	    $rootScope.$on('$stateChangeSuccess', function () {
	        var stateTitle = $state.$current.locals.globals.pageTitle;
	        PageTitleService.setTitle(stateTitle);
	    });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(101);

	var _controller2 = _interopRequireDefault(_controller);

	var _module = __webpack_require__(103);

	var _module2 = _interopRequireDefault(_module);

	var _module3 = __webpack_require__(112);

	var _module4 = _interopRequireDefault(_module3);

	var _module5 = __webpack_require__(122);

	var _module6 = _interopRequireDefault(_module5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.index', [_module2.default.name, _module4.default.name, _module6.default.name]).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(102);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard',
	    abstract: true,
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'ctrl'
	};

	/** @ngInject */

	function controller() {
	    var ctrl = this;
	}

/***/ },
/* 102 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/template.html';
	var html = "<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{::main.app.name}}</a>\n\n\n        </div>\n\n        <div class=\"collapse navbar-collapse\">\n\n            <ul class=\"nav navbar-nav\">\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"dashboard.entries\">Minhas Solicitações</a>\n                </li>\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"dashboard.trucks\">Caminhões</a>\n                </li>\n                <li ui-sref-active=\"active\">\n                    <a ui-sref=\"dashboard.drivers\">Motoristas</a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li class=\"dropdown\">\n                    <a class=\"dropdown-toggle\" role=\"button\">\n                        <i class=\"glyphicon glyphicon-user\"></i>\n                        Fulano\n                        <span class=\"caret\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Action</a></li>\n                        <li><a href=\"#\">Another action</a></li>\n                        <li><a href=\"#\">Something else here</a></li>\n                        <li role=\"separator\" class=\"divider\"></li>\n                        <li><a href=\"#\">Separated link</a></li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <ui-view></ui-view>\n</div>\n\n<div class=\"m-t-lg p-lg text-center text-muted\">\n    <span>&copy; {{::main.app.year}} - {{::main.app.name}}</span>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(104);

	var _controller2 = _interopRequireDefault(_controller);

	var _module = __webpack_require__(106);

	var _module2 = _interopRequireDefault(_module);

	var _module3 = __webpack_require__(109);

	var _module4 = _interopRequireDefault(_module3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.entries', [_module2.default.name, _module4.default.name]).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(105);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.entries',
	    url: '/',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller() {
	    var vm = this;

	    vm.entries = [{
	        id: 1,
	        status: 'Aberto',
	        from: 'Ibirama (SC)',
	        to: 'São Paulo (SP)',
	        date: '11/10/2016',
	        volume: 567,
	        shareTruck: false
	    }, {
	        id: 2,
	        status: 'Concluído',
	        from: 'Rio do Sul (SC)',
	        to: 'Blumenau (SC)',
	        date: '11/11/2016',
	        volume: 900,
	        shareTruck: true
	    }, {
	        id: 3,
	        status: 'Definido',
	        from: 'Ibirama (SC)',
	        to: 'Boa Vista (RO)',
	        date: '11/10/2016',
	        volume: 156,
	        shareTruck: true
	    }, {
	        id: 4,
	        status: 'Cancelado',
	        from: 'Ibirama (SC)',
	        to: 'São Paulo (SP)',
	        date: '17/10/2016',
	        volume: 794,
	        shareTruck: false
	    }];
	}

/***/ },
/* 105 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/entries/template.html';
	var html = "<div class=\"title-with-button\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <h2 class=\"page-title\">Minhas solicitações</h2>\n        </div>\n        <div class=\"col-md-2 text-right\">\n            <a ui-sref=\"dashboard.entries.create\" class=\"btn btn-success btn-sm\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n                Novo\n            </a>\n        </div>\n    </div>\n</div>\n\n<table class=\"table table-hover table-striped\">\n    <thead>\n    <tr>\n        <th>Status</th>\n        <th>Origem</th>\n        <th>Destino</th>\n        <th>Carga</th>\n        <th>Compartilhar</th>\n        <th>Ações</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"entry in vm.entries\">\n        <td>\n            <span class=\"label\" ng-class=\"{\n            'label-info': (entry.status === 'Aberto'),\n            'label-success': (entry.status === 'Concluído'),\n            'label-danger': (entry.status === 'Cancelado'),\n            'label-primary': (entry.status === 'Definido'),\n            }\">{{entry.status}}</span>\n        </td>\n        <td>{{entry.from}}</td>\n        <td>{{entry.to}}</td>\n        <td>{{entry.volume}}L</td>\n        <td>{{entry.shareTruck ? 'Sim' : 'Não'}}</td>\n\n        <th>\n            <a ui-sref=\"dashboard.entries.show({id: entry.id})\" uib-tooltip=\"Visualizar\">\n                <i class=\"glyphicon glyphicon-eye-open\"></i>\n            </a>\n            <a href=\"#\" uib-tooltip=\"Cancelar\" class=\"\">\n                <i class=\"glyphicon glyphicon-remove text-danger\"></i>\n            </a>\n        </th>\n    </tr>\n    </tbody>\n</table>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(107);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.entries.create', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "$state"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(108);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.entries.create',
	    url: 'new',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller($uibModalInstance, $state) {
	    var vm = this;

	    // Attributes
	    vm.options = [{
	        date: '09/10/2016',
	        price: 868.50
	    }, {
	        date: '10/10/2016',
	        price: 808.00
	    }, {
	        date: '11/10/2016',
	        price: 968.50
	    }];

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {
	        if (!vm.thisForm.$valid) {
	            return console.error('Existem erros no formulário', 'Erro de validação');
	        }

	        $state.go('dashboard.entries.show', { id: 1 });
	    }

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 108 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/entries/create/template.html';
	var html = "<div skl-busy=\"isLoading\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Nova solicitação de frete</b>\n    </div>\n    <div class=\"modal-body\">\n\n\n        <form name=\"vm.thisForm\" novalidate>\n\n            <div class=\"form-group\">\n                <label>Origem</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Ibirama\">\n            </div>\n\n            <div class=\"form-group\">\n                <label>Destino</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Ex: Florianópolis\">\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Carga em Litros</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Ex: 500\">\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Data</label>\n                        <input type=\"date\" class=\"form-control\" placeholder=\"__/__/____\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"checkbox\">\n                <label>\n                    <input type=\"checkbox\"> Aceito compartilhar caminhão\n                </label>\n            </div>\n\n        </form>\n\n        <div class=\"clearfix\"></div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-default\" ng-click=\"vm.dismiss()\">Cancelar</button>\n        <button type=\"submit\"\n                ng-click=\"vm.submit(vm.model)\"\n                ng-disabled=\"!vm.thisForm.$valid\"\n                class=\"btn btn-success\">Prosseguir &raquo;\n        </button>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(110);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.entries.show', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "entry"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(111);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.entries.show',
	    url: 'entry/{id}',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm',
	    resolve: {
	        /** @ngInject */
	        entry: ["$stateParams", function entry($stateParams) {
	            return {
	                id: $stateParams.id,
	                status: 'Aguardando',
	                from: 'Ibirama (SC)',
	                to: 'São Paulo (SP)',
	                date: '10/10/2016',
	                volume: 567,
	                shareTruck: false
	            };
	        }]
	    }
	};

	/** @ngInject */

	function controller($uibModalInstance, entry) {
	    var vm = this;

	    // Attributes
	    vm.entry = entry;

	    vm.options = [{
	        date: '09/10/2016',
	        price: 868.50
	    }, {
	        date: '10/10/2016',
	        price: 808.00
	    }, {
	        date: '11/10/2016',
	        price: 968.50
	    }];

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {}

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 111 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/entries/show/template.html';
	var html = "<div skl-busy=\"isLoading\">\n\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Solicitação de frete</b>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <b>Status:</b> {{vm.entry.status}}<br>\n                <b>Origem:</b> {{vm.entry.from}}<br>\n                <b>Destino:</b> {{vm.entry.to}}<br>\n                <b>Carga:</b> {{vm.entry.volume}}L<br>\n                <b>Data:</b> {{vm.entry.date}}<br>\n                <b>Aceita compartilhar caminhão:</b> {{vm.entry.shareTruck ? 'Sim' : 'Não'}}\n            </div>\n            <div class=\"col-md-3\">\n                <button class=\"btn btn-danger btn-sm  pull-right\">\n                    Cancelar\n                </button>\n            </div>\n        </div>\n\n        <hr>\n\n        <h4>Opções</h4>\n        <div class=\"row\">\n            <div ng-repeat=\"option in vm.options\" class=\"col-md-4\">\n                <div class=\"panel panel-default\" ng-class=\"{'panel-primary': option.date === vm.entry.date}\">\n                    <div class=\"panel-heading text-center\">\n                        {{option.date}}\n                    </div>\n                    <div class=\"panel-body text-center\">\n                        <p>\n                            R$ {{option.price}}\n                        </p>\n\n                        <button class=\"btn btn-primary btn-sm btn-block\">Selecionar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(113);

	var _controller2 = _interopRequireDefault(_controller);

	var _truckService = __webpack_require__(115);

	var _truckService2 = _interopRequireDefault(_truckService);

	var _module = __webpack_require__(116);

	var _module2 = _interopRequireDefault(_module);

	var _module3 = __webpack_require__(119);

	var _module4 = _interopRequireDefault(_module3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.trucks', [_module2.default.name, _module4.default.name]).config(config).factory('TruckService', _truckService2.default);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["TruckService"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(114);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.trucks',
	    url: '/caminhoes',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller(TruckService) {
	    var vm = this;

	    init();

	    function init() {
	        TruckService.getAll().then(function (trucks) {
	            return vm.trucks = trucks;
	        });
	    }
	}

/***/ },
/* 114 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/trucks/template.html';
	var html = "<div class=\"title-with-button\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <h2 class=\"page-title\">Caminhões</h2>\n        </div>\n        <div class=\"col-md-2 text-right\">\n            <a ui-sref=\"dashboard.trucks.create\" class=\"btn btn-success btn-sm\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n                Novo\n            </a>\n        </div>\n    </div>\n</div>\n\n<table class=\"table table-hover table-striped\">\n    <thead>\n    <tr>\n        <th>Nome</th>\n        <th>Volume</th>\n        <th>CNH</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"truck in vm.trucks\">\n        <td>{{truck.name}}</td>\n        <td>{{truck.volume}}L</td>\n        <td>{{truck.license}}</td>\n\n        <th>\n            <a ui-sref=\"dashboard.trucks.show({id: truck.id})\" uib-tooltip=\"Visualizar\">\n                <i class=\"glyphicon glyphicon-eye-open\"></i>\n            </a>\n            <a href=\"#\" uib-tooltip=\"Cancelar\" class=\"\">\n                <i class=\"glyphicon glyphicon-remove text-danger\"></i>\n            </a>\n        </th>\n    </tr>\n    </tbody>\n</table>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 115 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($q) {

	    var trucks = [{
	        id: 1,
	        name: 'Volvo FH12 380',
	        volume: 1000,
	        license: 'D'
	    }, {
	        id: 2,
	        name: 'Scania 113',
	        volume: 1200,
	        license: 'D'
	    }, {
	        id: 3,
	        name: 'Scania 124',
	        volume: 1700,
	        license: 'E'
	    }, {
	        id: 4,
	        name: 'Volvo 400',
	        volume: 800,
	        license: 'D'
	    }, {
	        id: 5,
	        name: 'Volvo 333',
	        volume: 1000,
	        license: 'D'
	    }];

	    return {
	        getAll: function getAll() {
	            return $q.resolve(trucks);
	        },
	        getById: function getById(id) {
	            return $q.resolve(trucks.find(function (truck) {
	                return truck.id == id;
	            }));
	        }
	    };
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(117);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.trucks.create', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "$state"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(118);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.trucks.create',
	    url: '/new',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller($uibModalInstance, $state) {
	    var vm = this;

	    // Attributes
	    vm.options = [{
	        date: '09/10/2016',
	        price: 868.50
	    }, {
	        date: '10/10/2016',
	        price: 808.00
	    }, {
	        date: '11/10/2016',
	        price: 968.50
	    }];

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {
	        if (!vm.thisForm.$valid) {
	            return console.error('Existem erros no formulário', 'Erro de validação');
	        }

	        $state.go('dashboard.home.truck', { id: 1 });
	    }

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 118 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/trucks/create/template.html';
	var html = "<div skl-busy=\"isLoading\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Novo caminhão</b>\n    </div>\n    <div class=\"modal-body\">\n\n        <form name=\"vm.thisForm\" novalidate>\n\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\">\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Carga máxima em Litros</label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Ex: 500\">\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>CNH</label>\n                        <select class=\"form-control\"\n                                ng-model=\"vm.formTruck.license\"\n                                ng-options=\"license for license in ['B', 'C', 'D', 'E']\"></select>\n                    </div>\n                </div>\n            </div>\n\n        </form>\n\n        <div class=\"clearfix\"></div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-default\" ng-click=\"vm.dismiss()\">Cancelar</button>\n        <button type=\"submit\"\n                ng-click=\"vm.submit(vm.model)\"\n                ng-disabled=\"!vm.thisForm.$valid\"\n                class=\"btn btn-success\">Cadastrar\n        </button>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(120);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.trucks.show', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "truck"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(121);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.trucks.show',
	    url: '/truck/{id}',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm',
	    resolve: {
	        /** @ngInject */
	        truck: ["$stateParams", "$state", "TruckService", function truck($stateParams, $state, TruckService) {
	            console.log($state.$stateParams);
	            return TruckService.getById($state.$stateParams.id);
	        }]
	    }
	};

	/** @ngInject */

	function controller($uibModalInstance, truck) {
	    var vm = this;

	    // Attributes
	    vm.truck = truck;

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {}

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 121 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/trucks/show/template.html';
	var html = "<div skl-busy=\"isLoading\">\n\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Caminhão</b>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <b>Nome:</b> {{vm.truck.name}}<br>\n                <b>Volume máximo:</b> {{vm.truck.volume}}L<br>\n                <b>CNH Necessária:</b> {{vm.truck.license}}<br>\n            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(123);

	var _controller2 = _interopRequireDefault(_controller);

	var _driverService = __webpack_require__(125);

	var _driverService2 = _interopRequireDefault(_driverService);

	var _module = __webpack_require__(126);

	var _module2 = _interopRequireDefault(_module);

	var _module3 = __webpack_require__(129);

	var _module4 = _interopRequireDefault(_module3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.drivers', [_module2.default.name, _module4.default.name]).config(config).factory('DriverService', _driverService2.default);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["DriverService"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(124);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.drivers',
	    url: '/motoristas',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller(DriverService) {
	    var vm = this;

	    init();

	    function init() {
	        DriverService.getAll().then(function (drivers) {
	            return vm.drivers = drivers;
	        });
	    }
	}

/***/ },
/* 124 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/drivers/template.html';
	var html = "<div class=\"title-with-button\">\n    <div class=\"row\">\n        <div class=\"col-md-10\">\n            <h2 class=\"page-title\">Caminhões</h2>\n        </div>\n        <div class=\"col-md-2 text-right\">\n            <a ui-sref=\"dashboard.drivers.create\" class=\"btn btn-success btn-sm\">\n                <i class=\"glyphicon glyphicon-plus\"></i>\n                Novo\n            </a>\n        </div>\n    </div>\n\n</div>\n\n<table class=\"table table-hover table-striped\">\n    <thead>\n    <tr>\n        <th>Nome</th>\n        <th>Valor hora</th>\n        <th>CNH</th>\n        <th>Distância máxima</th>\n        <th>Cidade</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr ng-repeat=\"driver in vm.drivers\">\n        <td>{{driver.name}}</td>\n        <td>{{driver.hourlyWage | currency:'R$'}}</td>\n        <td>{{driver.license}}</td>\n        <td>{{driver.maxDistance}}km</td>\n        <td>{{driver.city.city}} ({{driver.city.state}})</td>\n\n        <th>\n            <a ui-sref=\"dashboard.drivers.show({id: driver.id})\" uib-tooltip=\"Visualizar\">\n                <i class=\"glyphicon glyphicon-eye-open\"></i>\n            </a>\n            <a href=\"#\" uib-tooltip=\"Cancelar\" class=\"\">\n                <i class=\"glyphicon glyphicon-remove text-danger\"></i>\n            </a>\n        </th>\n    </tr>\n    </tbody>\n</table>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 125 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function ($q) {

	    var drivers = [{
	        id: 1,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }, {
	        id: 2,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }, {
	        id: 3,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }, {
	        id: 4,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }, {
	        id: 5,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }, {
	        id: 6,
	        name: 'Afonso',
	        hourlyWage: 30,
	        license: 'D',
	        maxDistance: 2000,
	        city: {
	            id: 400,
	            city: 'Ibirama',
	            state: 'SC'
	        }
	    }];

	    return {
	        getAll: function getAll() {
	            return $q.resolve(drivers);
	        },
	        getById: function getById(id) {
	            return $q.resolve(drivers.find(function (driver) {
	                return driver.id == id;
	            }));
	        }
	    };
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(127);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.drivers.create', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "$state"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(128);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.drivers.create',
	    url: '/new',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller($uibModalInstance, $state) {
	    var vm = this;

	    // Attributes
	    vm.options = [{
	        date: '09/10/2016',
	        price: 868.50
	    }, {
	        date: '10/10/2016',
	        price: 808.00
	    }, {
	        date: '11/10/2016',
	        price: 968.50
	    }];

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {
	        if (!vm.thisForm.$valid) {
	            return console.error('Existem erros no formulário', 'Erro de validação');
	        }

	        $state.go('dashboard.home.driver', { id: 1 });
	    }

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 128 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/drivers/create/template.html';
	var html = "<div skl-busy=\"isLoading\">\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Novo motorista</b>\n    </div>\n    <div class=\"modal-body\">\n\n\n        <form name=\"vm.thisForm\" novalidate>\n\n            <div class=\"form-group\">\n                <label>Nome</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"\">\n            </div>\n\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Valor hora</label>\n                        <input type=\"number\" class=\"form-control\">\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>CNH</label>\n                        <select class=\"form-control\"\n                                ng-model=\"vm.formDriver.license\"\n                                ng-options=\"license for license in ['B', 'C', 'D', 'E']\"></select>\n                    </div>\n                </div>\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Distância máxima</label>\n                        <input type=\"number\" class=\"form-control\">\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-4\">\n                    <div class=\"form-group\">\n                        <label>Estado</label>\n                        <select class=\"form-control\"\n                                ng-model=\"vm.formDriver.city.state\"\n                                ng-options=\"state for state in ['RS', 'SC', 'PR']\"></select>\n                    </div>\n                </div>\n                <div class=\"col-md-8\">\n                    <div class=\"form-group\">\n                        <label>Cidade</label>\n                        <select class=\"form-control\"\n                                ng-model=\"vm.formDriver.city.city\"\n                                ng-options=\"city for city in ['Ibirama', 'Rio do Sul', 'Blumenau']\"></select>\n                    </div>\n                </div>\n            </div>\n        </form>\n\n        <div class=\"clearfix\"></div>\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-default\" ng-click=\"vm.dismiss()\">Cancelar</button>\n        <button type=\"submit\"\n                ng-click=\"vm.submit(vm.model)\"\n                ng-disabled=\"!vm.thisForm.$valid\"\n                class=\"btn btn-success\">Cadastrar\n        </button>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["modalStateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(130);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.dashboard.drivers.show', []).config(config);

	/** @ngInject */

	function config(modalStateProvider) {
	    modalStateProvider.state(_controller2.default);
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$uibModalInstance", "driver"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(131);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'dashboard.drivers.show',
	    url: '/driver/{id}',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm',
	    resolve: {
	        /** @ngInject */
	        driver: ["$stateParams", "$state", "DriverService", function driver($stateParams, $state, DriverService) {
	            console.log($state.$stateParams);
	            return DriverService.getById($state.$stateParams.id);
	        }]
	    }
	};

	/** @ngInject */

	function controller($uibModalInstance, driver) {
	    var vm = this;

	    // Attributes
	    vm.driver = driver;

	    // Methods assigments
	    vm.success = success;
	    vm.dismiss = dismiss;
	    vm.submit = submit;

	    // Method implementations

	    function submit(model) {}

	    function success(result) {
	        $uibModalInstance.close(result);
	    }

	    function dismiss(reason) {
	        $uibModalInstance.dismiss(reason);
	    }
	}

/***/ },
/* 131 */
/***/ function(module, exports) {

	var path = '&bino/src/states/dashboard/drivers/show/template.html';
	var html = "<div skl-busy=\"isLoading\">\n\n    <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" ng-click=\"vm.dismiss()\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <b class=\"modal-title\">Motorista</b>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <b>Nome:</b> {{vm.driver.name}}<br>\n                <b>Valor hora:</b> {{vm.driver.volume}}L<br>\n                <b>CNH Necessária:</b> {{vm.driver.license}}<br>\n                <b>Distância máxima:</b> {{vm.driver.maxDistance}}<br>\n                <b>Cidade:</b> {{vm.driver.city.city}} ({{vm.driver.city.state}})\n            </div>\n        </div>\n\n        <div class=\"clearfix\"></div>\n    </div>\n</div>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(133);

	var _controller2 = _interopRequireDefault(_controller);

	var _module = __webpack_require__(135);

	var _module2 = _interopRequireDefault(_module);

	var _module3 = __webpack_require__(138);

	var _module4 = _interopRequireDefault(_module3);

	var _module5 = __webpack_require__(141);

	var _module6 = _interopRequireDefault(_module5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.outside', [_module2.default.name, _module6.default.name, _module4.default.name]).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(134);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'outside',
	    abstract: true,
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'ctrl',
	    /** @ngInject */
	    onEnter: ["ENV", function onEnter(ENV) {
	        ENV.app.bodyClasses.push('bg-grey');
	    }],
	    /** @ngInject */
	    onExit: ["ENV", function onExit(ENV) {
	        ENV.app.bodyClasses.pop();
	    }]
	};

	/** @ngInject */

	function controller() {
	    var ctrl = this;
	}

/***/ },
/* 134 */
/***/ function(module, exports) {

	var path = '&bino/src/states/outside/template.html';
	var html = "<ui-view></ui-view>";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(136);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.outside.404', []).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(137);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'outside.404',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller() {}

/***/ },
/* 137 */
/***/ function(module, exports) {

	var path = '&bino/src/states/outside/404/template.html';
	var html = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"text-center m-t-xxl\">\n            <h2>\n                Oops... Erro 404!\n            </h2>\n\n            <p>\n                Esta página não existe.\n            </p>\n\n            <div class=\"row\">\n                <a ui-sref=\"dashboard.home\" class=\"btn btn-link\">\n                    <span class=\"glyphicon glyphicon-home\"></span>\n                    Ir para o início\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(139);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.outside.login', []).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["Auth", "$state"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(140);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'outside.login',
	    url: '/login?redirect',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller(Auth, $state) {

	    var vm = this;

	    // Attributes
	    vm.username = 'admin1@app.com';
	    vm.password = '12345678';
	    vm.remember = true;
	    vm.loginFailed = false;

	    // Methods
	    vm.login = login;

	    function login(username, password) {

	        Auth.login(username, password).then(function () {
	            vm.loginFailed = false;
	            $state.go('outside.place-selector');
	        }).catch(function () {
	            vm.loginFailed = true;
	        });
	    }
	}

/***/ },
/* 140 */
/***/ function(module, exports) {

	var path = '&bino/src/states/outside/login/template.html';
	var html = "<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"block-center m-t-md wd-xl\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading text-center\">\n                        {{::main.app.name}}\n                </div>\n                <div class=\"panel-body\">\n                    <p class=\"text-center pv\">FAÇA LOGIN PARA CONTINUAR</p>\n                    <form role=\"form\" ng-submit=\"vm.login(vm.username, vm.password, vm.remember)\" name=\"login.loginForm\" novalidate=\"\" class=\"form-validate mb-lg\">\n\n                        <uib-alert ng-show=\"vm.loginFailed\" close=\"vm.loginFailed = false\" type=\"danger\" class=\"form-group has-feedback\">\n                            Credenciais inválidas\n                        </uib-alert>\n\n                        <div class=\"form-group has-feedback\" ng-class=\"{'has-error': vm.loginFailed}\">\n                            <input type=\"email\" placeholder=\"Email\" ng-model=\"vm.username\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-envelope form-control-feedback text-muted\"></span>\n                        </div>\n                        <div class=\"form-group has-feedback\" ng-class=\"{'has-error': vm.loginFailed}\">\n                            <input type=\"password\" placeholder=\"Senha\" ng-model=\"vm.password\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback text-muted\"></span>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-block btn-primary mt-lg\">Login</button>\n                    </form>\n\n\n                    <div class=\"clearfix\">\n                        <div class=\"pull-right\"><a ui-sref=\"outside.forgot-password\" class=\"text-muted\">Esqueceu sua senha?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-lg text-center\">\n                <span>&copy; {{::main.app.year}} - {{::main.app.name}}</span>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	config.$inject = ["$stateProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _controller = __webpack_require__(142);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.states.outside.register', []).config(config);

	/** @ngInject */

	function config($stateProvider) {
	    $stateProvider.state(_controller2.default);
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	controller.$inject = ["$state"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _template = __webpack_require__(143);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    name: 'outside.register',
	    url: '/registro',
	    templateUrl: _template2.default,
	    controller: controller,
	    controllerAs: 'vm'
	};

	/** @ngInject */

	function controller($state) {

	    var vm = this;
	}

/***/ },
/* 143 */
/***/ function(module, exports) {

	var path = '&bino/src/states/outside/register/template.html';
	var html = "<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"block-center m-t-md wd-xl\">\n            <div class=\"panel panel-primary\">\n                <div class=\"panel-heading text-center\">\n                    Cadastro\n                </div>\n                <div class=\"panel-body\">\n                    <form role=\"form\" ng-submit=\"\" name=\"login.loginForm\" novalidate=\"\" class=\"form-validate mb-lg\">\n\n                        <div class=\"form-group has-feedback\" >\n                            <input type=\"text\" placeholder=\"Nome\" ng-model=\"vm.username\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-user form-control-feedback text-muted\"></span>\n                        </div>\n\n                        <div class=\"form-group has-feedback\" >\n                            <input type=\"email\" placeholder=\"Email\" ng-model=\"vm.username\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-envelope form-control-feedback text-muted\"></span>\n                        </div>\n\n                        <div class=\"form-group has-feedback\" >\n                            <input type=\"password\" placeholder=\"Senha\" ng-model=\"vm.password\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback text-muted\"></span>\n                        </div>\n\n                        <div class=\"form-group has-feedback\" >\n                            <input type=\"password\" placeholder=\"Repita a senha\" ng-model=\"vm.password\" required=\"\" class=\"form-control\" />\n                            <span class=\"glyphicon glyphicon-lock form-control-feedback text-muted\"></span>\n                        </div>\n\n                        <button type=\"submit\" class=\"btn btn-block btn-primary mt-lg\">Cadastrar</button>\n                    </form>\n\n\n                    <div class=\"clearfix\">\n                        <div class=\"pull-right\"><a ui-sref=\"outside.login\" class=\"text-muted\">Ja tem uma conta?</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"p-lg text-center\">\n                <span>&copy; {{::main.app.year}} - {{::main.app.name}}</span>\n            </div>\n        </div>\n\n    </div>\n</div>\n";
	window.angular.module('ng').run(['$templateCache', function(c) { c.put(path, html) }]);
	module.exports = path;

/***/ }
]);