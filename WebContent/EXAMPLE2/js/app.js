var app = angular.module("myApp1",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"EXAMPLE2/view/home.html",
		controller :"HomeController"
	})
	.when("/blog",{
		templateUrl:"EXAMPLE2/view/blog.html",
		controller :"BlogController"
	})
	.when("/job",{
		templateUrl:"EXAMPLE2/view/job.html",
		controller :"JobController"
	})
	.when("/friend",{
		templateUrl:"EXAMPLE2/view/friend.html",
		controller :"FriendController"
	})
	.otherwise({redirectTo:"/"});
	});