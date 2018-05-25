var homeModule = angular.module('empModule',[]);

homeModule.controller('empController',['$scope','$location','$routeParams',function($scope,$location,$routeParams){

    $scope.emp_json_data = [{
        "id":1,
        "name":"John",
        "phone":"9999999999",
        "address":{
            "city":"Pune",
            "address_line1":"ABC road",
            "address_line2":"XYZ building",
            "postal_code":"12455"
        }
    },
    {
        "id":2,
        "name":"Jacob",
        "phone":"AZ99A99PQ9",
        "address":{
            "city":"Pune",
            "address_line1":"PQR road",
            "address_line2":"ABC building",
            "postal_code":"13455"
        }
    },
    {
        "id":3,
        "name":"Ari",
        "phone":"145458522",
        "address":{
            "city":"Mumbai",
            "address_line1":"ABC road",
            "address_line2":"XYZ building",
            "postal_code":"12455"
        }
    }
];
 

// check localStorage

if(localStorage.getItem('newEmp')!=null){

    $scope.emp_json_data = JSON.parse(localStorage.getItem('newEmp'));
}

// add new click function 

$scope.add_new_clicked = function(){

    $location.path('employees/add');
}

// add employee object

$scope.add_emp = {};

// add employee function

$scope.add_emp_function = function(){

    $scope.last_id = $scope.emp_json_data.length-1;

    $scope.add_emp.id = $scope.emp_json_data[$scope.last_id].id+1;

    if(localStorage.getItem('newEmp')==null){

        $scope.emp_json_data.push($scope.add_emp);

        localStorage.setItem('newEmp',JSON.stringify($scope.emp_json_data));

        $location.path('/');

    }else{
        $scope.empData = JSON.parse(localStorage.getItem('newEmp'));

        $scope.empData.push($scope.add_emp);

        localStorage.setItem('newEmp',JSON.stringify($scope.empData));

        $location.path('/');
    }

    }

    // click edit button
    
    $scope.edit_click_function = function(emp){

        var route = '/employee/'+emp.id+'/edit';

        $location.path(route);
    }

    // get url params and edit data

    if($routeParams.id){

        if(localStorage.getItem('newEmp')==null){

            $scope.empData = $scope.emp_json_data;
        }else{

            $scope.empData = JSON.parse(localStorage.getItem('newEmp'));
        }

        for(var i=0;i<$scope.empData.length;i++){

            if($scope.empData[i].id==$routeParams.id){

                $scope.add_emp = $scope.empData[i];

                $scope.add = true;

                $scope.edit = true;

                $scope.ind = i;

                break;
            }
        }
    }

    // edit employee function

    $scope.edit_emp_function = function(){

        if(localStorage.getItem('newEmp')==null){

            $scope.empData = $scope.emp_json_data;

            $scope.empData[$scope.ind] = $scope.add_emp;

        }else{

            $scope.empData[$scope.ind] = $scope.add_emp;
        }       

        localStorage.setItem('newEmp',JSON.stringify($scope.empData));

        $location.path('/');

    }

}]);