var icloud = angular.module('icloud',[]);
icloud.controller('main',['$scope',function($scope){
  $scope.savedata = function(){
    localStorage.list = angular.toJson($scope.qingdanlist)
  };
  if(localStorage.list){
    $scope.qingdanlist = angular.fromJson(localStorage.list)
  }else{
    $scope.qingdanlist = [];
  }

  $scope.currentqd = null;
  var colors = ['purple','green','blue','yellow','brown','pink','orange'];
  var qingdan = {};
  $scope.addliebiao = function(){
    var len = $scope.qingdanlist.length;
    qingdan = {
      id:(len === 0)?10001:(Math.max.apply('',$scope.qingdanlist.map(function(v,i){
        return v.id
      }))+1),
      name:'新清单'+(len+1),
      color:colors[len%7],
      shixiang:[
      ],
    };
    $scope.currentqd = qingdan;
    $scope.qingdanlist.push(qingdan);
    this.savedata();
  }
  $scope.shanchu = function(id){
    $scope.qingdanlist =$scope.qingdanlist.filter(function(v,i){
      return v.id !== id;
    })
      $scope.currentqd=$scope.qingdanlist[0];
    this.savedata()
  }
  $scope.addshixiang = function(){
    var shix = [{name:"事项",state:false}];
    qingdan.shixiang = shix;
    $scope.currentqd = qingdan;
    $scope.qingdanlist.push(qingdan);
    this.savedata()
  }
  $scope.gaibian = function(index){
    $scope.currentqd = $scope.qingdanlist[index]
  }
}])
