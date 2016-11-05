import DriversResource from './DriversResource'
import CitiesResource from './CitiesResource'
import StatesResource from './StatesResource'
import TrucksResource from './TrucksResource'
import RequestsResource from './RequestsResource'
import ProposalsResource from './ProposalsResource'
import AgendaEntriesResource from './AgendaEntriesResource'

export default angular.module('resources', [])
    .service('DriversResource', DriversResource)
    .service('StatesResource', StatesResource)
    .service('CitiesResource', CitiesResource)
    .service('TrucksResource', TrucksResource)
    .service('RequestsResource', RequestsResource)
    .service('ProposalsResource', ProposalsResource)
    .service('AgendaEntriesResource', AgendaEntriesResource)