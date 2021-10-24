function getData() {
  const city = document.querySelector('input').value;
  let z =
    'https://api.openweathermap.org/data/2.5/weather?q=' +
    city +
    '&units=metric&appid=39421119ac66a29bc26a31e835cadcdd';

  console.log(z);
  fetch(z, {mode: 'cors'})
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      formatData(response);
    });
}

function formatData(info) {
  let card = document.createElement('div');
  card.id = 'example';
  let data1 = document.createElement('span');
  let data2 = document.createElement('span');
  let data3 = document.createElement('span');
  let data4 = document.createElement('span');
  let data5 = document.createElement('span');

  let data1text = document.createTextNode(info.name);
  let data2text = document.createTextNode(info.main.temp);
  let data3text = document.createTextNode(
    'Fells like: ' + info.main.feels_like
  );
  let data4text = document.createTextNode(
    'Humidity: ' + info.main.humidity + '%'
  );
  let data5text = document.createTextNode(
    'Wind: ' + info.wind.speed + ' km/hr'
  );

  data1.appendChild(data1text);
  data2.appendChild(data2text);
  data3.appendChild(data3text);
  data4.appendChild(data4text);
  data5.appendChild(data5text);

  card.appendChild(data1);
  card.appendChild(data2);
  card.appendChild(data3);
  card.appendChild(data4);
  card.appendChild(data5);

  document.getElementById('data').appendChild(card);
}
