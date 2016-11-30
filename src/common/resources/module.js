import DriversResource from "./DriversResource";
import CitiesResource from "./CitiesResource";
import StatesResource from "./StatesResource";
import TrucksResource from "./TrucksResource";
import UsersResource from "./UsersResource";
import RequestsResource from "./RequestsResource";
import ProposalsResource from "./ProposalsResource";
import AgendaEntriesResource from "./AgendaEntriesResource";

export default angular.module('resources', [])
  .service('driversResource', DriversResource)
  .service('statesResource', StatesResource)
  .service('citiesResource', CitiesResource)
  .service('trucksResource', TrucksResource)
  .service('usersResource', UsersResource)
  .service('requestsResource', RequestsResource)
  .service('proposalsResource', ProposalsResource)
  .service('agendaEntriesResource', AgendaEntriesResource)