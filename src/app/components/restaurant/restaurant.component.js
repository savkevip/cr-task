import template from './restaurant.html';
import controller from './restaurant.controller';
import './restaurant.scss';

let restaurant = {
    bindings: {
        choosen: '='
    },
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};

export default restaurant;