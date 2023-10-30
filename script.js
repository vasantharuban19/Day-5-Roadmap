var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  var data = request.response;
  //console.log(data);
  var result = JSON.parse(data);
  console.log(result);
  //for accessing multiple values use looping
  //!using for loop
  for (var i = 0; i < result.length; i++) {
    console.log(result[i].area);
  } 
//!using for in loop
 for (let index in result){
    console.log(result[index].region)
 }
 //!using for of loop
 for(let obj of result){
    console.log(obj.subregion,obj.population,obj.name.common);
 }
};
