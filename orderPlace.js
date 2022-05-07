let data = JSON.parse(localStorage.getItem("details"));

document.querySelector("#Name").innerHTML =
  data.Firstname + " " + data.Lastname;
document.querySelector("#address").innerHTML = data.Address;
document.querySelector("#line").innerHTML =
  data.City + " " + data.Location + " " + data.Postal;

let price = JSON.parse(localStorage.getItem("TotalPrice"));
document.querySelector("#TotalPeise").innerHTML = "Rs." + " " + price;

document.querySelector("#Calculate").innerHTML += 100 + 50 + price;

function Final() {
  let card = document.querySelector("#card").value;
  let Cvv = document.querySelector("#Cvv").value;
  let Code = document.querySelector("#Code").value;
  if (
    card !== "" &&
    Cvv !== "" &&
    Code !== "" 
  ){
    alert("Order Placed");
    window.location.href = "./womes's_page.html";
  }else{
    alert("Please Fill required Details");
  }
}

function gayab() {
  let a = document.querySelector("#checked");
  if (a.checked) {
    a.checked = false;
  }
}


