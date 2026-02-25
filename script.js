const canvas = document.getElementById("calculator");
const ctx = canvas.getContext("2d");

//declare a variable for Celsius Temperature
let celsiustemp = prompt("Enter the temperature in Celsius:");
// 1st condition 
if (celsiustemp !== null) {
  //parseFloat ensures celsiustemp is a number
  let fahrenheit = (parseFloat(celsiustemp) * 9 / 5) + 32;
  console.log(fahrenheit);

  ctx.fillStyle = "white";
  ctx.font = "50px Gothic";
  ctx.fillText(celsiustemp + "°C is " + fahrenheit.toFixed(2) + "°F", 100, 100);
}
else {
  alert('please enter a valid number');
}

//declare a variable for windspeed
let windspeedkmh = prompt("Enter a valid wind speed in km/h:");

//2nd condition windspeed
if (windspeedkmh !== null) {
  let knotswindspeed = parseFloat(windspeedkmh) * 0.539957;
  console.log(knotswindspeed)

  ctx.fillStyle = "#F35348";
  ctx.font = "60 px Gothic";
  ctx.fillText(windspeedkmh + "km/h is " + knotswindspeed.toFixed(1) + "knots", 80, 200);
}
else {
  alert("please enter a valid number");
}

//3rd condition for day of the week
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];

console.log(dayName);

if (dayName === "Saturday" || dayName === "Sunday") {
  alert(`It's ${dayName} today, don't come to school`);

  ctx.fillStyle = "#3C91E6";
  ctx.font = "40px Gothic";
  ctx.fillText(`It's ${dayName} TODAY!`, 100, 300)
}
else {
  alert(`It's ${dayName} today, come to school`)

  ctx.fillStyle = "#ABA376";
  ctx.font = "40px Gothic";
  ctx.fillText(`It's ${dayName} today.`, 100, 300)
}


/* for adding the span element to uppercase in JS rather than CSS*/
let headline = document.querySelector("#temp-headline");
headline.innerHTML = headline.innerHTML.toUpperCase();




