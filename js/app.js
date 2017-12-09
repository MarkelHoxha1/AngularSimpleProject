var app = angular.module("myModule", [])
							   .controller("myController", function($scope){
							   var members = [
									{name: "Juan Dela Cruz", age: "20", email: "delacruz@yahoo.com"},
									{name: "San Juan", age: "18", email: "juan@rocketmail.com"},
									{name: "Lucky Me", age: "47", email: "melucky@gogomail.com"},
									{name: "Sherlocke Holmes", age: "55", email: "holmes@24centurymail.com"},
									{name: "Pedro Loose", age: "20", email: "loose@gmail.com"}
							   ];
								$scope.members = members;
								$scope.memberView = "member_table.html";
							   });