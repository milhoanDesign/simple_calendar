
/*
// My shitty Js code for the simple calendar
const select = document.querySelector("select");
const headingTwo = document.querySelector("h2");
document.body.style.padding = "1rem"; 

select.addEventListener("change", createCalendar);

function createCalendar () {
    const selectedMonth = select.value; 
    headingTwo.textContent = selectedMonth;
}; 
*/ 

const select = document.querySelector("select");
const list = document.querySelector("ul");
const headingTwo = document.querySelector("h2");

select.addEventListener("change", () => {
  const choice = select.value;

  let days = 31;
  if (choice === "February") {
    days = 28;
  } else if (
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = "";
  headingTwo.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, "January");