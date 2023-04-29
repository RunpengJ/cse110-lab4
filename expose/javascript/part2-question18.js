let d = new Date();
let time = d.toLocaleDateString();
setInterval(printTime, 1000);

function printTime() {
    console.log(time)
}