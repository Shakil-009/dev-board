function updateDate() {
    const today = new Date();
    const day = {weekday: 'short'};
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('weekday').textContent = today.toLocaleDateString('en-US', day);
    document.getElementById('date').textContent = today.toLocaleDateString('en-US', options);
}
updateDate();