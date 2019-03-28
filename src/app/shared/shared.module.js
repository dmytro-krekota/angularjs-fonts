import angular from 'angular';
import LayoutComponent from './components/layout/layout.component';
import FontCardComponent from './components/font-card/font-card.component';
import FontPickerService from './services/font-picker/font-picker.service';
import FontPreviewService from './services/font-preview/font-preview.service';
import CoreService from './services/core/core.service';

export const sharedModule = angular
  .module('app.shared', [])
  .component('layout', LayoutComponent)
  .component('fontCard', FontCardComponent)
  .service('fontPickerService', FontPickerService)
  .service('fontPreviewService', FontPreviewService)
  .service('coreService', CoreService)
  .name;
