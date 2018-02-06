import template from './app.html';
import controller from './app.controller';
import './app.scss'

let appComponent = {
    bindings: {
        data: '<'
    },
    template,
    restrict: 'E',
    controller
};

export default appComponent;