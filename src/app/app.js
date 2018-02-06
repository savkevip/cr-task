import angular from 'angular';
import {AppController} from './app.controller';
import appComponent from './app.component';
import Components from './components/components';
import Factory from "./services/factory";

angular.module('app', [
        Components,
        Factory
    ])

    .component('app', appComponent);