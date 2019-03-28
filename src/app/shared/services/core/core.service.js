export default class CoreService {
  /* @ngInject */
  constructor(
    $rootScope
  ) {
    this.$rootScope = $rootScope;
  }

  getAPIKey() {
    return atob('QUl' + (2 + 4) + 'YVN5QWhpWk1mc01EaHdyQld4RTBMeFFBMzVBSjZTQWtLdWhv');
  }

  safeScopeApply(scope, func) {
    const digestPhase = this.$rootScope.$$phase;
    if (digestPhase !== '$apply' && digestPhase !== '$digest') {
      scope.$apply(func);
    }
  }
}
