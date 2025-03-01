document.getElementById('theme-btn').addEventListener('click',function(event){
    event.preventDefault();
    let rgb = randRgb();
        document.getElementById('bg-body').style.backgroundColor = rgb;
})
randRgb = () => {
    let r,g,b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b},0.2)`;
}