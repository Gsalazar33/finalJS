function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

const getNextDay = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow;
};

const getTomorrowDate = () => {
  let year = getNextDay().getFullYear();
  let day = getNextDay().getDate();
  let month = getNextDay().getMonth() + 1;

  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

const isEmpty = (value) => {
  return !value.length;
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.textContent = message;
};

const clearError = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  const error = formField.querySelector("small");
  error.textContent = "";
};

const isEmailValid = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

  return re.test(email);
};

const isPhoneValid = (phone) => {
  const re = /^[0-9]{10}$/;
  return re.test(phone);
};

const isValidDate = (date) => {
  const currentDate = new Date();
  const turnDate = new Date(date);

  turnDate.setHours(currentDate.getHours());
  turnDate.setMinutes(currentDate.getMinutes());
  turnDate.setSeconds(currentDate.getSeconds());

  turnDate.setDate(turnDate.getDate() + 1);

  return date.length && currentDate < turnDate;
};

// "2022-12-01"
// [("2022", "12", "01")]
// [("01", "12", "2022")]
// "01/12/2022"

const formatDate = (date) => {
  const splitDate = date.split("-").reverse().join("/");
  return splitDate;
};

const getRadioValue = (inputs) => {
  const checkedInput = [...inputs].find((input) => {
    return input.checked;
  });
  return checkedInput.value;
};

const getCheckedOptions = (inputs) => {
  const checkedOptions = [...inputs]
    .filter((input) => {
      return input.checked;
    })
    .map((opt) => {
      return opt.value;
    });

  console.log(checkedOptions);

  return checkedOptions;
};

const setDateIntervals = () => {
  dateInput.value = getTomorrowDate();
  dateInput.min = getTomorrowDate();
  dateInput.max = getNextDay().getFullYear() + "-12-31";
};

const setCardBackground = (quantity) => {
  return quantity === "Visita a programar"
    ? "violet-card"
    : quantity === "No desea visita a sucursal"
    ? "black-card"
    : "black-card";
};

const setTimeBackground = (quantity) => {
  return quantity === "Visita a programar" ? "red-card" : "violet-card";
};

const setDateBackground = (quantity) => {
  return quantity === "No desea visita a sucursal" ? "red-card" : "black-card";
};
// asd
const setCardImg = (quantity) => {
  return quantity === "Visita a programar"
    ? "./assets/img/edificio.png"
    : quantity === "No desea visita a sucursal"
    ? "./assets/img/laptop.png"
    : "./assets/img/lupa.png";
};

const setCardImgClass = (quantity) => {
  return quantity === "Visita a programar"
    ? "edificio-img"
    : quantity === "No desea visita a sucursal"
    ? "laptop-img"
    : "lupa-img";
};
