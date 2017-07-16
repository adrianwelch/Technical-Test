angular
  .module('precedentApp')
  .controller('PrecedentCtrl', PrecedentCtrl, ['$scope', function($scope) {
  $scope.master = {};

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
  };

  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);;

PrecedentCtrl.$inject = ['$stateParams']; //$stateParams coming from ui router
function PrecedentCtrl($stateParams){
  const vm = this;
}
