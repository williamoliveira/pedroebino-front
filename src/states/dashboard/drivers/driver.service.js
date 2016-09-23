/** @ngInject */
export default function ($q) {

    let drivers = [
        {
            id: 1,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
        {
            id: 2,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
        {
            id: 3,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
        {
            id: 4,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
        {
            id: 5,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
        {
            id: 6,
            name: 'Afonso',
            hourlyWage: 30,
            license: 'D',
            maxDistance: 2000,
            city: {
                id: 400,
                city: 'Ibirama',
                state: 'SC'
            }
        },
    ];

    return {
        getAll(){
            return $q.resolve(drivers);
        },
        getById(id){
            return $q.resolve(drivers.find((driver) => driver.id == id));
        }
    }
}