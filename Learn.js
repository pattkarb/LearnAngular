// https://www.youtube.com/watch?v=IjyGjUwkMZE

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
-----------------------------------------------------------