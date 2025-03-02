
function disable(id) {
    document.getElementById(id).disabled = true;
}
function getTextById(id) {
    const text = document.getElementById(id).innerText;
    const convertedText = parseInt(text);
    return convertedText;
}
function msg(id1,id2){
    disable(id1);
    const text = document.getElementById(id2).innerText;
    let time = showTime();
    let count = getTextById('remaining-task');
    count = count - 1;
    document.getElementById('remaining-task').innerText = count;
    let done = getTextById('completed-task');
    done = done + 1;
    document.getElementById('completed-task').innerText = done;
    const container = document.getElementById('msg-container');
    const div = document.createElement('div');
    div.innerHTML =`<p class="bg-[#F4F7FF] w-[90%] text-sm mx-auto px-4 py-2 rounded-lg mb-5">You have Complete The Task <span class="font-semibold">${text}</span> at <span class="font-semibold">${time}</span></P>`;
    container.appendChild(div)
}

function clear(id){
    document.getElementById(id).innerHTML = "";
}