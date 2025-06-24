const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clear");

searchBtn.addEventListener("click", function() {
    if (searchInput.value.trim().toLowerCase() === "beach" ||
        searchInput.value.trim().toLowerCase() === "beaches") {
            console.log("Beach search initiated");
            getData().then(data => {
                displayData(data.beaches);
            }).catch(error => {
                console.error("Error loading data:", error);
            });
    }

    if (searchInput.value.trim().toLowerCase() === "temple" ||
        searchInput.value.trim().toLowerCase() === "temples") {
            console.log("temple search initiated");
            getData().then(data => {
                displayData(data.temples);
            }).catch(error => {
                console.error("Error loading data:", error);
            });
    }

    if (searchInput.value.trim().toLowerCase() === "country" ||
        searchInput.value.trim().toLowerCase() === "countries") {
            console.log("country search initiated");
            getData().then(data => {
                const cities = data.countries.flatMap(country => country.cities);
                displayData(cities);
            }).catch(error => {
                console.error("Error loading data:", error);
            });
    }
});

async function getData() {
    console.log("Fetching travel recommendations...");
    const url = "./travel_recommendation_api.json";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        return await response.json(); // ✅ RETURN the data!

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function displayData(data) {
    const resultsContainer = document.getElementById("recommendationsList");
    resultsContainer.innerHTML = ""; // Clear previous results

    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.className = "recommendations__item";

        listItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" class="recommendations__image">
            <div class="recommendations__text">
                <h3 class="recommendations__title">${item.name}</h3>
                <p class="recommendations__description">${item.description}</p>
            </div>
        `;

        resultsContainer.appendChild(listItem); // ✅ Append to DOM
    });
}

clearBtn.addEventListener("click", function() {
    searchInput.value = ""; // Clear the input field
    const resultsContainer = document.getElementById("recommendationsList");
    resultsContainer.innerHTML = ""; // Clear the results
});
