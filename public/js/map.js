
mapboxgl.accessToken=mapToken;
//mapboxgl.accessToken = 'pk.eyJ1IjoibmFua2ktMTQiLCJhIjoiY2x1MzBoZXRoMHpuNzJpbnhtYnVmNm52aiJ9.xon2LVA_R11Sn6oUerpzPg';
const map = new mapboxgl.Map({
   container: 'map', // container ID
   center: listing.geometry.coordinates, // starting position [lng, lat]
   zoom: 9 // starting zoom
});

// Create a default Marker and add it to the map.
const marker= new mapboxgl.Marker({color: "red"})
.setPopup( new mapboxgl.Popup({offset: 25})
.setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
)
.setLngLat(listing.geometry.coordinates)
.addTo(map);