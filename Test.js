const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('輸入新的名字');
  para.textContent = 'Player 1: ' + name;
}
