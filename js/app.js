'use strict';

angular.module('test', [
  'ngRoute','ngMessages','empModule'
 
]).
config(['$routeProvider', function($routeProvider) {

	// ...........home............//

	$routeProvider.when('/', {templateUrl: 'modules/employee/view/employee.html',controller:'empController'});

	$routeProvider.when('/employees/add', {templateUrl: 'modules/employee/view/addEmp.html',controller:'empController'});

	$routeProvider.when('/employee/:id/:edit', {templateUrl: 'modules/employee/view/addEmp.html',controller:'empController'});
   
	//$routeProvider.otherwise({redirectTo: '/'});
}]);

