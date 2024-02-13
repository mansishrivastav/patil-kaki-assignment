const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")

const year = new Date().getFullYear();
const valentinesDay = new Date('Feb 15, 2024 00:00:00').getTime();

const updateTime=()=>{
    const today = new Date().getTime();
    const timeDifference = valentinesDay - today
    
    const hh = Math.floor(timeDifference/(1000*60*60))
    const mm = Math.floor((timeDifference%(1000*60*60))/(1000*60))
    const ss = Math.floor((timeDifference%(1000*60))/1000)
    
    hours.innerHTML = `<p class="bold">${hh<10 ? "0" + hh : hh}&nbsp;<span> : </span></p><span>Hours</span>`;
    minutes.innerHTML = `<p class="bold">${mm<10 ? "0" + mm : mm}&nbsp;<span> : </span></p><span>Minutes</span>`;
    seconds.innerHTML = `<p class="bold">${ss<10 ? "0" + ss : ss}&nbsp;</p><span>Seconds</span>`;
}
updateTime();
setInterval(updateTime, 1000);