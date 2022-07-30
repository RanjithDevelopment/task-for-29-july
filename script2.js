
// label creation function 
function  labelcreation(tag,fornam,forvalue,content){
var label=document.createElement(tag);
label.setAttribute(fornam,forvalue);
label.innerHTML=content;
return label;

}
// input field creation
function createinput(tagname,classname,classvalue,id,idvalue){

var input=document.createElement(tagname);
input.setAttribute(classname,classvalue);
input.setAttribute(id,idvalue);
return input;
}

function linebreak(a){
var brave=document.createElement(a);
return brave;
}
var label=labelcreation("label","for","fname","First Name");



var input=createinput("input","type","text","id","fname");

var lname=labelcreation("label","for","lname","Last Name");

var input2=createinput("input","type","text","id","lname");
var email=labelcreation("label","for","email","Email");
var input3=createinput("input","type","email","id","email");
var num=labelcreation("label","for","number","Number");
var input4=createinput("input","type","number","id","number");
var but=labelcreation("button","type","button","SUBMIT");

var b=linebreak("br");
var b1=linebreak("br");
var b2=linebreak("br");
var b3=linebreak("br");
var b4=linebreak("br");
var b5=linebreak("br");
var b6=linebreak("br");
var b7=linebreak("br");

document.body.append(label,b,input,b1,lname,b2,input2,b3,email,b4,input3,b5,num,b6,input4,b7,but);