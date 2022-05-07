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
    "https://n.nordstrommedia.com/id/sr3/a589ec3e-a3a4-445f-897e-9131a1e71091.jpeg?h=365&w=240&dpr=2",
  text: "Nordstrom",
  text1:"Hydrocotton Washcloth",
  text2: 5338.36
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/5f67ad63-e914-46a1-8a81-c809c7eb52c9.jpeg?h=365&w=240&dpr=2",
  text: "Slowtide",
  text1:"Slowtide Clive Hand Towel",
  text2: 1624.18
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/8fd50cbb-2360-4046-8a7d-24d1d444fdec.jpeg?h=365&w=240&dpr=2",
  text: "Boll & Branch",
  text1:"6-Piece Organic Cotton Spa Towel Set",
  text2: 10045.59

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/062920d9-ba82-4ca0-b493-3997d4da6954.jpeg?h=365&w=240&dpr=2",
  text: "Kassatex",
  text1:"Mateo 6-Piece Bath Towel, Hand Towel & Washcloth Set"
  ,text2: 15584.74

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/e76698a1-c512-44af-8371-e898173dcb14.jpeg?h=365&w=240&dpr=2",
  text: "Peri Home",
  text1:"Panama Stripe Shower Curtain",
  text2: 3203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/fce6f242-5375-4611-9c99-2a19566aff56.jpeg?h=365&w=240&dpr=2",
  text: "Kassatex",
  text1:"Sullivan Hand Towel",
  text2: 1709.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/5b845293-04c9-4acd-af24-c48779814c66.jpeg?h=365&w=240&dpr=2",
    text: "vuori",
  text1:"Ocean Reef Lotion Dispenser",
  text2: 7309.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/88608c77-0ab7-4a18-b53f-6cc709bec383.jpeg?h=365&w=240&dpr=2",
    text: "The Laundress",
  text1:"Forest Therapy Signature Detergent",
  text2: 3603.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/b603274e-9a78-408c-b5c7-de33984819c5.jpeg?h=365&w=240&dpr=2",
    text: "Nordstrom",
  text1:"4-Piece Hydrocotton Bath Towel & Hand Towel Set",
  text2:303.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/162cbb9e-7b07-49c2-b501-99d8ebba4f6b.jpeg?h=365&w=240&dpr=2",
    text: "Nordstrom",
  text1:"6-Piece Hydrocotton Bath Towel, Hand Towel & Washcloth Set",
  text2: 323.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/5d5c0642-1dc5-4a5b-880e-4a03e44e944e.jpeg?h=365&w=240&dpr=2",
    text: "Steamery",
  text1:"Hypoallergenic Laundry Detergent",
  text2: 3203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/fa8e08db-21fd-4fc0-8a31-7a930f236a99.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Peaceful Knot T-Shirt",
  text2: 203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/135a7600-86a9-4286-9792-5c6aee7cbafe.jpeg?h=365&w=240&dpr=2",
    text: "Hawkins New York",
  text1:"Simple Waffle Knit Bath Towel",
  text2: 2203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/e49d8555-1dbd-4bcb-99aa-a739cc9da52f.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Work For It Tank Top",
  text2: 1203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/4ffd060b-5e35-463a-a77b-02ffd58867e4.jpeg?h=365&w=240&dpr=2",
    text: "Kassatex",
  text1:"Block Pareo Beach Towel",
  text2:5203.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/e60d06ee-3506-401f-a408-fa822f963f47.jpeg?h=365&w=240&dpr=2",
    text: "Coyuchi",
  text1:"Air Weight™ Organic Cotton Wrap",
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