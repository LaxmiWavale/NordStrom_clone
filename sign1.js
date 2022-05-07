import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import {footer} from "../../Sukhdev/footer/footer.js";

document.getElementById('btmnavbar').innerHTML = footer();


let arr = JSON.parse(localStorage.getItem("regst"))

arr.forEach(ele => {
    let email1 = document.getElementById("email1")
     email1.innerHTML = ele.details
});


document.getElementById("btn2").addEventListener("click",myLogin2)

let arr1 = JSON.parse(localStorage.getItem("Account1"))||[]
function myLogin2(){
    
     let first = document.getElementById("name").value
     let last = document.getElementById("name2").value
     let password = document.getElementById("password").value

    let myObj1 = {
         first_name:first,
         last_name:last,
         password1:password,
     }

     if(myObj1.first_name == "" || myObj1.last_name == "" || myObj1.password == ""){
         alert("Please fill the form")
     }
     else{
        arr1.push(myObj1)

        localStorage.setItem("Account1",JSON.stringify(arr1))
        window.location.href = "signin2.html"
     }
}