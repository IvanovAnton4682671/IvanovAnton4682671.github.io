$(document).ready(function() {  
    PopUpHide();
});

function PopUpShow() {
    $("#popup1").show();
}

function PopUpHide() {
    $("#popup1").hide();
}

function Send() {
var json = '{"key": "Форма была отправлена"}';
var obj = JSON.parse(json);
alert(obj.key);
var xhr = new XMLHttpRequest();
function go() {
  xhr.open('GET', '/web8/json/a.txt', false);
  xhr.send();
  var element = document.getElementById('frag');
  element.innerHTML = xhr.responseText;
  return false;
    }
}