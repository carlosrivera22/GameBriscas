app.service('briscasService',function($http){
    this.sendData = function(project_data){
      $http.post('/start',project_data).then(function(response){
        console.log(response);
      })
    }

    this.getData = function(callback){
      $http.get('/hello').then(function(response){
        console.log(response);
        callback(response.data)
      })
    }
});
 //http://jsonplaceholder.typicode.com/posts
