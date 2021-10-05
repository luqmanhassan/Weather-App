function getData() {
  formatData();
}

function formatData() {
  let card = document.createElement('div');
  card.id = 'example';
  let data1 = document.createElement('span');
  let data2 = document.createElement('span');
  let data3 = document.createElement('span');
  let data4 = document.createElement('span');
  let data5 = document.createElement('span');

  let data1text = document.createTextNode('data1');
  let data2text = document.createTextNode('data2');
  let data3text = document.createTextNode('data3');
  let data4text = document.createTextNode('data4');

  data1.appendChild(data1text);
  data2.appendChild(data2text);
  data3.appendChild(data3text);
  data4.appendChild(data4text);

  card.appendChild(data1);
  card.appendChild(data2);
  card.appendChild(data3);
  card.appendChild(data4);

  document.getElementById('data').appendChild(card);
}
