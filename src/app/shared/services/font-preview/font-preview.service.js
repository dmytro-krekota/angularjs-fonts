import template from './font-preview.html';
import './font-preview.css';

class FontPreviewController {
  /* @ngInject */
  constructor(
    $mdDialog,
    font,
    coreService,
    $scope,
  ) {
    this.$mdDialog = $mdDialog;
    this.font = font;
    this.coreService = coreService;
    this.$scope = $scope;
    this.onStyleElementLoad = this.onStyleElementLoad.bind(this);
    if (this.font.kind === 'webfonts#webfont') {
      this.styleLoaded = false;
      this.addStyleElement();
    } else {
      this.styleLoaded = true;
    }
  }

  onStyleElementLoad() {
    this.styleElement.removeEventListener('load', this.onStyleElementLoad, true);
    this.styleLoaded = true;
    this.coreService.safeScopeApply(this.$scope);
  }

  addStyleElement() {
    let id = 'font-' + btoa(this.font.family);
    if (document.getElementById(id)) {
      this.styleLoaded = true;

      return;
    }
    this.styleElement = document.createElement('link');
    this.styleElement.setAttribute('rel', 'stylesheet');
    this.styleElement.setAttribute('id', id);
    this.styleElement.setAttribute('href', 'https://fonts.googleapis.com/css?family=' + this.font.family);
    this.styleElement.addEventListener('load', this.onStyleElementLoad, true);
    document.getElementsByTagName('head')[0].appendChild(this.styleElement);
  }

  cancel() {
    this.$mdDialog.cancel();
  }
}

export default class FontPreviewService {
  /* @ngInject */
  constructor(
    $mdDialog,
  ) {
    this.$mdDialog = $mdDialog;
  }

  openDialog({font}) {
    return this.$mdDialog.show({
      template,
      locals: {font},
      controller: FontPreviewController,
      controllerAs: '$ctrl',
      multiple: true,
    });
  }
}
