const storedInfo = localStorage.getItem("userInformation");

if(storedInfo){
  getUserInfo();
}else{
  storeUserInfo();
}
function storeUserInfo(){
  const fName = prompt("Enter your first name");
  const lName = prompt("Enter your last name");
  const country = prompt("Enter your country");
  const number = prompt("Enter your phone number");
  const state = prompt("Enter your state");
  const city = prompt("Enter your city");
  const village = prompt("Enter your village");

const userInfo = {
  fName,
  lName,
  country,
  number,
  state,
  city,
  village,
};
localStorage.setItem("userInformation", JSON.stringify(userInfo));

document.getElementById("first-name").innerHTML=userInfo.fName
document.getElementById("last-name").innerHTML=userInfo.lName
document.getElementById("country").innerHTML=userInfo.country
document.getElementById("phone-number").innerHTML=userInfo.number
document.getElementById("state").innerHTML=userInfo.state
document.getElementById("city").innerHTML=userInfo.city
document.getElementById("village").innerHTML=userInfo.village
}
// storeUserInfo();

function getUserInfo(){
  const userInfo=JSON.parse(storedInfo);

  document.getElementById("first-name").textContent=userInfo.fName
  document.getElementById("last-name").textContent=userInfo.lName
  document.getElementById("country").textContent=userInfo.country
  document.getElementById("phone-number").textContent=userInfo.number
  document.getElementById("state").textContent=userInfo.state
  document.getElementById("city").textContent=userInfo.city
  document.getElementById("village").textContent=userInfo.village
}