const apiKey = 'pk.eyJ1Ijoic29yZW5tZXllciIsImEiOiJjbGg0amh1bmkwbHJlM2dvNXdjNGE0aXZ1In0.Wkf55-7n2KFHBtlu1XsdTQ';

const map = L.map('map', {
    maxZoom: 11.5, // Maximum zoom niveau
    minZoom: 11.5, // Minimum zoom niveau
    dragging: false, // Deaktiver dragging
  }).setView([56.161820, 10.185205], 10); // Indstil maplokation overview

map.attributionControl.addAttribution("Trafiktal 2013 - 2016 - 2022 Aarhus.dk");

// Layout til vores kort
L.tileLayer('https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=2UuoTwOfXH2aNFfFnSmjD0qYPQNfxZR1bujByvS1A6bD6uhYPumBc9GF4VDzb9Ix', {
}).addTo(map);

function disableLayer() {
    // Remove existing markers 2013
    map.removeLayer(newMarker);
    map.removeLayer(newMarker2);
    map.removeLayer(newMarker3);
    map.removeLayer(newMarker4);

    // Remove existing polylines 2013
    map.removeLayer(newPolyline1);
    map.removeLayer(newPolyline2);
    map.removeLayer(newPolyline3);
    map.removeLayer(newPolyline4);
}

let newMarker, newMarker2, newMarker3, newMarker4;
let newPolyline1, newPolyline2, newPolyline3, newPolyline4;

function addLayer() {

    // Opret markers og polylines
    // Trafiktal 2013
    newMarker = L.marker([56.140375, 10.153868]).addTo(map)
    newMarker.bindPopup('<i>Viby Ringvej</i><h1>27.500 biler</h1><b>I gennemsnitlig døgntrafik</b>');
    newMarker2 = L.marker([56.163116, 10.144955]).addTo(map)
    newMarker2.bindPopup('<i>Åby Ringvej</i><h1>25.950 biler</h1><b>I gennemsnitlig døgntrafik</b>')
    newMarker3 = L.marker([56.176730, 10.178144]).addTo(map)
    newMarker3.bindPopup('<i>Hasle Ringvej</i><h1>26.333 biler</h1><b>I gennemsnitlig døgntrafik</b>')
    newMarker4 = L.marker([56.163596, 10.185731]).addTo(map)
    newMarker4.bindPopup('<i>Vestre Ringgade</i><h1>31.700</h1><b>I gennemsnitlig døgntrafik</b>')

    newPolyline1 = L.polyline([            
        [56.153485, 10.182804], //VESTRE RINGGADE
        [56.160619, 10.182900],
        [56.161256, 10.183276],
        [56.167379, 10.190506],
        [56.167835, 10.191133],
        [56.169949, 10.195978],
        [56.171536, 10.203898],
    ], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        opacity: 1,
        weight: 4
    }).addTo(map);

    newPolyline2 = L.polyline([       
        [56.128615, 10.162165], //VIBY RINGVEJ
        [56.131803, 10.157510],
        [56.146495, 10.151949],
        [56.150229, 10.146366],
        [56.153260, 10.143863]
    ], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        opacity: 0.6,
        weight: 4
    }).addTo(map);

    newPolyline3 = L.polyline([        
        [56.171377, 10.156891], //HASLE RINGVEJ
        [56.176730, 10.178144],
        [56.182432, 10.196849],
    ], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        opacity: 0.3,
        weight: 4
    }).addTo(map);

    newPolyline4 = L.polyline([        
        [56.153753, 10.143621], //ÅBY RINGVEJ
        [56.160335, 10.143509],
        [56.164120, 10.145942],
        [56.170849, 10.156156]
    ], {
        color: 'red',
        fillColor: 'red',
        fillOpacity: 1,
        opacity: 0.1,
        weight: 4
    }).addTo(map);
    
}

function disableLayer2() {
    // Fjern DEFAULT markers 2022
    map.removeLayer(marker);
    map.removeLayer(marker2);
    map.removeLayer(marker3);
    map.removeLayer(marker4);

    // Fjern DEFAULT polylines 2022
    map.removeLayer(polyline1);
    map.removeLayer(polyline2);
    map.removeLayer(polyline3);
    map.removeLayer(polyline4);
}

