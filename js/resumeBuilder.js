/*var awesomeThougths = "I am Jose and I am AWESOME!";
console.log(awesomeThougths);

funThoughts = awesomeThougths.replace("AWESOME", "FUN");
$("#main").append(funThoughts);*/

var formatterdName = HTMLheaderName.replace("%data%", "Jose Septien");
var formatterdRole = HTMLheaderRole.replace("%data%", "Student and Programer");

$("#main").prepend(formatterdRole);
$("#main").prepend(formatterdName);
