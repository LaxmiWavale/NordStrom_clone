let price = JSON.parse(localStorage.getItem("TotalPrice"));
document.querySelector("#TotalPeise").innerHTML = "Rs." + " " + price;

document.querySelector("#Calculate").innerHTML += 100 + 50 + price;

function Final() {
  let Firstname = document.querySelector("#Name").value;
  let Lastname = document.querySelector("#LastName").value;
  let Address = document.querySelector("#Address").value;
  let Postal = document.querySelector("#Postal").value;
  let City = document.querySelector("#City").value;
  let Location = document.querySelector("#Location").value;
  let Phone = document.querySelector("#Phone").value;
  if (
    Firstname !== "" &&
    Lastname !== "" &&
    Address !== "" &&
    Postal !== "" &&
    City !== "" &&
    Location !== "" &&
    Phone !== ""
  ) {
    let details = {
      Firstname: Firstname,
      Lastname: Lastname,
      Address: Address,
      Postal: Postal,
      City: City,
      Location: Location,
      Phone: Phone,
    };
    //console.log(details);
    localStorage.setItem("details", JSON.stringify(details));

    window.location.href = "./orderPlace.html";
  }else{
	  alert("Please Fill required Details")
  }
}


function GoBack(){
	window.location.href = "../BagView/bagView.html";
}
