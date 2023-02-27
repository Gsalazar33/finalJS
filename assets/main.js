const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("form");

let agenda = JSON.parse(localStorage.getItem("agenda")) || [];

const saveLocalStorage = () => {
  localStorage.setItem("agenda", JSON.stringify(agenda));
};

const saveData = () => {
  agenda = [
    ...agenda,
    {
      id: agenda.length + 1,
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: formatDate(dateInput.value),
      time: hourInput.value,
      quantity: getRadioValue(radioInputs),
      extras: getCheckedOptions(checkboxInputs),
      about: aboutInput.value,
    },
  ];
};

const renderTurn = (turn) => {
  const {
    id,
    name,
    surname,
    phone,
    email,
    date,
    time,
    quantity,
    extras,
    about,
  } = turn;

  return `
		<div class="card ${setCardBackground(quantity)}">
		<div class="card__left">
			<h2 class="card__title">Pedido: Nº${id} - ${name} ${surname}</h2>
			<p class="card__qty">${quantity}</p>
			<p class="card__extras">
				Categoria: ${extras}
      
			</p>
      <p>Producto: ${about} </p>
			<div class="tags">
				<span class="card__hour ${setTimeBackground(quantity)}">${time} HS</span>
				<span class="card__date ${setDateBackground(quantity)}">${date}</span>
			</div>
		</div>
		<div class="card__right">

			<img
				src="${setCardImg(quantity)}"
				class="card__img ${setCardImgClass(quantity)}"
				alt=""
			/>
		</div>
	</div>
	`;
};

const renderAgenda = () => {
  cardsContainer.innerHTML = agenda
    .map((turn) => {
      return renderTurn(turn);
    })
    .join("");
};

const submitForm = (e) => {
  e.preventDefault();
  if (isValidForm()) {
    saveData();
    alert("El turno se ha cargado correctamente");
    form.reset();
    saveLocalStorage();
    renderAgenda();
    setDateIntervals();
  }
};

const init = () => {
  renderAgenda();
  window.addEventListener("DOMContentLoaded", setDateIntervals);
  form.addEventListener("submit", submitForm);
};

init();
