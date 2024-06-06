function renderDocuments(documents) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    documents.forEach((doc) => {
        const card = document.createElement("div");
        card.className = "document-card";
        card.innerHTML = `
            <div class="document-preview"><input type="checkbox" /></div>
            <div class="card-info">
                <span class="document-title">${doc.title}</span>
                <span class="document-description">${doc.description}</span>
                <button class="card-open-btn">Open</button>
            </div>
        `;
        cardContainer.appendChild(card);
    });

    document.getElementById("document-count").textContent = documents.length;
}

function filterDocuments() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredDocuments = documents.filter((doc) => doc.title.toLowerCase().includes(query) || doc.description.toLowerCase().includes(query));
    renderDocuments(filteredDocuments);
}

renderDocuments(documents);
