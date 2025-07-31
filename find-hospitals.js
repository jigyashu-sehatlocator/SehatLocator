const searchBar = document.getElementById("searchBar");
const cityFilter = document.getElementById("cityFilter");
const typeFilter = document.getElementById("typeFilter");
const hospitalList = document.getElementById("hospitalList");

let hospitals = [];

function renderHospitals(data) {
  hospitalList.innerHTML = "";

  if (data.length === 0) {
    hospitalList.innerHTML = "<p>No hospitals found.</p>";
    return;
  }

  data.forEach(hospital => {
    const card = document.createElement("div");
    card.className = "hospital-card";
    card.innerHTML = `
      <h3>${hospital.name}</h3>
      <p><strong>City:</strong> ${hospital.city}</p>
      <p><strong>Type:</strong> ${hospital.type}</p>
      <div class="buttons">
        <a href="tel:${hospital.phone}">☎️Call</a>
        <a href="${hospital.map}" target="_blank">🗺️Map</a>
        <a href="${hospital.website}" target="_blank">🌐Website</a>
      </div>
    `;
    hospitalList.appendChild(card);
  });
}

function applyFilters() {
  const query = searchBar.value.toLowerCase();
  const city = cityFilter.value;
  const type = typeFilter.value;

  const filtered = hospitals.filter(h => {
    const matchQuery = h.name.toLowerCase().includes(query) || h.city.toLowerCase().includes(query);
    const matchCity = city === "" || h.city === city;
    const matchType = type === "" || h.type === type;
    return matchQuery && matchCity && matchType;
  });

  renderHospitals(filtered);
}

// Load hospital data
fetch("hospitals.json")
  .then(response => response.json())
  .then(data => {
    hospitals = data;
    renderHospitals(hospitals);
  })
  .catch(error => {
    hospitalList.innerHTML = "<p>Error loading hospitals.</p>";
    console.error("Failed to load hospitals:", error);
  });

searchBar.addEventListener("input", applyFilters);
cityFilter.addEventListener("change", applyFilters);
typeFilter.addEventListener("change", applyFilters);
