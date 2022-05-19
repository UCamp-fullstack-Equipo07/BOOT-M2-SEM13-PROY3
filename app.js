let countries = {
        'Afganistan': 'Afganistan',
        'Islas Aland': 'Islas Aland',
        'Albania': 'Albania',
        'Algeria': 'Argelia',
        'American Samoa': 'Samoa Americana',
        'Andorra': 'Andorra',
        'Angola': 'Angola',
        'Anguilla': 'Anguila',
        'Antigua and Barbuda': 'Antigua y Barbuda',
        'Argentina': 'Argentina',
        'Armenia': 'Armenia',
        'Aruba': 'Aruba',
        'Australia': 'Australia',
        'Austria': 'Austria',
        'Azerbaijan': 'Azerbaiyan',
        'Azores': 'Azores',
        'Bahamas': 'Bahamas',
        'Bahrain': 'Bahrain',
        'Balearic Islands': 'Islas Baleares',
        'Bangladesh': 'Bangladesh',
        'Barbados': 'Barbados',
        'Belarus': 'Bielorrusia',
        'Belgium': 'Belgica',
        'Belize': 'Belice',
        'Benin': 'Benin',
        'Bermuda': 'islas Bermudas',
        'Bhutan': 'Butan',
        'Bolivia': 'Bolivia',
        'Bonaire': 'Bonoir',
        'Bosnia and Herzegovina': 'Bosnia y Herzegovina',
        'Botswana': 'Botswana',
        'Bouvet Island': 'Isla bouvet',
        'Brazil': 'Brasil',
        'Brunei': 'Brunei',
        'Bulgaria': 'Bulgaria',
        'Burkina Faso': 'Burkina Faso',
        'Burundi': 'Burundi',
        'Cambodia': 'Camboya',
        'Cameroon': 'Camerun',
        'Canada': 'Canada',
        'Canary Islands': 'Islas Canarias',
        'Cape Verde': 'Cabo Verde',
        'Cayman Islands': 'Islas Caiman',
        'Central African Republic': 'Republica Centroafricana',
        'Chad': 'Chad',
        'Chile': 'Chile',
        'China': 'Porcelana',
        'Christmas Island': 'Isla de Navidad',
        'Cocos Islands': 'Islas Cocos',
        'Colombia': 'Colombia',
        'Comoros': 'Comoras',
        'Congo-Brazzaville': 'Congo-Brazzaville',
        'Congo-Kinshasa': 'Congo-quinshasa',
        'Cook Islands': 'Islas Cook',
        'Costa Rica': 'Costa Rica',
        'Croatia': 'Croacia',
        'Cuba': 'Cuba',
        'Curacao': 'Curacao',
        'Cyprus': 'Chipre',
        'Czech': 'checo',
        'Denmark': 'Dinamarca',
        'Djibouti': 'Djibouti',
        'Dominica': 'Dominica',
        'Dominican Republic': 'Republica Dominicana',
        'Ecuador': 'Ecuador',
        'Egypt': 'Egipto',
        'El Salvador': 'El Salvador',
        'Equatorial Guinea': 'Guinea Ecuatorial',
        'Eritrea': 'Eritrea',
        'Estonia': 'Estonia',
        'Ethiopia': 'Etiopia',
        'Falkland Islands': 'Islas Malvinas',
        'Faroe Islands': 'Islas Faroe',
        'Fiji': 'Fiji',
        'Finland': 'Finlandia',
        'France': 'Francia',
        'French Guiana': 'Guayana Francesa',
        'French Polynesia': 'Polinesia frances',
        'French Southern Territories': 'Territorios Franceses del Sur',
        'Gabon': 'Gabon',
        'Gambia': 'Gambia',
        'Georgia': 'Georgia',
        'Germany': 'Alemania',
        'Ghana': 'Ghana',
        'Gibraltar': 'Gibraltar',
        'Greece': 'Grecia',
        'Greenland': 'Groenlandia',
        'Grenada': 'Granada',
        'Guadaloupe': 'Guadalupo',
        'Guam': 'Guam',
        'Guatemala': 'Guatemala',
        'Guernsey': 'Guernsey',
        'Guinea': 'Guinea',
        'Guinea-Bissau': 'Guinea-Bissau',
        'Guyana': 'Guayana',
        'Haiti': 'Haiti',
        'Heard Island and McDonald Islands': 'Escuche Island y Islas McDonald',
        'Honduras': 'Honduras',
        'Hong Kong': 'Hong Kong',
        'Hungary': 'Hungria',
        'Iceland': 'Islandia',
        'India': 'India',
        'Indonesia': 'Indonesia',
        'Iran': 'Iran',
        'Iraq': 'Irak',
        'Ireland': 'Irlanda',
        'Isle of Man': 'Isla del hombre',
        'Israel': 'Israel',
        'Italy': 'Italia',
        'Ivory Coast': 'Costa de Marfil',
        'Jamaica': 'Jamaica',
        'Japan': 'Japon',
        'Jersey': 'Jersey',
        'Jordan': 'Jordan',
        'Kazakhstan': 'Kazajstan',
        'Kenya': 'Kenia',
        'Kiribati': 'Kiribati',
        'Kosovo': 'Kosovo',
        'Kuwait': 'Kuwait',
        'Kyrgyzstan': 'Kirguistan',
        'Laos': 'Laos',
        'Latvia': 'Letonia',
        'Lebanon': 'Libano',
        'Lesotho': 'Lesoto',
        'Liberia': 'Liberia',
        'Libya': 'Libia',
        'Liechtenstein': 'Liechtenstein',
        'Lithuania': 'Lituania',
        'Luxembourg': 'Luxemburgo',
        'Macao': 'Macao',
        'Macedonia': 'macedonia',
        'Madagascar': 'Madagascar',
        'Madeira': 'Madeira',
        'Malawi': 'Malawi',
        'Malaysia': 'Malasia',
        'Maldives': 'Maldivas',
        'Mali': 'Mali',
        'Malta': 'Malta',
        'Marshall Islands': 'Islas Marshall',
        'Martinique': 'Martinica',
        'Mauritania': 'Mauritania',
        'Mauritius': 'Mauricio',
        'Mayotte': 'Mayotte',
        'Mexico': 'Mexico',
        'Micronesia': 'Micronesia',
        'Moldava': 'Moldava',
        'Monaco': 'Monaco',
        'Mongolia': 'Mongolia',
        'Montenegro': 'Montenegro',
        'Montserrat': 'Montserrat',
        'Morocco': 'Marruecos',
        'Mozambique': 'Mozambique',
        'Myanmar': 'Myanmar',
        'Nagorno-Karabakh': 'Nagorno-karabakh',
        'Namibia': 'Namibia',
        'Nauru': 'Nauru',
        'Nepal': 'Nepal',
        'Netherlands': 'Paises Bajos',
        'New Caledonia': 'Nueva Caledonia',
        'New Zealand': 'Nueva Zelanda',
        'Nicaragua': 'Nicaragua',
        'Niger': 'Niger',
        'Nigeria': 'Nigeria',
        'Niue': 'Niue',
        'Norfolk Island': 'Isla Norfolk',
        'North Korea': 'Corea del Norte',
        'Northern Cyprus': 'El norte de Chipre',
        'Northern Mariana Islands': 'Islas Marianas del Norte',
        'Norway': 'Noruega',
        'Oman': 'Oman',
        'Pakistan': 'Pakistan',
        'Palau': 'Palau',
        'Palestine': 'Palestina',
        'Panama': 'Panama',
        'Papua New Guinea': 'Papua Nueva Guinea',
        'Paraguay': 'Paraguay',
        'Peru': 'Peru',
        'Philippines': 'Filipinas',
        'Pitcairn': 'Pitcairn',
        'Poland': 'Polonia',
        'Portugal': 'Portugal',
        'Puerto Rico': 'Puerto Rico',
        'Qatar': 'Katar',
        'Reunion': 'Reunion',
        'Romania': 'Rumania',
        'Russia': 'Rusia',
        'Rwanda': 'Ruanda',
        'Saba': 'Saba',
        'Saint Barthelemy': 'San Barthelemy',
        'Saint Eustatius': 'Santo Eustatius',
        'Saint Helena': 'Santa Helena',
        'Saint Kitts and Nevis': 'Saint Kitts y Nevis',
        'Saint Lucia': 'Santa Lucia',
        'Saint Martin-Dutch': 'Santo martin-dutch',
        'Saint Martin-French': 'Santo martin-frances',
        'Saint Pierre and Miquelon': 'Saint Pierre y Miquelon',
        'Saint Vincent and the Grenadines': 'San Vicente y las Granadinas',
        'Samoa': 'Samoa',
        'San Marino': 'San Marino',
        'Sao Tome and Principe': 'Santo Tome y Principe',
        'Saudi Arabia': 'Arabia Saudita',
        'Senegal': 'Senegal',
        'Serbia': 'Serbia',
        'Seychelles': 'Seychelles',
        'Sierra Leone': 'Sierra Leona',
        'Singapore': 'Singapur',
        'Slovakia': 'Eslovaquia',
        'Slovenia': 'Eslovenia',
        'Solomon Islands': 'Islas Salomon',
        'Somalia': 'Somalia',
        'Somaliland': 'Somalilandia',
        'South Africa': 'Sudafrica',
        'South Georgia and the South Sandwich Islands': 'Georgia del sur y las islas Sandwich del sur',
        'South Korea': 'Corea del Sur',
        'South Sudan': 'Sudan del Sur',
        'Spain': 'España',
        'Sri Lanka': 'Sri Lanka',
        'Sudan': 'Sudan',
        'Suriname': 'Surinam',
        'Svalbard and Jan Mayen': 'Svalbard y Jan Mayen',
        'Swaziland': 'Swaziland',
        'Sweden': 'Suecia',
        'Switzerland': 'Suiza',
        'Syria': 'Siria',
        'Tahiti': 'Tahiti',
        'Taiwan': 'Taiwan',
        'Tajikistan': 'Tayikistan',
        'Tanzania': 'Tanzania',
        'Thailand': 'Tailandia',
        'Timor-Leste': 'Timor-Leste',
        'Togo': 'Ir',
        'Tokelau': 'Tokelau',
        'Tonga': 'Tonga',
        'Trinidad and Tobago': 'Trinidad y Tobago',
        'Tunisia': 'Tunez',
        'Turkey': 'Pavo',
        'Turkmenistan': 'Turkmenistan',
        'Turks and Caicos Islands': 'Islas Turcas y Caicos',
        'Tuvalu': 'Tuvalu',
        'Uganda': 'Uganda',
        'Ukraine': 'Ucrania',
        'United Arab Emirates': 'Emiratos arabes Unidos',
        'United Kingdom': 'Reino Unido',
        'United States': 'Estados Unidos',
        'Uruguay': 'Uruguay',
        'Uzbekistan': 'Uzbekistan',
        'Vanuatu': 'Vanuatu',
        'Vatican City': 'Ciudad del Vaticano',
        'Venezuela': 'Venezuela',
        'Vietnam': 'Vietnam',
        'Virgin Islands-British': 'Islas Virgenes-Britanicas',
        'Virgin Islands-US': 'Islas Virgenes-US',
        'Wallis and Futuna': 'Wallis y Futuna',
        'Yemen': 'Yemen',
        'Zambia': 'Zambia',
        'Zimbabwe': 'Zimbabue',
        'America': 'America',
        'Burma': 'Birmania',
        'DRC': 'RDC',
        'East Timor': 'Timor este',
        'England': 'Inglaterra',
        'Holland': 'Holanda',
        'Holy city': 'ciudad santa',
        'Persia': 'Persia',
        'Sint Maarten': 'Sint Maarten',
}

