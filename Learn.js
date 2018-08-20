// https://www.youtube.com/watch?v=2QJRifW-zbs
// https://www.youtube.com/watch?v=Rqf7zJg7pfY
// https://www.youtube.com/watch?v=RsqEg1Jm9Qk   <== Ionic ang angular


// เริ่ม ต้อง โหลด library Angular ก่อน

<script type="text/javascript" src="js/angular.min.js"></script>    

// โหลด Bootstrap เพื่อความสวยงาม
//<link rel="stylesheet" href="css/bootstrap.min.css">

//แทรก tag Angular

// install plugin emmet for angular เพื่อความสะดวก

<html lang="en" ng-app> </html>

// test

{{5 * 4 }}  // ผลลัพธ์ = 20;

----------------------
twoway blinding
----------------------
<input type="text" class="form-control" ng-model="text" placeholder="input">
ทดสอบระบบ : {{text}}     
----------------------

---------------------
กำหนดค่าตั้งต้น ด้วย ng-init="......" ใน tag <body ....>

<body ng-init="price=30;qty=3;">

--------------------------------
//Loop For  *ngFor

<body ng-init="names=['Adksio','Bloske','Clogis'];">

  <ul class='list-group' ng-repeat="n in names">
    <li class="list-group-item">{{n}}</li>
  </ul>
    
--------------------------------
Object ของ Angular

<body ng-init="names=[
    {'name': 'Sombut','country': 'Mung','salary': 3030},
    {'name': 'Somchai','country': 'Jung','salary': 7000},
    {'name': 'SomYing','country': 'Bug','salary': 5000}
];">
        <table class='table'>
        <tr ng-repeat="n in names">
            <td>{{n.name}}</td>
            <td>{{n.contry}}</td>
        </tr>
        </table>

------------------------------------------------
filter ข้อมูล

        <input type="text" class="form-control" ng-model="queryString" placeholder="filter">
        <table class='table'>
            <tr ng-repeat="n in names | filter:queryString">
                <td>{{n.name}}</td>
                <td>{{n.country}}</td>
                <td>{{n.salary }}</td>
            </tr>
        </table>

----------------------------------------------------
filter ข้อมูล ระบุ Column

       <input type="text" class="form-control" ng-model="queryString.name" placeholder="filter">
        Filter by : {{queryString.name}}
        <table class='table'>
            <tr ng-repeat="n in names | filter:queryString">
                <td>{{n.name}}</td>
                <td>{{n.country}}</td>
                <td>{{n.salary }}</td>
            </tr>
        </table>
--------------------------------------
จัดรูปแบบที่จะแสดง thaibath
    <td>{{n.salary | currency:'THB' }}</td>
---------------------------------------------
order by (Sort) ข้อมูล มากไปน้อย น้อยไปมาก (-)

    <div class='container'>
        <input type="text" class="form-control" ng-model="queryString.name" placeholder="filter">
        <input type="radio" value="-salary" ng-model="sortString"> Sorting Salary
        <input type="radio" value="country" ng-model="sortString"> Sorting Country
        <table class='table'>
            <tr ng-repeat="n in names | filter:queryString | orderBy:sortString">
                <td>{{n.name}}</td>
                <td>{{n.country}}</td>
                <td>{{n.salary | currency:'THB' }} </td>
            </tr>
        </table>
    </div>

    -----------------------------------------------Adksio
    AngularJS - Expression
    การรวมกันของค่าคงที่ ตัวอักษร

    {{Hello + Hello1}}  //มองเป็นตัวแปร ไม่แสดงผล
    {{'Hello'+'Hello1'}} // ผลลัพธ์  HelloHello1;

-----------------------------------------------------------
ng-bind="price * 3" มีค่าเท่ากับ  {{price * 3}}   
    ng-bind="price";    //oneway data binding
    ng-model="price";   //twoway data binding
    {{price}}
-----------------------------------------------------------
Array 
Object
Array Object
----------------------------------------------------------
ng-repeat

    // arrObj.length   หาจำนวนข้อมูลใน Array
    // ng-if
    <div ng-if="arrObj.length >0">
        <ul class="list-group" ng-repeat="c in arrObj">
            <li class="list-group-item">{{c.name}}</li>
        </ul>
    </div>

