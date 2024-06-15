renderDocuments = (documents) => {
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
                <button class="card-open-btn" id="card-open-btn" onclick="openPopup(${doc.id})">Open</button>
                </div>
                `;
        cardContainer.appendChild(card);
    });

    document.getElementById("document-count").innerText = documents.length;
};

renderDocuments(documents);

filterDocuments = () => {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredDocuments = documents.filter((doc) => doc.title.toLowerCase().includes(query) || doc.description.toLowerCase().includes(query));
    renderDocuments(filteredDocuments);
};

openPopup = (buttonId) => {
    popupTitle = document.getElementById("popupTitle");
    popupDescription = document.getElementById("popupDescription");

    const popupWindow = document.getElementById("popupWindow");
    popupWindow.style.display = "block";

    const clickedBtnIndex = documents.find((doc) => doc.id == buttonId);

    [popupTitle.innerText, popupDescription.innerText] = [clickedBtnIndex.title, clickedBtnIndex.description];
};

closePopup = () => {
    const popupWindow = document.getElementById("popupWindow");
    popupWindow.style.display = "none";
};

window.onclick = (click) => {
    const popupWindow = document.getElementById("popupWindow");

    if (click.target == popupWindow) {
        popupWindow.style.display = "none";
    }
};
