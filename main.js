
// My shitty Js code for the simple calendar
const select = document.querySelector("select");
const headingTwo = document.querySelector("h2");
document.body.style.padding = "1rem"; 

select.addEventListener("change", createCalendar);

function createCalendar () {
    const selectedMonth = select.value; 
    headingTwo.textContent = selectedMonth;
}; 