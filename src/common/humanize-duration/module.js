import humanizeDuration from "humanize-duration";

export default angular
  .module('angular-humanize-duration', [])
  .filter('humanizeDuration', function () {
    return function (input, options) {

      const defaultOptions = {
        language: 'pt',
        largest: 2
      }

      return humanizeDuration(input, {...defaultOptions, ...options});
    };
  })