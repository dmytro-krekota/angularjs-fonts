import template from './font-picker.html';
import './font-picker.css';
import systemFonts from '../../../../public/json/system-fonts.json';

class FontPickerController {
  /* @ngInject */
  constructor(
    $mdDialog,
    coreService,
    $http,
    fonts,
  ) {
    this.$mdDialog = $mdDialog;
    this.coreService = coreService;
    this.googleFonts;
    this.systemFonts = systemFonts;

    this.setIsSelected(this.systemFonts, fonts);

    $http.get('https://content.googleapis.com/webfonts/v1/webfonts?key=' + this.coreService.getAPIKey())
      .then(response => {
        this.googleFonts = response.data.items;
        this.setIsSelected(this.googleFonts, fonts);
      });
  }

  setIsSelected(targetFonts, previousFonts) {
    targetFonts.forEach(item => {
      item.isSelected = previousFonts.some(font => font.family === item.family);
    });
  }

  cancel() {
    this.$mdDialog.cancel();
  }

  ok() {
    let selectedFonts = [...this.systemFonts, ...this.googleFonts].filter(item => item.isSelected);
    selectedFonts.forEach(item => {
      delete item.isSelected;
    });
    this.$mdDialog.hide(selectedFonts);
  }
}

export default class FontPickerService {
  /* @ngInject */
  constructor(
    $mdDialog,
  ) {
    this.$mdDialog = $mdDialog;
  }

  openDialog({fonts}) {
    return this.$mdDialog.show({
      template,
      locals: {fonts},
      controller: FontPickerController,
      controllerAs: '$ctrl',
      multiple: true,
    });
  }
}
