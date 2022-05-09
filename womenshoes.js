import {navbar} from "./navbar.js"
document.querySelector("#c1").innerHTML=navbar()


import {footer} from "./footer.js"
document.querySelector("#btmnavbar").innerHTML=footer()

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




// let discat1  =()=>{
//     document.getElementById("ho").style.display="block";
//     document.getElementById("catplus").style.display="none";
//     document.getElementById("catminus").style.display="block";
 
// }
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
    "https://n.nordstrommedia.com/id/sr3/55c3b2fa-199c-4ba7-8af4-b20d58cbf755.jpeg?h=365&w=240&dpr=2",
  text: "HOKA ONE ONE",
  text1:"Cloud X Training Shoe",
  text2: 11497
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/d9fa52af-e3a4-4155-91ad-3724526fd99b.jpeg?h=365&w=240&dpr=2",
  text: "HOKA ONE ONE",
  text1:"Bondi 7 Running Shoe (Women)",
  text2: 13124.18
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/ff24ac1d-840d-4b23-b65a-55de80bd7402.jpeg?h=365&w=240&dpr=2",
  text: "adidas",
  text1:"adidas Nizza Platform Sneaker",
  text2: 4845.59

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/20a17448-f762-4751-9d47-5070d594e995.jpeg?h=365&w=240&dpr=2",
  text: "Nike",
  text1:"Air Force 1 Sneaker (Women)"
  ,text2: 8284.74

},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/92a91705-8bbf-41d0-9b46-6e5ae37e812e.jpeg?h=365&w=240&dpr=2",
  text: "adidas",
  text1:"Swift Run Sneaker (Women)",
  text2: 6980
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/1019960a-1ad9-49d6-96ec-4a9168eb03e1.jpeg?h=365&w=240&dpr=2",
  text: "HOKA ONE ONE",
  text1:"Arahi 6 Running Shoe (Women)",
  text2: 11409.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/8bbe4325-3506-4e0d-b89f-7992fe317f29.jpeg?h=365&w=240&dpr=2",
    text: "APL",
  text1:"TechLoom Bliss Knit Running Shoe (Women)",
  text2: 17309.45
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/f390ffb3-2bbf-4166-83ad-79025796527e.jpeg?h=365&w=240&dpr=2",
    text: "Nike",
  text1:"Air Force 1 '07 SE Next Sneaker (Women)",
  text2: 9603.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/10b6a0f3-1730-4045-81b2-0fadd5c1134d.jpeg?h=365&w=240&dpr=2",
    text: "HOKA ONE ONE",
  text1:"Ora Recovery Sport Slide (Women)",
  text2:4103.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/4b6e0a39-0c77-4361-a744-cb7e5116a5ef.jpeg?h=365&w=240&dpr=2",
    text: "adidas",
  text1:"Nizza Platform Sneaker (Women)",
  text2: 6323.02
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/d8296e47-320a-44ac-9124-1baa23e39c6e.jpeg?h=365&w=240&dpr=2",
    text: "adidas",
  text1:"UltraBoost DNA Running Shoe (Women)",
  text2: 6579
},
{
  images:
    "https://n.nordstrommedia.com/id/sr3/cb1cf596-7ab7-43f2-8233-e58858d979a2.jpeg?h=365&w=240&dpr=2",
    text: "Zella",
  text1:"Cole Haan",
  text2: 2203.02
},
{
    images:
      "https://n.nordstrommedia.com/id/sr3/a1091b52-7fd2-48ea-85e2-1af09bab317a.jpeg?h=365&w=240&dpr=2",
      text: "Zella",
    text1:"Cole Haan",
    text2: 2203.02
  },
  {
    images:
      "https://n.nordstrommedia.com/id/sr3/d8fd4ae9-c1c3-4197-b914-536eaedf24cb.jpeg?q=45&dpr=2&h=365.31&w=230",
      text: "Nike",
    text1:"Cloudvista Running Shoe (Women)",
    text2: 2203.02
  },
  {
    images:
      "https://n.nordstrommedia.com/id/sr3/6100fc5d-23bb-48f7-a032-8b2f2787a005.jpeg?h=365&w=240&dpr=2",
      text: "Teva",
    text1:"'Original Universal' Slide (Women)",
    text2: 1103.02
  },
  {
    images:
      "https://n.nordstrommedia.com/id/sr3/104c9ec5-8187-49e9-9530-a0a5ac9464a1.jpeg?h=365&w=240&dpr=2",
      text: "Adidas",
    text1:"Court Vision Alta Platform Sneaker (Women)",
    text2: 3203.02
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