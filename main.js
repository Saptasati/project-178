let latitude = 23.1309312, longitude = 83.1848448;
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
})
var img1 = document.querySelector("#amber")
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([ 75.784696, 26.9124384])
.addTo(map);

var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([72.8320794, 18.9219892])
.addTo(map);

var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.2269348, 28.6129167])
.addTo(map);

var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.2562515,17, 28.5534967])
.addTo(map);

var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([88.3191959, 22.5522262])
.addTo(map);
map.addControl(
    new MapboxGeoCoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
)