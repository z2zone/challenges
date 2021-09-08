const obejctive = "1 Oct 2021";

const remainderDays = document.getElementById("days");
const remainderHours = document.getElementById("hours");
const remainderMinutes = document.getElementById("minutes");
const remainderSeconds = document.getElementById("seconds");

function countDown(){
    const obejctiveDate = new Date(obejctive);
    const currentDate = new Date();
    const remainderDate = obejctiveDate - currentDate;
    const totalSeconds = remainderDate/1000;

    const days = Math.floor(totalSeconds/( 60 * 60 * 24));
    const hours = Math.floor((totalSeconds/(60 * 60))) % 24 ;
    const minutes = Math.floor((totalSeconds/60)) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    remainderDays.innerHTML = days;
    remainderHours.innerHTML = hours;
    remainderMinutes.innerHTML = minutes;
    remainderSeconds.innerHTML = seconds;
}   

setInterval(() => {
    countDown();
}, 1000);