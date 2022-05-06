let data= JSON.parse(localStorage.getItem("details"))

document.querySelector("#Name").innerHTML=data.Firstname+" "+data.Lastname
document.querySelector("#address").innerHTML=data.Address
document.querySelector("#line").innerHTML=data.City+" "+data.Location+" "+data.Postal


let price = JSON.parse(localStorage.getItem("TotalPrice"));
document.querySelector("#TotalPeise").innerHTML = "Rs." + " " + price;

document.querySelector("#Calculate").innerHTML += 100 + 50 + price;

function gayab(){
	let a=document.querySelector("#checked")
	if(checked){
		a.checked=false
	}
}

function Final(){
	alert("Order Placed")
}