let marker, marker2, marker3, marker4;
let polyline1, polyline2, polyline3, polyline4;

    // DEFAULT Trafiktal 2022 //
marker = L.marker([56.140375, 10.153868]).addTo(map)
marker.bindPopup('<i>Viby Ringvej</i><h1>28.900 biler</h1><b>I gennemsnitlig døgntrafik</b>');
marker2 = L.marker([56.163116, 10.144955]).addTo(map)
marker2.bindPopup('<i>Åby Ringvej</i><h1>36.300 biler</h1><b>I gennemsnitlig døgntrafik</b>')
marker3 = L.marker([56.176730, 10.178144]).addTo(map)
marker3.bindPopup('<i>Hasle Ringvej</i><h1>27.433 biler</h1><b>I gennemsnitlig døgntrafik</b>')
marker4 = L.marker([56.163596, 10.185731]).addTo(map)
marker4.bindPopup('<i>Vestre Ringgade</i><h1>30.267</h1><b>I gennemsnitlig døgntrafik</b>')

polyline1 = L.polyline([
    [56.128615, 10.162165],
    [56.131803, 10.157510],
    [56.146495, 10.151949],
    [56.150229, 10.146366],
    [56.153260, 10.143863]
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.4,
    weight: 4
}).addTo(map);

polyline2 = L.polyline([
    [56.153753, 10.143621],
    [56.160335, 10.143509],
    [56.164120, 10.145942],
    [56.170849, 10.156156]
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 1,
    weight: 4
}).addTo(map);

polyline3 = L.polyline([
    [56.171377, 10.156891],
    [56.176730, 10.178144],
    [56.182432, 10.196849],
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.1,
    weight: 4
}).addTo(map);

polyline4 = L.polyline([
    [56.153485, 10.182804], //VESTRE RINGGADE
    [56.160619, 10.182900],
    [56.161256, 10.183276],
    [56.167379, 10.190506],
    [56.167835, 10.191133],
    [56.169949, 10.195978],
    [56.171536, 10.203898],
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.6,
    weight: 4
}).addTo(map);

function adisableLayer2() {
    // Remove existing markers 2013
    map.removeLayer(amarker);
    map.removeLayer(amarker2);
    map.removeLayer(amarker3);
    map.removeLayer(amarker4);

    // Remove existing polylines 2013
    map.removeLayer(apolyline1);
    map.removeLayer(apolyline2);
    map.removeLayer(apolyline3);
    map.removeLayer(apolyline4);
}

    let amarker, amarker2, amarker3, amarker4;
let apolyline1, apolyline2, apolyline3, apolyline4;

    // Trafiktal 2022
    function addLayer2() {
amarker = L.marker([56.140375, 10.153868]).addTo(map)
amarker.bindPopup('<i>Viby Ringvej</i><h1>28.900 biler</h1><b>I gennemsnitlig døgntrafik</b>');
amarker2 = L.marker([56.163116, 10.144955]).addTo(map)
amarker2.bindPopup('<i>Åby Ringvej</i><h1>36.300 biler</h1><b>I gennemsnitlig døgntrafik</b>')
amarker3 = L.marker([56.176730, 10.178144]).addTo(map)
amarker3.bindPopup('<i>Hasle Ringvej</i><h1>27.433 biler</h1><b>I gennemsnitlig døgntrafik</b>')
amarker4 = L.marker([56.163596, 10.185731]).addTo(map)
amarker4.bindPopup('<i>Vestre Ringgade</i><h1>30.267</h1><b>I gennemsnitlig døgntrafik</b>')

apolyline1 = L.polyline([
    [56.128615, 10.162165],
    [56.131803, 10.157510],
    [56.146495, 10.151949],
    [56.150229, 10.146366],
    [56.153260, 10.143863]
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.4,
    weight: 4
}).addTo(map);

apolyline2 = L.polyline([
    [56.153753, 10.143621],
    [56.160335, 10.143509],
    [56.164120, 10.145942],
    [56.170849, 10.156156]
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 1,
    weight: 4
}).addTo(map);

apolyline3 = L.polyline([
    [56.171377, 10.156891],
    [56.176730, 10.178144],
    [56.182432, 10.196849],
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.1,
    weight: 4
}).addTo(map);

apolyline4 = L.polyline([
    [56.153485, 10.182804], //VESTRE RINGGADE
    [56.160619, 10.182900],
    [56.161256, 10.183276],
    [56.167379, 10.190506],
    [56.167835, 10.191133],
    [56.169949, 10.195978],
    [56.171536, 10.203898],
], {
    color: 'orange',
    fillColor: 'orange',
    fillOpacity: 1,
    opacity: 0.6,
    weight: 4
}).addTo(map);

    }

