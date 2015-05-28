var pf =  angular.module("pureFine",[]);

pf.directive("pfLi", function(){
	return {
		restrict:'E',
		transclude:true,
		template:"<li class='li-small'><div class='li-text' ng-transclude>what is going on </div><button class='del-x' ng-click='delElement()'>X</button></li>"
	}
});

pf.directive("pfInput", function(){
	return{
		restrict:'E',
		template:"<input class='pf-textbox' type='text'/>"
	}
});

pf.directive("addButton", function(){
	return{
		restrict:'E',
		template:"<input class='pf-button' type='submit' value='Add' />"
	}
});