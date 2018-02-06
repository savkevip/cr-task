let DataFactory = function($http) {
    'ngInject';

    let getData = () => {
        return $http.get('https://api.myjson.com/bins/rhm55')
            .then(
                (success) => success.data.results.sort((obj1, obj2) => obj1.rating - obj2.rating).reverse(),
                (error) => console.log(error)
            );
    };

    return {
        getData
    };
};

export default DataFactory;