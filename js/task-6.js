function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes(); // Очищаємо перед рендером нової колекції

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }

  boxesContainer.append(...elements);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
