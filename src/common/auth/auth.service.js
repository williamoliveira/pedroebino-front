module.exports.load = function (mod) {
  mod.factory('Auth', Auth)
}

/** @ngInject */
function Auth($http, $q, $rootScope, $log, ENV, AuthBearerTokenService, AuthRefreshTokenService) {
  'use strict'
  
  let currentUser = null
  
  const endpoints = {
    me: ENV.api.baseUrl + '/profile/me',
    accessToken: ENV.api.baseUrl + ENV.api.auth.url
  }
  
  let retrievingUserPromise = null
  let refreshingTokenPromise = null
  
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
    
    if(retrievingUserPromise){
      return retrievingUserPromise
    }
    
    if (!AuthRefreshTokenService.hasToken()) {
      return $q.reject('No refresh token')
    }
    
    if(!AuthBearerTokenService.hasToken()){
      return refreshToken()
    }
    
    return retrievingUserPromise = $http.get(endpoints.me)
      .then(function (response) {
        
        if (!response.data) {
          return $q.reject(response)
        }
        
        currentUser = response.data
        
        $rootScope.$emit('userLoaded', currentUser)
        
        return currentUser
      })
      .finally(() => {
        retrievingUserPromise = null
      })
    
  }
  
  function login(username, password) {
    
    const grantData = {
      grant_type: 'password',
      username: username,
      password: password
    }
    
    const request = $http({
      url: endpoints.accessToken,
      method: 'POST',
      params: grantData,
      paramSerializer: '$httpParamSerializerJQLike',
      ignoreAuthModule: true,
      headers: {
        'Authorization': 'Basic ' + btoa(ENV.api.auth.clientId + ':' + ENV.api.auth.clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    
    return request
      .then(function (response) {
        
        setTokensFromResponse(response.data)
        $rootScope.$emit('auth.authenticated')
        
        return getCurrentUserAsync()
      })
      .catch(function (response) {
        return $q.reject(response.data)
      })
    
  }
  
  function refreshToken() {
    
    if(refreshingTokenPromise){
      return refreshingTokenPromise
    }
    
    return refreshingTokenPromise = (() => {
      if (!AuthRefreshTokenService.hasToken()) {
        return $q.reject('No refresh token')
      }
      
      const grantData = {
        grant_type: 'refresh_token',
        refresh_token: AuthRefreshTokenService.getToken(),
      }
      
      const request = $http({
        url: endpoints.accessToken,
        method: 'POST',
        params: grantData,
        paramSerializer: '$httpParamSerializerJQLike',
        ignoreAuthModule: true,
        headers: {
          'Authorization': 'Basic ' + btoa(ENV.api.auth.clientId + ':' + ENV.api.auth.clientSecret),
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      
      $log.debug('Refreshing token')
      
      return request
        .then(function (response) {
          
          setTokensFromResponse(response.data)
          $rootScope.$emit('auth.authenticated')
          
          return getCurrentUserAsync()
        })
        .catch(function (response) {
          deleteTokens()
          return $q.reject(response)
        })
    })()
      .finally(() => {
        refreshingTokenPromise = null
      })
  }
  
  function logout() {
    currentUser = null
    deleteTokens()
    $rootScope.$broadcast('auth.unauthenticated')
    
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