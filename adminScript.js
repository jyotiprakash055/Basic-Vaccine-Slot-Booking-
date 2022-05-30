{
  document.getElementById("showUsers").innerHTML="";
  let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("alluser"))?JSON.parse(localStorage.getItem("alluser")):[]
  if(user_records)
  {
    for(let i=0;i<user_records.length;i++)
    {
  let tr = document.createElement('tr');
        
  let td1 = tr.appendChild(document.createElement('td'));
  let td2 = tr.appendChild(document.createElement('td'));
  let td3 = tr.appendChild(document.createElement('td'));
  let td4 = tr.appendChild(document.createElement('td'));
  let td5 = tr.appendChild(document.createElement('td'));
  let td6 = tr.appendChild(document.createElement('td'));
  let td7 = tr.appendChild(document.createElement('td'));
  
  
  td1.innerHTML=user_records[i].username
  td2.innerHTML=user_records[i].email
  td3.innerHTML=user_records[i].age
  td4.innerHTML=user_records[i].phoneNo
  td5.innerHTML=user_records[i].adhaarNo
  td6.innerHTML=user_records[i].address
  td7.innerHTML=user_records[i].date


  document.getElementById("showUsers").appendChild(tr);


    }
  }
  }
  