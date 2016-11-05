import BaseResource from './BaseResource'

export default class RequetsResource extends BaseResource {

    constructor($http, ENV) {
        super($http)

        this.endpoint = `${ENV.api.baseUrl}/requests`
    }
}