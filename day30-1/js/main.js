


var text="";

for(var i = 0; i < 5; i++)
{
    text += "The number is "+i+"<br>";
}

//console.log(text);

document.getElementById('text').innerHTML = text;

var tek="";

for(var i = 1; i < 20; i+=2)
{
    tek += "The number is "+i+"<br>";
}

//console.log(text);

document.getElementById('tek').innerHTML = tek;

var person = {firstName: "John", lastName: "Doe", age: 25};


var textP = '';

var z;

for (z in person){
	textP += z + ": " + person[z] + "<br>";
}

document.getElementById('person').innerHTML = textP;

var names = ['Steve','Bill','Mark'];
var textN="";
var y;

for(y of names){
	textN+= " , " + y;
}

document.getElementById('name').innerHTML = textN;

var txt = "Javascript";
var textStr = ""
var s;


for(s of txt){
	textStr+= s+ "<br>";
}

document.getElementById('textStr').innerHTML = textStr;

// Do while loop

var n = 0;
do{
	n = n + 1;
	console.log(n);
}while(n < 5);

console.log("---------------------");

// While loop

var j = 0;
while(j < 5){
	
	console.log(j);
    j = j + 1;
}

console.log("---------------------");


//Challange 1

var Snames = ['Steve','Bill','Mark'];

var students ="";
    for(var i=0;i<Snames.length;i++){
        students+=Snames[i]+'<br>';
    }
    document.getElementById('nr1').innerHTML = students;



var addstudent = document.getElementById('addStudent');
var addName = document.getElementById('sname');

addstudent.onclick = function(){
    Snames.push(addName.value);
    addNameF(Snames);

}
function addNameF(Snames){
    var students ="";
    for(var i=0;i<Snames.length;i++){
        students+=Snames[i]+'<br>';
    }
    document.getElementById('nr1').innerHTML = students;
}


//Rregullar expresions 
//input values

var text1 = document.getElementById('text1');
var btn1 = document.getElementById('btn1');
var addedtext = document.getElementById('addedtext');

btn1.onclick = function(){
    addedtext.innerHTML = text1.value;
}