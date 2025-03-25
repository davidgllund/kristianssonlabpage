function openModal(person) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

    // Fetch the bios.html file
    fetch('bios.html')
        .then(response => response.text())
        .then(html => {
            // Create a temporary DOM element to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Find the bio by ID
            const personBio = tempDiv.querySelector(`#${person}`);
            if (personBio) {
                // Set the modal content to the bio's HTML
                modalBody.innerHTML = personBio.innerHTML;
                modal.style.display = "block";
            } else {
                console.error(`Bio for ${person} not found.`);
            }
        })
        .catch(error => console.error('Error fetching bios.html:', error));
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}