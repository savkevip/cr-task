import template from './autocomplete.html';
import controller from './autocomplete.controller';
import './autocomplete.scss';

let autoComplete = {
    bindings: {},
    restrict: 'E',
    template,
    controller,
    controllerAs: 'vm'
};


export default autoComplete;