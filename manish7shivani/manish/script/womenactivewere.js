import {navbar} from "../../NavbarUpdate/components/navbar.js"
document.querySelector("#c1").innerHTML=navbar()

document.querySelector("#xm9").addEventListener("click",catplus1)
function catplus1()
{
  
  console.log("hii")
  document.getElementById("zz1").style.display="block"
  document.getElementById("xm9").style.display="none"
  document.getElementById("xm10").style.display="block"

}
document.querySelector("#xm10").addEventListener("click",catplus2)
function catplus2()
{
  
  console.log("hii")
  document.getElementById("zz1").style.display="none"
  document.getElementById("xm9").style.display="block"
  document.getElementById("xm10").style.display="none"

}





window.onscroll = function() {myFunction()};

var m1mm = document.getElementById("m1mm");
var sticky = m1mm.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    m1mm.classList.add("sticky")
  } else {
    m1mm.classList.remove("sticky");
  }
}






let discat1  =()=>{
    document.getElementById("ho").style.display="block";
    document.getElementById("catplus").style.display="none";
    document.getElementById("catminus").style.display="block";
 
}
// let discat2  =()=>{
//     let cat = document.getElementById("ho").style.display="none";
//     document.getElementById("catplus").style.display="block";
//     document.getElementById("catminus").style.display="none";
 
// }
// function gendisp()
// {
//   document.getElementById("ho1").style.display="block";
//   document.getElementById("genplus").style.display="none"
//   document.getElementById("genminus").style.display="block"


// }

// function gendisp1()
// {
//   document.getElementById("ho1").style.display="none";
//   document.getElementById("genplus").style.display="block"
//   document.getElementById("genminus").style.display="none"


// }
document.querySelector("#sortname").addEventListener("change",sorting)
function sorting()
{
  var selection=document.querySelector("#sortname").value
  console.log(selection)
if(selection=="Sort By Price:High To Low")
{
    
    womenactive.sort(function(a,b)
    {
       return b.text2-a.text2
    })
    console.log(womenactive)
    displaydata(womenactive)

}
if(selection=="Sort By Price:Low To High")
{
    womenactive.sort(function(a,b)
    {
       return a.text2-b.text2
    })
    console.log(womenactive)
    displaydata(womenactive)

}
}
var womenactive = [
{
  images:
    "https://n.nordstrommedia.com/id/sr3/a330d0a3-3ec8-4855-994f-e4649153b242.jpeg?h=365&w=240&dpr=2",
  text: "Zella",
  text1:"Live In Pocket Joggers",
  text2: 5338.36
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/18eebb3f-3b6d-4936-9e65-3c742c7db1c8.jpeg?h=365&w=240&dpr=2",
  text: "New Markdown",
  text1:"Crop Ribbed Tank",
  text2: 624.18
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/ee29c0a1-326e-47f1-ba35-40bc0bfad621.jpeg?h=365&w=240&dpr=2",
  text: "Zella",
  text1:"Live In High Waist Leggings",
  text2: 4845.59

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/2b6113dd-f580-460b-b2e9-849c4b42cf39.jpeg?h=365&w=240&dpr=2",
  text: "SPANX®",
  text1:"SPANX® Longline Medium Impact Sports Bra"
  ,text2: 5584.74

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/d38ca1e4-a038-4241-bdce-32fddbb14327.jpeg?h=365&w=240&dpr=2",
  text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 3203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/532f599c-3846-476d-a41f-7863625b22fa.jpeg?h=365&w=240&dpr=2",
  text: "vuori",
  text1:"Halo Performance Zip Front Hoodie",
  text2: 7309.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/65f031ff-7063-4ac1-8f63-c0a294769c57.jpeg?h=365&w=240&dpr=2",
    text: "vuori",
  text1:"Halo Performance Zip Front Hoodie",
  text2: 7309.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/2957619e-4347-4937-8f45-bd17c8ea01a0.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 3603.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/bf16bf80-cbd0-41f7-9c9e-87d9942d1065.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2:303.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/afa33a59-6c68-48f7-b7e5-93c108595641.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 323.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/4f350f3c-16c4-4750-a20e-11c38fcc20ef.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 3203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/acd17df2-2b3b-42c3-9dcf-be6bb94227b7.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/0e345732-c367-464b-9a56-3fedd4a43c3c.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Scoop Neck Tank",
  text2: 2203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/5ef0e7f9-adaf-4c57-961c-7aa3ffcf2919.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Work For It Tank Top",
  text2: 1203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/2e7c9e84-6141-4306-ad6f-c5d013bdacf9.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Getaway Sleeveless Romper",
  text2:5203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/1d73ce37-566e-4589-bc1c-ae6db0be0ca5.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Seamless Strappy Sports Bra",
  text2:4203.02
},
];

displaydata(womenactive)

function displaydata(womenactive)
{
  document.querySelector("#d3m").innerHTML=""
womenactive.map(function (el) {
let d1 = document.createElement("div");
let i1 = document.createElement("img");
i1.src = el.images;
i1.style.height = "350px";
i1.style.width = "250px";
let p1 = document.createElement("p");
p1.innerText = el.text;
p1.style.fontSize = "20px";
let p2 = document.createElement("p");
p2.innerText = el.text1;
p2.style.fontSize = "18px";
let p3 = document.createElement("p");
p3.innerText = "INR  " + el.text2;
p3.style.fontSize = "18px";
p3.style.color="red"

d1.append(i1, p1,p2,p3);
let s2 = document.querySelector("#d3m");
s2.append(d1);
});
}