function disableLayer3() {
    // Fjern markers 2016
    map.removeLayer(remarker);
    map.removeLayer(remarker2);
    map.removeLayer(remarker3);
    map.removeLayer(remarker4);

    // Fjern polylines 2016
    map.removeLayer(repolyline1);
    map.removeLayer(repolyline2);
    map.removeLayer(repolyline3);
    map.removeLayer(repolyline4);
}

let remarker, remarker2, remarker3, remarker4;
let repolyline1, repolyline2, repolyline3, repolyline4;

    // Trafiktal 2016
    function addLayer3() {
remarker = L.marker([56.140375, 10.153868]).addTo(map)
remarker.bindPopup('<i>Viby Ringvej</i><h1>31.333 biler</h1><b>I gennemsnitlig døgntrafik</b>');
remarker2 = L.marker([56.163116, 10.144955]).addTo(map)
remarker2.bindPopup('<i>Åby Ringvej</i><h1>28.633 biler</h1><b>I gennemsnitlig døgntrafik</b>')
remarker3 = L.marker([56.176730, 10.178144]).addTo(map)
remarker3.bindPopup('<i>Hasle Ringvej</i><h1>24.200 biler</h1><b>I gennemsnitlig døgntrafik</b>')
remarker4 = L.marker([56.163596, 10.185731]).addTo(map)
remarker4.bindPopup('<i>Vestre Ringgade</i><h1>32.350</h1><b>I gennemsnitlig døgntrafik</b>')

repolyline1 = L.polyline([
    [56.128615, 10.162165], //VIBY RINGVEJ
    [56.131803, 10.157510],
    [56.146495, 10.151949],
    [56.150229, 10.146366],
    [56.153260, 10.143863]
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 1,
    opacity: 0.4,
    weight: 4
}).addTo(map);

repolyline2 = L.polyline([
    [56.153753, 10.143621], //ÅBY RINGVEJ
    [56.160335, 10.143509],
    [56.164120, 10.145942],
    [56.170849, 10.156156]
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 1,
    opacity: 0.4,
    weight: 4
}).addTo(map);

repolyline3 = L.polyline([
    [56.171377, 10.156891], //HASLE RINGVEJ
    [56.176730, 10.178144],
    [56.182432, 10.196849],
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 1,
    opacity: 0.4,
    weight: 4
}).addTo(map);

repolyline4 = L.polyline([
    [56.153485, 10.182804], //VESTRE RINGGADE
    [56.160619, 10.182900],
    [56.161256, 10.183276],
    [56.167379, 10.190506],
    [56.167835, 10.191133],
    [56.169949, 10.195978],
    [56.171536, 10.203898],
], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 1,
    opacity: 1,
    weight: 4
}).addTo(map);
    }

// Tilføj event listeners til knap elementerne
function onClick() {
    addLayer();
    disableLayer2();
    adisableLayer2();
    disableLayer3();
  }

function onClick1() {
    addLayer2();
    disableLayer();
    disableLayer3();
  }

  function onClick2() {
    addLayer3();
    disableLayer2();
    adisableLayer2();
    disableLayer();
  }
  
  // Tilføj onClick funktionen til knapperne

  const button1 = document.getElementById('button1');
  button1.addEventListener('click', onClick);
  const button2 = document.getElementById('button2');
  button2.addEventListener('click', onClick2);
  const button = document.getElementById('button');
  button.addEventListener('click', onClick1);