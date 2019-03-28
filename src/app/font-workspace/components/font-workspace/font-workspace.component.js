import template from './font-workspace.component.html';

class FontWorkspaceComponent {
  /* @ngInject */
  constructor(
    fontPickerService,
  ) {
    this.fontPickerService = fontPickerService;
    this.fonts = [];
  }

  configureFonts() {
    this.fontPickerService.openDialog({fonts: this.fonts}).then(fonts => {
      this.fonts = fonts;
    });
  }
}

export default {
  template,
  controller: FontWorkspaceComponent
};
