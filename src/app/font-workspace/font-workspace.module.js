import angular from 'angular';
import FontWorkspaceComponent from './components/font-workspace/font-workspace.component';

export const fontWorkspaceModule = angular
  .module('app.font-workspace', [])
  .component('fontWorkspace', FontWorkspaceComponent)
  .name;
