let bios = {};

// Fetch bios from the JSON file
fetch('bios.json')
    .then(response => response.json())
    .then(data => {
        bios = data;
    })
    .catch(error => console.error('Error fetching bios:', error));

function openModal(person) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const personBio = bios[person];

    if (personBio) {
        modalBody.innerHTML = `
            <div style="text-align: center;">
                <img src="images/${person}.PNG" alt="${personBio.name}" style="border-radius: 50%; width: 150px; height: 150px;" />
                <h3><b>${personBio.name}</b></h3>
                <p>${personBio.bio}</p>
            </div>
        `;
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}