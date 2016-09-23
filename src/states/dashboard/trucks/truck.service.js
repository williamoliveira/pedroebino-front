/** @ngInject */
export default function ($q) {

    let trucks = [
        {
            id: 1,
            name: 'Volvo FH12 380',
            volume: 1000,
            license: 'D',
        },
        {
            id: 2,
            name: 'Scania 113',
            volume: 1200,
            license: 'D',
        },
        {
            id: 3,
            name: 'Scania 124',
            volume: 1700,
            license: 'E',
        },
        {
            id: 4,
            name: 'Volvo 400',
            volume: 800,
            license: 'D',
        },
        {
            id: 5,
            name: 'Volvo 333',
            volume: 1000,
            license: 'D',
        },
    ];

    return {
        getAll(){
            return $q.resolve(trucks);
        },
        getById(id){
            return $q.resolve(trucks.find((truck) => truck.id == id));
        }
    }
}