


  /**
   * var container = document.getElementById("container");

var requestURL = 'cv.json';

var request = new XMLHttpRequest();
request.open(document, requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var curriculum = request.response;
    console.log(curriculum);
  }
   */

  var json = require('cv.json');
  console.log(json);