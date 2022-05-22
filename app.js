import {countries, countries_api2} from './countries_arrays.js';

const graph01 = document.getElementById('grafica-1');
const graph02 = document.getElementById('grafica-2');
const electricityIcons = document.getElementById('electricity');
const city = document.getElementById('ciudad');
const container = document.getElementById('bandera-ver');
const searchButton = document.getElementById('boton');

searchButton.addEventListener('click', () => {

    let arryCountries = Object.values(countries).map(element =>{
        return element.toLowerCase();
    });

    let arryCountries_api2 = Object.values(countries_api2).map(element =>{
        return element.toLowerCase();
    });

    let cityfromSpanish = arryCountries.indexOf(city.value.toLowerCase());

    let cityfromSpanish_api2 = arryCountries_api2.indexOf(city.value.toLowerCase());

    city.value = '';

    getData(cityfromSpanish);
    flags(cityfromSpanish_api2);

});

const getData = async(cityfromSpanish) => {

    console.log(cityfromSpanish)

    if (cityfromSpanish === -1){
        graph01.innerHTML = `
        <div class="warning-container-void" id="exercise-void1">
            <div class="warning-content">
                <div class="warning-icon">
                    <svg class="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="warning-text">
                    <h3>Pais no encontrado en la base de datos.</h3>
                </div>
            </div>
        </div>`

        graph02.innerHTML = `
        <div class="warning-container-void" id="exercise-void1">
            <div class="warning-content">
                <div class="warning-icon">
                    <svg class="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="warning-text">
                    <h3>Pais no encontrado en la base de datos.</h3>
                </div>
            </div>
        </div>`

        electricityIcons.innerHTML =`
        <div class="warning-container-void" id="exercise-void1">
            <div class="warning-content">
                <div class="warning-icon">
                    <svg class="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="warning-text">
                    <h3>Pais no encontrado en la base de datos.</h3>
                </div>
            </div>
        </div>`

    }else{
        let citytoEnglish = Object.keys(countries)[cityfromSpanish];
        graph01.innerHTML = '<canvas id="myChart"></canvas>';
        graph02.innerHTML = '<canvas id="myChartPre"></canvas>';
        const url = `https://travelbriefing.org/${citytoEnglish === '' ? 'mexico' : citytoEnglish}?format=json`;
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.electricity.voltage, data.electricity.frequency, data.electricity.plugs)
        setGraph(data.weather, data.electricity);
    }



}
//GRAFICA
const setGraph = (weather, electricity) => {

    const wLabels = Object.keys(weather);
    const wTempMax = Object.values(weather).map(item => item.tMin);
    const wTempMin = Object.values(weather).map(item => item.tMax);
    const wTempAvg = Object.values(weather).map(item => item.tAvg);

    const wPreMin = Object.values(weather).map(item => item.pMin);
    const wPreMax = Object.values(weather).map(item => item.pMax);
    const wPreAvg = Object.values(weather).map(item => item.pAvg);

    const wTempData = {
        labels: wLabels,
        datasets: [{
                label: 'Temp. Minima',
                data: wTempMin,
                borderColor: 'blue',
                backgroundColor: 'transparent',
            },
            {
                label: 'Temp. Promedio',
                data: wTempAvg,
                borderColor: 'yellow',
                backgroundColor: 'transparent',
            },
            {
                label: 'Temp. Maxima',
                data: wTempMax,
                borderColor: 'red',
                backgroundColor: 'transparent',
            }
        ]
    };

    const configTempChart = {
        type: 'radar',
        data: wTempData,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
        },
    };

    

    const myChart = new Chart(
        document.getElementById('myChart'),
        configTempChart
    );

    //Precipitation Chart
    const wPreData = {
        labels: wLabels,
        datasets: [{
                label: 'PP Minima',
                data: wPreMin,
                borderColor: 'blue',
                backgroundColor: 'transparent',
            },
            {
                label: 'PP Promedio',
                data: wPreAvg,
                borderColor: 'yellow',
                backgroundColor: 'transparent',
            },
            {
                label: 'PP Maxima',
                data: wPreMax,
                borderColor: 'red',
                backgroundColor: 'transparent',
            }
        ]
    };

    const configPreChart = {
        type: 'radar',
        data: wPreData,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: false,
                    text: 'Chart.js Line Chart'
                }
            }
        },
    };

    
    
    const myPreChart = new Chart(
        document.getElementById('myChartPre'),
        configPreChart
    );
    
    console.log(electricity.plugs[0].toLowerCase())

    electricityIcons.innerHTML = `
        <div id="voltage-frequency">
            <span>${electricity.voltage + " V"}</span>
            <span>${electricity.frequency + " Hz"}</span>
        </div>`;

        electricity.plugs.map(e =>{
            electricityIcons.innerHTML += `<div id="plug"><img src="https://travelbriefing.org/sites/views/default/images/plugs/${e.toLowerCase()}.svg"></div>`
        });
}

//Banderas y Datos
const flags = async (cityfromSpanish) => {

    if (cityfromSpanish === -1){
        container.innerHTML = `
        <div class="warning-container-void" id="exercise-void1">
            <div class="warning-content">
                <div class="warning-icon">
                    <svg class="warning-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="warning-text">
                    <h3>Pais no encontrado en la base de datos.</h3>
                </div>
            </div>
        </div>`
    }else{

        let citytoEnglish = Object.keys(countries_api2)[cityfromSpanish];
        const url = `https://restcountries.com/v3.1/name/${citytoEnglish === '' ? 'mexico' : citytoEnglish}`
        const res = await fetch(url);
        const data = await res.json();
        container.innerHTML= `
    
        <div id="ban">
            <h4>Bandera:</h4>
            <br><br>
            <img src="${data[0].flags.png}"/>
        </div>
        <br><br>
        <p>
        <h4>Pais:</h4>
        ${data[0].name.common}
        </p>
        <br><br>
        <p>
        <h4>Capital:</h4>
        ${data[0].capital[0]}
        </p>
        <br><br>
        <p>
        <h4>Continente:</h4>
        ${data[0].continents[0]}
        </p>
        <br><br>
        <p>
        <h4>Area del Territorio:</h4>
        ${data[0].area} m3
        </p>
        <br><br>
        <p>
        <h4>Poblacion:</h4>
        ${data[0].population} habitantes
        </p>
        <br><br>
        <p>
        <h4>Mapa:</h4>
        <a href="${data[0].maps.googleMaps}" target="_blank">Click</a>
        </p>
        `;
    }

}


function getDatafromAPI(){

    let arryCountries = Object.values(countries).map(element =>{
        return element.toLowerCase();
    });

    let arryCountries_api2 = Object.values(countries_api2).map(element =>{
        return element.toLowerCase();
    });

    let cityfromSpanish = arryCountries.indexOf(city.value.toLowerCase());

    let cityfromSpanish_api2 = arryCountries_api2.indexOf(city.value.toLowerCase());

    city.value = '';

    getData(cityfromSpanish);
    flags(cityfromSpanish_api2);
}

function initialLoad(){
    city.value = 'mexico';
    getDatafromAPI();
}

initialLoad();
