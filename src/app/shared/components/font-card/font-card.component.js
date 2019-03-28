import template from './font-card.component.html';

class FontCardComponent {
  /* @ngInject */
  constructor(fontPreviewService) {
    this.fontPreviewService = fontPreviewService;
  }

  preview() {
    this.fontPreviewService.openDialog({font: this.font});
  }
}

export default {
  template,
  controller: FontCardComponent,
  bindings: {
    font: '=',
    showSelected: '<?'
  }
};
