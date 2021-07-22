document.querySelector('#calculate').addEventListener('click', function () {
  const totalAmount = parseFloat(document.querySelector('#totalAmount').value);
  const procentOfServiceLevel = parseFloat(
    document.querySelector('input[name="serviceLevel"]:checked').value,
  );
  const nrPersons = document.querySelector('#nrPersons');
  const nr = parseInt(nrPersons.options[nrPersons.selectedIndex].value);

  const price = ((totalAmount * procentOfServiceLevel) / nr).toFixed(2);

  if (price) {
    document.querySelector('#valuePrice').innerHTML = price;
  } else {
    document.querySelector('#valuePrice').innerHTML = 'Verificati datele!';
  }
});