--------------------------------------------------------
Controller  ==>ใช้เป็นตัวกลางในการสื่อสารกันระหว่าง model กับ view
    model= ตัวกลางในการสื่อสารฐานข้อมูล
    view= ตัวแสดงผลข้อมูล    

    //ประกาศ Controller

    //not work

   <html ng-app='app'>

   angular.module('app',[])   <== สร้างโมดูลขึ้นมาใหม่ชื่อว่า app

    angular.module('app',['customerModule']);
    angular.module('app')
        .controller('loginController', function($scope) {
            $scope.controllerName = 'loginController';
        });


    angular.module('customerModule',[]);
    angular.module('customerModule')
        .controller('customerController', function($scope) {
            $scope.controllerName = 'customerController';
        });

---------------------

<a href="/">Home</a> |
<a href="#/customers">Customers</a> |
<a href="#/about">About</a>

angular.module('app', ['ngRoute'])
    .controller('homeController', function ($scope) {
        $scope.controllerName = 'This is homeController';
    })
    .controller('customerController', function ($scope) {
        $scope.controllerName = 'This customerController';
    })
    .controller('customerDetailcontroller', function ($scope) {
        $scope.controllerName = 'This customerDetailController';
    })
    .controller('aboutController', function ($scope) {
        $scope.controllerName = 'This aboutController';
    })
    .config(function ($routeProvider) {
        $routeProvider
            .when(
                '/', {
                    controller: 'homeController',
                    templateUrl: 'home.html'
                }
            )
            .when(
                '/about', {
                    controller: 'aboutController',
                    templateUrl: 'about.html'
                }
            )
            .otherwise({
                redirectTo : '/'
            })
    });
--------------------------------------------------------
a Link 

    <a href="/">Home</a> |        <== link Home
    <a href="#/customers">Customers</a> |  <== link other / router
    <a href="#/about">About</a>

    <script src="js/angular-route.js"></script>

--------------------------------------------------------    
Form Validatation
<head>
  <style>
        input.ng-invalid {
            border: 2px solid red;
        }
        span {
            border: 0px;
            font-style:italic;
            color:greenyellow;
        }
    </style>
</head>

<body>
    <div class="container">
        <form name="userForm">
            <input type="text" class='form-control' ng-model="user.name" placeholder="Name" required name='name'>
            <span ng-show="userForm.name.$error.required&&!userForm.name.$pristine">Name is required</span>
            <input type="email" class='form-control' ng-model="user.email" placeholder="email" required name='email'>
            <span ng-show="userForm.email.$error.email&&!userForm.email.$pristine">Email invalid</span>
        </form>

        <pre>
            {{ userForm.name }}
        </pre>

    </div>

    <script src="js/angular.min.js"></script>
    <script src="js/angular-route.js"></script>
    <script src="script.js"></script>
</body>

-----------------------------------------------------------
Angular **************
----------------------------------------------------
ng-directives
    ng-app  ==> Application
    ng-model    ==> value of HTML control to Application
    ng-bind   ==> view of Application

การสั่งให้ Angular ทำงาน prefix ng
<div ng-app="" ng-init="firstName='John'">
    <p>The name is <span ng-bind="firstName"></span></p>
</div> 

-angular- Expressions
    <input type='text' ng-model='name'>
        {{ 5+5 }}
        {{ name }}

-angular- Application
    <div ng-app='patApp' ng-controller="firstControll" class="container">
         MyName : {{ firstName + " " + lastName}}
    </div>
    <script>
        var app = angular.module('patApp', []);
        app.controller('firstControll', function ($scope) {
            $scope.firstName = 'Pat';
            $scope.lastName = 'Tangtrakunwigit';
        })
    </script>

        *** module      => var app = angular.module('myApp', []); 
        *** controller ==> 
                    app.controller('myCtrl', function($scope) {
                        $scope.firstName= "John";
                        $scope.lastName= "Doe";
                    }); 

-angular - directives การสร้างไดเรคทีฟ

<body ng-app="patApp">
    
    <w3-test-directive></w3-test-directive>

    <script>
        var app = angular.module('patApp', []);
        app.directive('w3TestDirective', function () {
            return {
                restrict : "A",    <== E= for Element name, A=for Attribute, C=for Class, M=for Comment
                template : "<h1>This is a Directive</h1>"
            };
        });
    </script>
