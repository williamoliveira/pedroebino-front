import DriversResource from './DriversResource'
import CitiesResource from './CitiesResource'
import StatesResource from './StatesResource'

export default angular.module("resources", [])
    .service('DriversResource', DriversResource)
    .service('StatesResource', StatesResource)
    .service('CitiesResource', CitiesResource)