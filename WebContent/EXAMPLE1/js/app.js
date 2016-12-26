var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"EXAMPLE1/view/home.html"
	})
	.when("/blog",{
		templateUrl:"EXAMPLE1/view/blog.html"
	})
	.when("/job",{
		templateUrl:"EXAMPLE1/view/job.html"
	})
	.when("/friend",{
		templateUrl:"EXAMPLE1/view/friend.html"
	})
	.otherwise({redirectTo:"/"});
	});