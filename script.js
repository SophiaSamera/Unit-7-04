document.getElementById('button').addEventListener('click', comparison)
let age = 11
let day = 'Wednesday'

function comparison () {
  day = document.getElementById('input').value
  age = document.getElementById('input1').value
  age = parseInt(age)
  if (( day == 'Tuesday' || day == 'Thursday') || age > 12 && age < 21) {
  document.getElementById('answer').innerHTML = 'You are eligible for student pricing.'   
  } else {
    document.getElementById('answer').innerHTML = 'You must pay the regular price.'
    }
  }
  