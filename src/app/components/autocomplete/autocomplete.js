import angular from 'angular';
import autoComplete from './autocomplete.component';

let autocompleteModule = angular.module('autocomplete', [])

    .component('autocomplete', autoComplete)

    .name;

export default autocompleteModule;