//localStorage.clear("user","user_records");
let sendBtn = document.getElementById('send');

sendBtn.addEventListener('click', (e) => 
{
let username,email,age,phoneNo,adhaarNo,address,date;

    username=document.getElementById("username").value;
    email=document.getElementById("email").value;
    age=document.getElementById("age").value;
    phoneNo=document.getElementById("phoneNo").value;
    adhaarNo=document.getElementById("adhaarNo").value;
    address=document.getElementById("address").value;
    date=document.getElementById("date").value;


 //Validate user name field...

     if (username == "" || username==null)  {
        alert("Name must be filled out");
      return false;
    }

 //Validate user name field...

 //Validate Email Field... 
 if (email == "" || email==null) {
  alert("Email must be filled out");
return false;
}
 //Validate age Field... 
 if (age == "" || age==null) {
  alert("Age must be filled out");
return false;
}
    //Validate Phone no Field... 
 if (phoneNo == "" || phoneNo==null) {
  alert("Phone must be filled out");
return false;
}

 //Validate adhaar Field... 
 if (adhaarNo == "" || adhaarNo==null) {
  alert("adhaar must be filled out");
return false;
}

 //Validate address Field... 
 if (address == "" || address==null) {
  alert("Address must be filled out");
return false;
}



   
 let user_records=new Array();
 user_records=JSON.parse(localStorage.getItem("alluser"))?JSON.parse(localStorage.getItem("alluser")):[]
 if(user_records.some((v)=>{return v.email==email }))
 {
   alert("duplicate data");
 }
 else
 {
   user_records.push({
   "username":username,
   "email":email,
   "age":age,
   "phoneNo":phoneNo,
   "adhaarNo":adhaarNo,
   "address":address,
   "date":date
       })
  localStorage.setItem("alluser",JSON.stringify(user_records));
  alert("data Added to the local storage");
  }

});


// Validation name field.....
function validateForm() {
 
}