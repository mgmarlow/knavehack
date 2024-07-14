import { spells, careers } from "../../_data/data.json";

const randomInt = (upper) => {
  return Math.floor(Math.random() * upper);
};

const randomTable = (table) => {
  const idx = randomInt(table.length);
  return table[idx];
}

const rollCareers = () => {
  const first = randomInt(100);
  let second = randomInt(100);

  while (second == first) {
    second = randomInt(100);
  }

  return [careers[first], careers[second]];
};

const onNewCareersClick = () => {
  const newCareers = rollCareers();

  document.getElementById("careers").innerHTML =
    `<li>${newCareers[0]}</li><li>${newCareers[1]}</li>`;
};

globalThis.onNewCareersClick = onNewCareersClick;
globalThis.randomSpell = () => {
  const spell = randomTable(spells);
  document.getElementById("spell").textContent = spell;
};
