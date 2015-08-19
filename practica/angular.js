angular.module("MyFirst",[])
.controller("FirstCon",function($scope,$http){
	$scope.nombres="Martin";
	$scope.comentarios=[
	{
		comentario: "buen tutorial",
		username: "Martin"
	},
	{
		comentario: "maso el tuto",
		username:"roberto"
	}
	];
	$scope.nuevoCom={};
	$scope.agregarCom=function(){
		$scope.comentarios.push($scope.nuevoCom);
		$scope.nuevoCom={};
	}
	$scope.posts=[];
	$scope.newPost={};
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		console.log(data);
		$scope.posts=data;
	})
	.error(function(err)
	{

	});

	$scope.addPost = function()
	{
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data,status,headers,config){
		
		$scope.posts.push($scope.newPost);
		$scope.newPost={};
	})
	.error(function(error,status,headers,config)
	{
		console.log(error);
	});

	}
});
//app.controller("secondCon",function($scope){
//})
