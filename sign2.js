import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


import {footer} from "../../Sukhdev/footer/footer.js"

document.getElementById('btmnavbar').innerHTML = footer();




let arr1 = JSON.parse(localStorage.getItem("Account1"))

arr1.forEach(function(el){
    let p = document.getElementById("Name")
   
    p.innerText = `Welcome, ${el.first_name}!`
})