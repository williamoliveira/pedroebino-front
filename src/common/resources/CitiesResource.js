import BaseResource from './BaseResource'

export default class CitiesResource extends BaseResource {

    constructor($http, ENV) {
        super($http)

        this.endpoint = `${ENV.api.baseUrl}/cities`
    }
}