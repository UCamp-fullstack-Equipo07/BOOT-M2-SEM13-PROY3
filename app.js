const getData = async () => {
    const url = 'https://travelbriefing.org/Afghanistan?format=json';
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    setGraph(data.weather);
    setMap(data.maps);
}

const setGraph = (weather) => {

    const wLabels = Object.keys(weather);
    const wTempMin = Object.values(weather).map(item => item.tMin);
    const wTempMax = Object.values(weather).map(item => item.tMax);
    const wTempAvg = Object.values(weather).map(item => item.tAvg);

    const wPreMin = Object.values(weather).map(item => item.pMin);
    const wPreMax = Object.values(weather).map(item => item.pMax);
    const wPreAvg = Object.values(weather).map(item => item.pAvg);

    const wTempData = {
        labels: wLabels,
        datasets: [
            {
            label: 'Temperatura Minima',
            data: wTempMin,
            borderColor: 'red',
            backgroundColor: 'white',
            },
            {
            label: 'Temperatura Promedio',
            data: wTempAvg,
            borderColor: 'blue',
            backgroundColor: 'white',
            },
            {
            label:'Temperatura Maxima',
            data: wTempMax,
            borderColor: 'yellow',
            backgroundColor: 'white',
            }
        ]
        };

    const configTempChart = {
        type: 'line',
        data: wTempData,
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
            }
        },
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        configTempChart
    );

    //Precipitation Chart
    const wPreData = {
        labels: wLabels,
        datasets: [
            {
            label: 'Precipitacion Minima',
            data: wPreMin,
            borderColor: 'red',
            backgroundColor: 'white',
            },
            {
            label: 'Precipitacion Promedio',
            data: wPreAvg,
            borderColor: 'blue',
            backgroundColor: 'white',
            },
            {
            label:'Precipitacion Maxima',
            data: wPreMax,
            borderColor: 'yellow',
            backgroundColor: 'white',
            }
        ]
        };

    const configPreChart = {
        type: 'line',
        data: wPreData,
        options: {
            responsive: true,
            plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart'
            }
            }
        },
    };

    const myPreChart = new Chart(
        document.getElementById('myChartPre'),
        configPreChart
    );

}

const setMap = (maps) => {
    const myLat = Number(maps.lat);
    const myLon = Number(maps.long);
    console.log(myLat, myLon)
    const myLatLng = { lat: myLat, lng: myLon };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng,
      });
    
    new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hello World!",
    });
} 


getData();