// var con=document.createElement("div");
// var row=document.createElement("div");
// var col=document.createElement("div");
// con.innerText="this is container";
// row.innerText="this is row";
// col.innerText="this is column ";
// con.setAttribute("class","container");
// row.setAttribute("class","row");
// col.setAttribute("class","col");
// row.append(col);
// con.append(row)s
// document.body.append(con);
// function foo(){
//     var fname=document.getElementById("fname").value;
//     console.log(fname);
//     var lname=document.getElementById("lname").value;

//     console.log(lname);
//     var email=document.getElementById("email").value;

//     console.log(email);
//     var number=document.getElementById("num").value;

//     console.log(number);
// }
// var request=new XMLHttpRequest();
// request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
// request.send();
// request.onload=function(){
//     var result=JSON.parse(request.response);
//      var res=result.filter((ele)=>ele.region==="Asia" );
//     console.log(res);
// }
//function 
var res = fetch("https://jsonplaceholder.typicode.com/posts");
res.then((data) => data.json()).then((data1) => foo(data1));

function foo(obj) {

  for (var i = 0; i <obj.length; i++) {
  
   
        var div=document.createElement("div");
        div.innerHTML=`<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h1 style="align-center">USER ID:${obj[i].userId}</h1>
          <h5 class="card-title">${obj[i].id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${obj[i].title}</h6>
          <p class="p">${obj[i].body}</p>
          </div>
      </div>`;
      document.body.append(div);
    // console.log(obj[i]);
   

  }


}

// for(var key in obj){
//   var div=document.createElement("div");
//   div.innerHTML=`<div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h5 class="card-title">StateName</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${key}</h6>
//     <p class="p">${obj[key].total.confirmed}</p>
//     </div>
// </div>`;
// document.body.append(div);
//     console.log(obj[key].total.confirmed);
// }