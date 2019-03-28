import angular from 'angular';
import ngMaterial from 'angular-material';
import {
  sharedModule
} from './shared/shared.module';
import {
  fontWorkspaceModule
} from './font-workspace/font-workspace.module';

import '../../node_modules/angular-material/angular-material.min.css';
import '../style/main.css';
import '../style/helpers.css';
import '../style/font-cards.css';

angular.module('app', [
  sharedModule,
  fontWorkspaceModule,
  ngMaterial,
])
  .config(($mdIconProvider) => {
    $mdIconProvider.fontSet('md', 'material-icons');
  });

angular.element(document).ready(() => {
  angular.bootstrap(document, ['app']);
});
