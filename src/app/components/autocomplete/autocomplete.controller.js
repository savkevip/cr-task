class AutocompleteController {
    constructor(DataFactory) {
        'ngInject';
        this.DataFactory = DataFactory;

        this.restaurant = '';
        this.results = [];
        this.choosenRestaurant = {};

        this._active();

        this.search = () => {
            this.filteredRestaurants = [];
            this.results.forEach((restaurant) => {
                let fullRestaurantSearchedName = `${restaurant.name}, ${restaurant.address.city}`;
                if((fullRestaurantSearchedName.toLowerCase().indexOf(this.restaurant.toLowerCase()) !== -1) && this.restaurant.length) {
                    this.filteredRestaurants.push(restaurant);
                }
            });
        };

        this.selectRestaurant = (res) => {
            this.choosenRestaurant = res;
        }

    }

    _active = () => {
        this.DataFactory.getData()
            .then((response) => {
                this.results = response;
            });
    }

}

export default AutocompleteController;