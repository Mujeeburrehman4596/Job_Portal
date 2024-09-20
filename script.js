document.getElementById('searchInput').addEventListener('input', function () {
    let filter = this.value.toUpperCase();
    let jobCards = document.getElementById('jobCards').getElementsByClassName('job-card');
    
    for (let i = 0; i < jobCards.length; i++) {
        let title = jobCards[i].getElementsByClassName('card-title')[0];
        if (title.innerHTML.toUpperCase().indexOf(filter) > -1) {
            jobCards[i].parentElement.style.display = "";
        } else {
            jobCards[i].parentElement.style.display = "none";
        }
    }
});

function showJobDetails(title, description, location, type) {
    document.getElementById('jobModalLabel').innerText = title;
    document.getElementById('jobDescription').innerHTML = `
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Type:</strong> ${type}</p>
    `;
}
