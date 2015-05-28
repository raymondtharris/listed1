var ListedApp = angular.module("ListedApp",["pureFine"]);

ListedApp.controller("ListedAppController", function($scope, $http){
	$scope.UserList = [];
	$http.get('/lists').success(function(data){
		//console.log(data[13]);
		$scope.UserList = data;
	});
	
	$scope.addItem = function(){		
		if($scope.newItem != null){
			var newListItem = {};
			newListItem.o_id = "14";
			newListItem.objectText = $scope.newItem;
			
			$scope.UserList.push(newListItem);
			//console.log(newListItem);
			
			$http.post('/lists', newListItem).success(function(data){
				
			});
				$scope.newItem = null;
			
		}
	}
	$scope.delElement = function(){
		//console.log(this);
		var myID = {};
		myID.payload = this.items._id;
		
		$http.post('/listsdel', myID).success(function(data){
			
		});
		$scope.UserList.splice(this.$index, 1);
	}
	
	
	$scope.tempFun = function(){
		alert('hey');
	}
	
});