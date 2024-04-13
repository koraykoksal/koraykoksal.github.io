const datetime = new Date().getFullYear()

const yearSpan = document.getElementById('current-year');
const myAge = document.getElementById('age')
const myBirthYear = '1993'

yearSpan.textContent = datetime
myAge.textContent = Number(datetime) - Number(myBirthYear)