const clock = document.querySelector('.digClock')
const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')




function showColck(){
let date =new Date();
let hour = new Date().getHours() ;
let min = new Date().getMinutes();
let sec = new Date().getSeconds()
let secDgree = ((sec/ 60)*360) +90
let minDgree = ((min/ 60)*360) +90
let hourDgree = ((hour / 12) * 360) + ((min/60)*30) + 90;
// console.log(sec)
secondHand.style.transform=`rotate(${secDgree}deg)`;
minHand.style.transform=`rotate(${minDgree}deg)`;
hourHand.style.transform=`rotate(${hourDgree}deg)`;
const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(currentDate);
const dayOfMonth = date.getDate();
const year = date.getFullYear();
const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);
 
if(hour > 12){
   hour-=12
}else{
    hour='0'+hour
}
if(min<10)min='0'+min
if(sec<10)sec='0'+sec

    clock.innerHTML=`<h2>${hour} : ${min} : ${sec} ${hour>=12?'AM' : 'PM'}</h2>
    <h3>${dayName.slice(0,3)} ${dayOfMonth} ${monthName.slice(0,3)} ${year}</h3>`

}
setInterval(showColck,1000)
const currentDate = new Date();