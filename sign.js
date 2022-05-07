import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import {footer} from "../../Sukhdev/footer/footer.js";

document.getElementById('btmnavbar').innerHTML = footer();



document.getElementById("btn1").addEventListener("click",myLogin)
let arr = JSON.parse(localStorage.getItem("regst")) || []

function myLogin(){
   let input = document.getElementById("email").value

  let mySign = {
       details:input,
   }
 let flag = 0;
 let flag1 = 0;
   arr.map(function(el){
       if(input == el.details && input != ""){
          flag = 1
       }
       else if(input == ""){
           flag1 = 1
       }
       
   })
  if(flag == 1){
      alert("Go to Login")
      window.location.href = "login.html"
  }
  else{
      if(flag1 == 1){
          alert("Enter Email")
      }
      else{
          alert("SignUp Successfull")
          arr.push(mySign)
          localStorage.setItem("regst", JSON.stringify(arr))
          window.location.href = "sign1.html"
      }
  }
}