let rates = document.querySelectorAll('.rate');

for(let i = 0; i < rates.length; i++) {
  let item = rates[i];
  var rate = item.dataset.rate;
  var lab = document.createElement('label');
  lab.className=`rate${rate}`;
  item.appendChild(lab);
}
