import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar()


let arr1 = JSON.parse(localStorage.getItem("Account1"))



document.getElementById("button").addEventListener("click",myLogin3)

function myLogin3(){
     
    let user = document.getElementById("userName1").value
    let pass = document.getElementById("password1").value

    let flag = 0;

    for(let i = 0; i<arr1.length; i++){
        if(arr1[i].first_name == user && arr1[i].password1 == pass){
            flag =1;
            break;
        }
    }
    if(flag == 1){
        alert("login Successfull")
        window.location.href = "../homepage/index.html"
    }
    else{
        alert("Login Failed")
    }
}
