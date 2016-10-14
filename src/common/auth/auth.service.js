module.exports.load = function (mod) {
    mod.factory('Auth', Auth)
}

/** @ngInject */
function Auth($http, $q, $rootScope, $log, ENV, AuthBearerTokenService, AuthRefreshTokenService) {
    "use strict"

    var currentUser = null

    var endpoints = {
        me: ENV.api.baseUrl + "/profile/me",
        accessToken: ENV.api.baseUrl + ENV.api.auth.url
    }

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser,
        getCurrentUserAsync: getCurrentUserAsync,
        getCurrentUserFromServer: getCurrentUserFromServer,
        isAuthenticated: isAuthenticated,
        isAuthenticatedAsync: isAuthenticatedAsync,
        refreshToken: refreshToken
    }

    function isAuthenticated() {
        return !!currentUser
    }

    function isAuthenticatedAsync() {

        return getCurrentUserAsync()
            .then(function () {
                return $q.resolve()
            })
            .catch(function () {
                return $q.reject()
            })

    }

    function getCurrentUser() {
        return currentUser
    }

    function getCurrentUserAsync() {

        if (currentUser) {
            return $q.resolve(currentUser)
        }

        return getCurrentUserFromServer()
    }

    function getCurrentUserFromServer() {

        if (!AuthRefreshTokenService.hasToken()) {
            return $q.reject("No refresh token")
        }

        if(!AuthBearerTokenService.hasToken()){
            return refreshToken()
        }

        return $http.get(endpoints.me)
            .then(function (response) {

                if (!response.data) {
                    return $q.reject(response)
                }

                currentUser = response.data

                $rootScope.$emit("userLoaded", currentUser)

                return currentUser
            })

    }

    function login(username, password) {

        var grant = {
            grant_type: "password",
            username: username,
            password: password
        }

        var config = {
            ignoreAuthModule: true,
            headers: {
                "Authorization": "Basic " + btoa(ENV.api.auth.clientId + ':' + ENV.api.auth.clientSecret)
            }
        }

        return $http.post(endpoints.accessToken, grant, config)
            .then(function (response) {

                setTokensFromResponse(response.data)
                $rootScope.$emit("auth.authenticated")

                return getCurrentUserAsync()
            })
            .catch(function (response) {
                return $q.reject(response.data)
            })

    }

    function refreshToken() {

        if (!AuthRefreshTokenService.hasToken()) {
            return $q.reject("No refresh token")
        }

        var grant = {
            grant_type: "refresh_token",
            refresh_token: AuthRefreshTokenService.getToken(),
            client_id: ENV.api.auth.clientId,
            client_secret: ENV.api.auth.clientSecret
        }

        var config = {
            ignoreAuthModule: true
        }

        $log.debug('Refreshing token')

        return $http.post(endpoints.accessToken, grant, config)
            .then(function (response) {

                setTokensFromResponse(response.data)
                $rootScope.$emit("auth.authenticated")

                return getCurrentUserAsync()
            })
            .catch(function (response) {
                deleteTokens()
                return $q.reject(response)
            })

    }

    function logout() {
        currentUser = null
        deleteTokens()
        $rootScope.$broadcast("auth.unauthenticated")

        return $q.resolve()
    }

    function deleteTokens() {
        AuthBearerTokenService.deleteToken()
        AuthRefreshTokenService.deleteToken()
    }

    function setTokensFromResponse(response) {

        AuthBearerTokenService.setToken(response.access_token)
        AuthBearerTokenService.setExpirationTime(response.expires_in)

        AuthRefreshTokenService.setToken(response.refresh_token)
    }

}