</body>
                    
// สร้างในหลายรูปแบบ ได้แก่
    <w3-test-directive></w3-test-directive> 
    <div w3-test-directive></div>               
    <div class="w3-test-directive"></div> 
    <!-- directive: w3-test-directive --> 


-angular-validate
    ng-model
    ng-show 
        {{myForm.myAddress.$valid}}     // ผิดรูปแบบ
        {{myForm.myAddress.$dirty}}     // มีการเปลี่ยนแปลง
        {{myForm.myAddress.$touched}}   // มีการ focus
    ng-invalid
        input.ng-invalid {
            background-color: lightblue;
        }

    ng-empty
    ng-not-empty
    ng-touched
    ng-untouched
    ng-valid
    ng-invalid
    ng-dirty
    ng-pending
    ng-pristine    


-angular -filters
    currency    ormat a number to a currency format.
    date        Format a date to a specified format.
    filter      Select a subset of items from an array.
    json        Format an object to a JSON string.
    limitTo     Limits an array/string, into a specified number of elements/characters.
    lowercase   Format a string to lower case.
    number      Format a number to a string.
    orderBy     Orders an array by an expression.
    uppercase   Format a string to upper case.

    -angular -service
    var app = angular.module('myApp', []);
    app.controller('customersCtrl', function($scope, $location) {
        $scope.myUrl = $location.absUrl();
    });

    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $http) {
    $http.get("welcome.htm").then(function (response) {
        $scope.myWelcome = response.data;
    });
    }); 

    --------------------------
    angular-SQL

<div ng-app="myApp" ng-controller="customersCtrl">
<table>
  <tr ng-repeat="x in names">
    <td>{{ x.Name }}</td>
    <td>{{ x.Country }}</td>
  </tr>
</table>
</div>
<script>
var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers_mysql.php")
    .then(function (response) {$scope.names = response.data.records;});
});
</script> 

    //file SQL php

    <?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $conn = new mysqli("myServer", "myUser", "myPassword", "Northwind");
    
    $result = $conn->query("SELECT CompanyName, City, Country FROM Customers");
    
    $outp = "";
    while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
        if ($outp != "") {$outp .= ",";}
        $outp .= '{"Name":"'  . $rs["CompanyName"] . '",';
        $outp .= '"City":"'   . $rs["City"]        . '",';
        $outp .= '"Country":"'. $rs["Country"]     . '"}';
    }
    $outp ='{"records":['.$outp.']}';
    $conn->close();
    
    echo($outp);
    ?>    

    ----------------------------
    DOM

        <p ng-show="true">I am visible.</p>
        <p ng-show="false">I am not visible.</p>

        ng-hide // true or false
    ----------------------------
    Events
        ng-click
        ng-dblclick
        ng-change
        ng-mouseover
        .............
    ----------------------------
    ng-Switch

    <form>
    Select a topic:
    <select ng-model="myVar">
      <option value="">
      <option value="dogs">Dogs
      <option value="tuts">Tutorials
      <option value="cars">Cars
    </select>
  </form>
  
  <div ng-switch="myVar">
    <div ng-switch-when="dogs">
       <h1>Dogs</h1>
       <p>Welcome to a world of dogs.</p>
    </div>
    <div ng-switch-when="tuts">
       <h1>Tutorials</h1>
       <p>Learn from examples.</p>
    </div>
    <div ng-switch-when="cars">
       <h1>Cars</h1>
       <p>Read about cars.</p>
    </div>
  </div>

 ----------------------------------- 
includes
    <div ng-include="'myFile.htm'"></div>
------------------------------------
AngularJS Animations
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.js"></script>
------------------------------------
Routing

<body ng-app="myApp">
    <p><a href="#/!">Main</a></p>
    <a href="#!red">Red</a>
    <a href="#!green">Green</a>
    <a href="#!blue">Blue</a>
    <div ng-view></div>
<script>
    var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "main.htm"
        })
        .when("/red", {
            templateUrl : "red.htm"
        })
        .when("/green", {
            templateUrl : "green.htm"
        })
        .when("/blue", {
            templateUrl : "blue.htm"
        });
    });
</script>
</body>
------------------------------------
