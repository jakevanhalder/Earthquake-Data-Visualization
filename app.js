// Initialize the map, centered globally
var map = L.map('map', {
    center: [20, 0], // Centered around the equator
    zoom: 3, // Global view
    minZoom: 3,
    maxZoom: 10,
    maxBounds: [[-85, -180], [85, 180]], // Limit the bounds to the visible world
    maxBoundsViscosity: 1.0, // Restrict movement outside the bounds
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 3,
    maxZoom: 10,
}).addTo(map);

// Fetch Earthquake Data from USGS API
async function fetchEarthquakeData() {
    try {
        const response = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching earthquake data:', error);
    }
}

// Add Earthquake Data to the Map
async function addEarthquakesToMap() {
    let earthquakeData = await fetchEarthquakeData();
    if (earthquakeData) {
        L.geoJSON(earthquakeData, {
            onEachFeature: function (feature, layer) {
                const { place, mag, time } = feature.properties;
                layer.bindPopup(`
                    <b>Location:</b> ${place}<br>
                    <b>Magnitude:</b> ${mag}<br>
                    <b>Time:</b> ${new Date(time).toLocaleString()}
                `);
            }
        }).addTo(map);
    }
}

// Call the function to add earthquake data to the map
addEarthquakesToMap();
