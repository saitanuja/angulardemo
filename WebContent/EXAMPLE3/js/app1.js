var app = angular.module("myApp2",["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"EXAMPLE3/view/home.html",
		controller :"HomeController"
	})
	.when("/blog",{
		templateUrl:"EXAMPLE3/view/blog.html",
		controller :"BlogController"
	})
	.when("/job",{
		templateUrl:"EXAMPLE3/view/job.html",
		controller :"JobController"
	})
	.when("/friend",{
		templateUrl:"EXAMPLE3/view/friend.html",
		controller :"FriendController"
	})
	.when("/login",{
		templateUrl:"EXAMPLE3/view/login.html",
		controller :"LoginController"
	})
	.when("/logout",{
		templateUrl:"EXAMPLE3/view/logout.html",
		controller :"LogoutController"
	})
	.otherwise({redirectTo:"/"});
	});