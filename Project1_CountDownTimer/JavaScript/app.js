const endDate = "29 April 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input');

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    // If statement should be mentioned at this position only
    if (diff<0) return;  
    //Calculate Days
    inputs[0].value = Math.floor(diff/3600/24);
    //Calculate Hours
    inputs[1].value = Math.floor((diff/3600)%24);
    //Calculate Minutes
    inputs[2].value = Math.floor((diff/60)%60);
    //Calculate Seconds
    inputs[3].value = Math.floor(diff%60);
    // console.log(diff)
}
clock(); //initial call

setInterval(()=>{clock(),1000});
