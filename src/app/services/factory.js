import DataFactory from './data.factory';

let factoryModule = angular.module('factory', [])
    .factory('DataFactory', DataFactory)
    .name;

export default factoryModule;