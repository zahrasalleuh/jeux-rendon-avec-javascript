let randomNumber = Math.floor(Math.random() * 100) + 1;
const nombre = document.querySelector('.nombre');
const lastResult = document.querySelector('.lastResult');
const consigne = document.querySelector('.consigne');
const envoyer = document.querySelector('.envoyer');
const entrer = document.querySelector('.entrer');
let nbreCount = 1;
let resetButton;

function tester() {
  let userNbre = Number(entrer.value);
  if (nbreCount === 1) {
    nombre.textContent = 'Tentatives  précédentes : ';
  }

  nombre.textContent += userNbre + ' ';

  if (userNbre === randomNumber) {
    lastResult.textContent = 'Toutes nos félicitations! Vous avez bien compris!';
    lastResult.style.backgroundColor = 'green';
    consigne.textContent = '';
    terminerJeux();
  } else if (nbreCount === 3) {
    lastResult.textContent = '!!!JEU TERMINÉ!!!';
    consigne.textContent = '';
    terminerJeux();
  } else {
    lastResult.textContent = 'FAUX!';
    lastResult.style.backgroundColor = 'red';
    if(userNbre < randomNumber) {
        consigne.textContent = 'La dernière estimation était trop faible!' ;
    } else if(userNbre > randomNumber) {
        consigne.textContent = 'La dernière estimation était trop élevée !';
}
  }

  nbreCount++;
  entrer.value = '';
  entrer.focus();
}

envoyer.addEventListener('click', tester);

function terminerJeux() {
  entrer.disabled = true;
  envoyer.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Commencer une nouvelle partie';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', recommencer);
}

function recommencer() {
  nbreCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for(let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

resetButton.parentNode.removeChild(resetButton);
  entrer.disabled = false;
  envoyer.disabled = false;
  entrer.value = '';
  entrer.focus();
  lastResult.style.backgroundColor = 'rgba(147, 225, 228, 0)';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}