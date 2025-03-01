function showTime() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    document.getElementById("time").textContent = time;
}
showTime(); 