const graph01 = document.getElementById('grafica-1');
const graph02 = document.getElementById('grafica-2');
const city = document.getElementById('ciudad');



const getData = async(city) => {
    const url = `https://travelbriefing.org/${city === '' ? 'mexico' : city}?format=json`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('404', data)
    setGraph(data.weather);
}

const setGraph = (weather) => {
    //<canvas id="myChartPre"></canvas>
    graph01.innerHTML = '<canvas id="myChart"></canvas>';
    graph02.innerHTML = '<canvas id="myChartPre"></canvas>';
    const wLabels = Object.keys(weather);
    const wTempMin = Object.values(weather).map(item => item.tMin);
    const wTempMax = Object.values(weather).map(item => item.tMax);
    const wTempAvg = Object.values(weather).map(item => item.tAvg);

    const wPreMin = Object.values(weather).map(item => item.pMin);
    const wPreMax = Object.values(weather).map(item => item.pMax);
    const wPreAvg = Object.values(weather).map(item => item.pAvg);

    const wTempData = {
        labels: wLabels,
        datasets: [{
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
                label: 'Temperatura Maxima',
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

    //myChart.destroy();

    

    //Precipitation Chart
    const wPreData = {
        labels: wLabels,
        datasets: [{
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
                label: 'Precipitacion Maxima',
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

    //myPreChart.destroy();

    
    
}

/*Banderas*/
const banderas = async (city) => {
    const url = `https://restcountries.com/v3.1/name/${city === '' ? 'mexico' : city}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)

    let container = document.getElementById('bandera-ver')
    container.innerHTML= `

    <div id="ban">
    <h4>Bandera:</h4>
    <br>
    <img src="${data[0].flags.png}"/>
    </div>
    <br>
    <p>
    <h4>Pais:</h4>
    ${data[0].name.common}
    </p>
    <br>
    <p>
    <h4>Capital:</h4>
    ${data[0].capital[0]}
    </p>
    <br>
    <p>
    <h4>Continente:</h4>
    ${data[0].continents[0]}
    </p>
    <br>
    <p>
    <h4>Area del Territorio:</h4>
    ${data[0].area} m3
    </p>
    <br>
    <p>
    <h4>Poblacion:</h4>
    ${data[0].population} habitantes
    </p>
    <br>
    <p>
    <h4>Mapa:</h4>
    <a href="${data[0].maps.googleMaps}" target="_blank">Click</a>
    </p>

    `
}


function getDatafromAPI(){

    let cityFound = city.value.toLowerCase();

/*     var results = [];
    console.log(countries.length)

    for(let i=0; i<countries.length; i++) {
        
        console.log(countries[i])

    } */

    getData(cityFound);
    banderas(cityFound);
}

getDatafromAPI();
