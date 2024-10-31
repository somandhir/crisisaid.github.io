const options = {
    // Required: API key
    key: 'ux9eO9rsyLApyfGqQmTzbr7CjDnvJ76Q', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 50.4,
    lon: 14.3,
    zoom: 5,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map
    map.setView([20.5937, 78.9629], 5); // Center coordinates for India, zoom level 5
    store.set('overlay', 'temp'); // 'temp' is the key for the temperature overlay

    
});