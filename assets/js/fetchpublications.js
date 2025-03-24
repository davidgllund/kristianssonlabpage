// Fetch the JSON file and populate the publications section
fetch("./publications.json")
    .then(response => response.json())
    .then(publications => {
        let publicationsHTML = "";

        publications.forEach(pub => {
            publicationsHTML += `
                <table class="publication-table" border="1" style="width:100%; margin-bottom: 20px; border-collapse: collapse;">
                    <tr>
                        <td style="width: 20%; font-weight: bold;">${pub.date}</td>
                        <td style="width: 80%;"><a href="${pub.link}" target="_blank">${pub.title}</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><em>${pub.authors}</em></td>
                    </tr>
                </table>
            `;
        });

        // Insert the formatted publications into the div
        document.getElementById("publications-list").innerHTML = publicationsHTML;
    })
    .catch(error => console.error("Error loading publications:", error));