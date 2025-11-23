function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);

function handleCreate() {
  const amount = Number(input.value);

  // 1 - 100 aralığının dışındaysa hiçbir şey yapma
  if (amount < 1 || amount > 100) {
    return;
  }

  // Önce mevcut kutuları temizle
  destroyBoxes();

  // Sonra yenilerini oluştur
  createBoxes(amount);

  // Input'u temizle
  input.value = "";
}

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "4px";

    boxes.push(box);
    size += 10;
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
