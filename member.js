function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/member/member.html',
    controller: 'MemberCtrl',
    controllerAs: 'vm',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}