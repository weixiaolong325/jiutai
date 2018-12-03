/*******************************************************************************
 * jsname:index_controller.js
 * author:hw
 * date:2018-10-30
 * use:玖泰金融官网项目V1.0-首页
 ******************************************************************************/
 var app = angular.module('app',[]);
 app.controller('index_controller',['$scope',function ($scope) {
    init($scope);
    // 导航
    $scope.selectNav = function (index) {
        $scope.navcur = index;
    };
    // 首页-more
    $scope.more = function () {
        
    };
    // 首页-more
    $scope.selectPost = function (index) {
        $scope.postcur = index;
    };
    // 首页-more
    $scope.selectTabli = function (index) {
        $scope.tablicur = index;
    };
    // 底部-友情链接
    $scope.selectLinks = function (index) {
        console.log(index);
    };
}]);
 // 初始化
function init($scope) {
    // 导航
    $scope.nav = nav;
    // 底部-友情链接
    $scope.links = links;
    // 首页-合作伙伴
    $scope.logos = logos;
    // 产品简介
    $scope.content2 = content2;
    // 人才招聘
    $scope.post = post;
    // 关于我们
    $scope.tabli = tabli;
    $scope.navcur = 0;
    $scope.postcur = 0;
    $scope.tablicur = 1;
    console.log($scope.navcur);
    console.log($scope.post);
}