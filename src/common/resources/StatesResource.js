import BaseResource from './BaseResource'

export default class StatesResource extends BaseResource {

    constructor($http, ENV) {
        super($http)

        this.endpoint = `${ENV.api.baseUrl}/states`
    }
}