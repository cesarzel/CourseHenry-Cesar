const renderCards = (cards) => {
    const container = document.getElementById("movie-container"); // 🔹 Definir container dentro de la función

    if (!container) {
        console.error("Error: No se encontró el elemento con id 'movie-container'.");
        return;
    }

    container.innerHTML = ""; // 🔹 Limpiar el contenedor antes de agregar nuevas tarjetas

    cards.forEach((item) => {
        const { title, year, director, duration, genre, rate, poster } = item;

        const card = document.createElement("div");
        card.classList.add("col", "mb-4"); // 🔹 Clases para Bootstrap

        card.innerHTML = `
            <div class="card h-100 bg-dark text-light">
                <img src="${poster}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text"><strong>Director:</strong> ${director}</p>
                    <p class="card-text"><strong>Año:</strong> ${year}</p>
                    <p class="card-text"><strong>Duración:</strong> ${duration}</p>
                    <p class="card-text"><strong>Género:</strong> ${genre}</p>
                    <p class="card-text"><strong>Calificación:</strong> ${rate}</p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
};

module.exports = renderCards;
