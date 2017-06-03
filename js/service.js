app.service('briscasService',function($http){
    this.sendData = function(project_data){
      $http.post('http://jsonplaceholder.typicode.com/posts',project_data).then(function(response){
        console.log(response);
      })
    }
});
