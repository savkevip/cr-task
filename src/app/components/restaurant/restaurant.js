import angular from 'angular';
import restaurant from './restaurant.component';

let restaurantModule = angular.module('restaurant', [])

    .component('restaurant', restaurant)

    .name;

export default restaurantModule;