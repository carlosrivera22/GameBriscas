app.service('briscasService',function($http){

  var data;
    this.sendData = function(project_data,callback){
      $http.post('/get_winner',project_data).then(function(response){
        console.log(response);
        callback(response.data);
      })
    }
/*
    this.getData = function(callback){
      callback(data);
    }
    */
/*
    this.getData = function(callback){
      $http.get('/').then(function(response){
        console.log(response);
        callback(response.data)
      })
    }
  */
});
 //http://jsonplaceholder.typicode.com/posts
