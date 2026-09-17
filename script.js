const dice = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;

  dice.classList.remove('rolling');
  void dice.offsetWidth;
  dice.classList.add('rolling');

  dice.textContent = result;
}

rollBtn.addEventListener('click', rollDice);
