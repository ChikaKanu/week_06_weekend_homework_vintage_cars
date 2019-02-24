
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const getNewItemForm = document.querySelector('#get-new-item-form');
  getNewItemForm.addEventListener('submit', handlegetNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

  const handlegetNewItemFormSubmit = function (event){
  event.preventDefault();

  const inputDisplayNewListItem = createInputDisplayNewListItem(event.target);
  const displayNewList = document.querySelector('#input-display');
  displayNewList.appendChild(inputDisplayNewListItem);

  event.target.reset();

}

  const handleDeleteAllClick = function (event) {
  const displayNewList = document.querySelector('#input-display');
  displayNewList.innerHTML = '';

  }

  const createInputDisplayNewListItem = function (form) {
  const inputDisplayNewListItem = document.createElement('h2');
  inputDisplayNewListItem.classList.add('input-for-test');

  const carName = document.createElement('h6');
  carName.textContent = form['car-name'].value;
  inputDisplayNewListItem.appendChild(carName);

  const carMake = document.createElement('h6');
  carMake.textContent = form['car-make'].value;
  inputDisplayNewListItem.appendChild(carMake);

  const carModel = document.createElement('h6');
  carModel.textContent = form['car-model'].value;
  inputDisplayNewListItem.appendChild(carModel);

  const carYear = document.createElement('h6');
  carYear.textContent = event.target['car-year'].value;
  inputDisplayNewListItem.appendChild(carYear);

  return inputDisplayNewListItem;
}
