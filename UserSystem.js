
let UserData=[];
let EditIndex=null;
function AddUser(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let age=document.getElementById("age").value;
    let special=document.getElementById("specialization").value;

    let User={
        name:name,
        email:email,
        age:age,
        specialization:special
    }
    if(!name||!email||!age||!special){
        alert("Please fill your field.");
        return;
    }
    if(EditIndex===null){
        UserData.push(User);
    }
    else{
        UserData[EditIndex]=User;
        EditIndex=null;
            document.getElementById("mainBtn").innerHTML="Add User";

    }
    DisplayUser();
    ClearForm();
    
}
function DeleteUser(index){
    if(confirm("Are You Sure!")){
        UserData.splice(index,1);
        DisplayUser();
    }
    
    
}
function DisplayUser(){
    let Div=document.getElementById("usersList");
    Div.innerHTML="";
    for(let i=0;i<UserData.length;i++){
        Div.innerHTML+=`
        <div>
        <p>${UserData[i].name}</p>
        <p>${UserData[i].age}</p>
        <p>${UserData[i].email}</p>
        <p>${UserData[i].specialization}</p>
        <button onclick="EditUser(${i})">Edit</button>
        <button onclick="DeleteUser(${i})">Delete</button>
        </div>
        `
    }
}
function EditUser(index){
    let User=UserData[index]
    document.getElementById("name").value=User.name;
    document.getElementById("age").value=User.age;
    document.getElementById("email").value=User.email;
    document.getElementById("specialization").value=User.specialization;
    EditIndex=index
    document.getElementById("mainBtn").innerHTML="UpDate User";
}
function ClearForm(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("specialization").value="";
}
function SearchUser(){
    let SearchValue=document.getElementById("search").value;
    if(SearchValue===""){
        DisplayUser();
        return;
    }
    let filtered=UserData.filter(user => 
    user.name.toLowerCase().includes(SearchValue));
    
    DisplayFiltered(filtered);
}
function DisplayFiltered(list){
    let containar=document.getElementById("usersList");
    containar.innerHTML="";
    for(let i=0;i<list.length;i++){
        containar.innerHTML+=`
        <div>
        <p>${list[i].name}</p>
        </div>
        `
    }
}