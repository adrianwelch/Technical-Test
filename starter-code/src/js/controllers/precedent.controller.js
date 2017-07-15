angular
  .module('precedentApp')
  .controller('PrecedentCtrl', PrecedentCtrl);

PrecedentCtrl.$inject = ['$stateParams']; //$stateParams coming from ui router
function PrecedentCtrl($stateParams){
  const vm = this;
}
