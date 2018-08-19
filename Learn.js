// https://www.youtube.com/watch?v=2QJRifW-zbs
// https://www.youtube.com/watch?v=Rqf7zJg7pfY


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
