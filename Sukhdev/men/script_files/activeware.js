

const url= `https://www2.hm.com/en_in/men/shop-by-product/tshirts-tank-tops/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=model&offset=72&page-size=36`



const shoes_url = `https://www2.hm.com/en_in/men/shop-by-product/shoes/_jcr_content/main/productlisting.display.json?sort=stock&image-size=small&image=stillLife&offset=36&page-size=36`


// sorting activeware urls 

const lth_url = `https://www2.hm.com/en_in/men/shop-by-product/tshirts-tank-tops/_jcr_content/main/productlisting.display.json?sort=ascPrice&image-size=small&image=model`

const htl_url = `https://www2.hm.com/en_in/men/shop-by-product/tshirts-tank-tops/_jcr_content/main/productlisting.display.json?sort=descPrice&image-size=small&image=model`

const new_url = `https://www2.hm.com/en_in/men/shop-by-product/tshirts-tank-tops/_jcr_content/main/productlisting.display.json?sort=newProduct&image-size=small&image=model`







// Import activewar components
import {colourSection} from '../../components/activeware_comp.js'

import {user_rating} from '../../components/activeware_comp.js'

import { navbar } from "../../../NavbarUpdate/components/navbar.js";

document.getElementById("navbar_sd").innerHTML = navbar()







async function activewareData(){

    try{
        const res = await fetch(url);

        const data = await res.json();
        // console.log(data.products)
        appendData(data.products)


    }
    catch(err){
        console.log("err",err)

    }
}

activewareData(url);


let results = document.getElementById("append_items_sd");

function appendData(data){
    // console.log(data)
    results.innerHTML ="";

    data.forEach( function(elem){
        
    let box = document.createElement("div");
    box.setAttribute("id","box_active")


    let img = document.createElement("img");
    img.setAttribute("id","img_active")
    img.src= elem.image[0].src

    let colo = document.createElement("div");
    colo.setAttribute("id","colo_sd")
    colo.innerHTML = colourSection();
    // console.log(colo)

    let title = document.createElement("p");
    title.setAttribute("id","tit_active")
    title.innerText= elem.title;

    let price = document.createElement("p");
    price.setAttribute("id","pri_active")
    price.innerText= `INR ${elem.price}`;

    let user_rat = document.createElement("div");
    user_rat.innerHTML = user_rating();

    box.append(img,colo,title,price,user_rat);

    results.append(box);


    } )

}


// Sorting activeware 

// low to high price fetch call 
async function sortingDatalth(){

    try{
        
        const res = await fetch(lth_url);
        const data = await res.json()
        // console.log(data.products)
        appendData(data.products)


    }
    catch(err){
        console.log("err :",err)
    }
}

// High to low price fetch call 
async function sortingDatahtl(){

    try{
        
        const res = await fetch(htl_url);
        const data = await res.json()
        // console.log(data.products)
        appendData(data.products)


    }
    catch(err){
        console.log("err :",err)
    }
}

// latest items fetch call 

async function sortingDatanew(){

    try{
        
        const res = await fetch(new_url);
        const data = await res.json()
        // console.log(data.products)
        appendData(data.products)


    }
    catch(err){
        console.log("err :",err)
    }
}



// sortingData()






 document.getElementById("sort_opt").addEventListener("change",sortItems);
//  document.getElementById("sort_opt").addEventListener("change",sortingData);

function sortItems(){

    
    
    let select = document.getElementById("sort_opt").value;
    // console.log(select)
    
    if(select == "lth"){
     
        sortingDatalth()

    }
    if(select== "htl"){

        sortingDatahtl()
    }
    if(select=="new"){

        sortingDatanew()
    }
}





