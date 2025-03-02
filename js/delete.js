document.getElementById('clear-history').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('msg-container').innerHTML = "";
})