import '../index.html';

import Controller from './controller';
import { $on } from './helpers';
import Template from './template';
import Store from './store';
import View from './view';
import LocalStorageService from "./localStorageService";

const storageService = new LocalStorageService('todos-vanilla-es6');
const store = new Store(storageService);

const template = new Template();
const view = new View(template);

/**
 * @type {Controller}
 */
const controller = new Controller(store, view);

const setView = () => controller.setView(document.location.hash);
$on(window, 'load', setView);
$on(window, 'hashchange', setView);
