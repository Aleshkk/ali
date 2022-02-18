var temp_link = document.createElement("a");
temp_link.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";

temp_link.target = '_blank';
temp_link.innerHTML = "link";


var par = document.createElement("p");
par.innerHTML = "some text: ";
par.appendChild(temp_link);

document.getElementById("main_div").appendChild(par);
