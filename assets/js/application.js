import Alpine from "alpinejs";
import { spells, careers } from "../../_data/data.json";

const randomInt = (upper) => {
  return Math.floor(Math.random() * upper);
};

Alpine.data("table", (kind) => ({
  data: [],
  selected: "",
  init() {
    switch (kind) {
      case "spells":
        this.data = spells;
        break;
      case "careers":
        this.data = careers;
        break;
      default:
        throw new Error("invalid table kind");
    }

    this.roll();
  },
  roll() {
    const idx = randomInt(this.data.length);
    this.selected = this.data[idx];
  },
}));

Alpine.start();
