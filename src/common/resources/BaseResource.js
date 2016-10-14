export default class BaseResource{

    constructor($http){
        this.$http = $http
    }

    getEndpoint(){
        if(!this.endpoint){
            throw Error('Endpoint not defined.')
        }

        return this.endpoint
    }

    fetchMany(query){
        return this.$http
            .get(`${this.getEndpoint()}`, {
                params: query,
                paramSerializer: '$httpParamSerializerJQLike'
            })
            .then(this._getData)
            .then((data) => {
                const items = data.content || data

                const meta = { ...data }
                meta.content = undefined

                return {
                    items,
                    meta
                }
            })
    }

    fetchById(id){
        return this.$http
            .get(`${this.getEndpoint()}/${id}`)
            .then(this._getData)
    }

    create(data){
        return this.$http
            .post(`${this.getEndpoint()}`, data)
            .then(this._getData)
    }

    updateById(id, data){
        return this.$http
            .put(`${this.getEndpoint()}/${id}`, data)
            .then(this._getData)
    }

    update(data){
        return this.$http
            .put(`${this.getEndpoint()}/${data.id}`, data)
            .then(this._getData)
    }

    deleteById(id){
        return this.$http
            .delete(`${this.getEndpoint()}/${id}`)
            .then(this._getData)
    }

    _getData({ data }){
        return data
    }
}