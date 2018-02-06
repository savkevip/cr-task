import angular from 'angular';
import Autocomplete from './autocomplete/autocomplete';
import Restaurant from './restaurant/restaurant';


let componentModule = angular.module('app.components', [
    Autocomplete,
    Restaurant
])

    .name;

export default componentModule;