const randomInt = (upper) => {
  return Math.floor(Math.random() * upper);
};

const careers = [
  "acolyte: candlestick, censer, incense",
  "jailer: padlock, 10’ chain, wine jug",
  "acrobat: flash powder, balls, lamp oil",
  "jester: scepter, donkey head, motley",
  "actor: wig, makeup, costume",
  "jeweler: pliers, loupe, tweezers",
  "alchemist: acid, mortar/pestle, 6 vials",
  "knight: lady’s favor, banner, signet ring",
  "antiquarian: old coin, flag, lore book",
  "kidnapper: chloroform, manacles, hood",
  "arcanist: spell book, arcane robes, chalk",
  "lawyer: fancy robe, law book, certificate",
  "architect: plumb line, level, ruler",
  "locksmith: crowbar, picks, padlock",
  "assassin: crossbow, garrote, soft boots",
  "mason: chisel, hammer, chalk",
  "astrologer: star charts, almanac, telescope",
  "merchant: scales, strongbox, bag of spice",
  "baker: rolling pin, flour bag, lard block",
  "miner: pickaxe, lantern, pet canary",
  "bandit: mask, manacles, caltrops",
  "musician: 3 instruments",
  "barber: scissors, hair oil, straight razor",
  "naturalist: fossil, insect case, geode",
  "beast tamer: whip, gloves, leash",
  "officer: shoe polish, medal, spyglass",
  "beekeeper: honey, mask, smoke bomb",
  "oracle: tea leaves, tarot deck, crystal",
  "blacksmith: hammer, bellows, tongs",
  "orator: 100 marbles, bullhorn, wax tablet",
  "boatman: 10’ pole, instrument, paddle",
  "painter: linseed oil, pigments, brushes",
  "bookbinder: sewing kit, glue, quill/ink",
  "peddler: bucket, 300’ twine, mirror",
  "brewer: mash paddle, beer keg, hops",
  "philosopher: staff, lantern, chalk",
  "burglar: lockpicks, grappling hook, rope",
  "physician: saw, scalpel, wine jug",
  "butcher: cleaver, meat hook, bacon",
  "pilgrim: staff, relic, letter of passage",
  "candlemaker: 10 candles, lamp oil, wax",
  "pirate: sextant, cannonball, grappling hook",
  "carpenter: hammer, saw, box of nails",
  "pit fighter: net, whip, wine jug",
  "charlatan: costume, fake elixir, degree",
  "playwright: quill/ink, skull, 10 candles",
  "cobbler: leather roll, fancy shoes, tacks",
  "poacher: animal scent, bow, 20 arrows",
  "coachman: whip, lockbox, oilskin coat",
  "poet: stationery, bell, perfume",
  "cook: frying pan, salt, olive oil",
  "priest: holy water, 10 stakes, prayer book",
  "courier: oilskin bag, local map, lantern",
  "prospector: 10 iron spikes, pickaxe, pan",
  "courtier: perfume, wig, fan",
  "puppeteer: confetti, puppet, sewing kit",
  "cultist: dagger, ritual robes, amulet",
  "rat catcher: cage, 10 rat traps, sack",
  "cutpurse: knife, caltrops, sack",
  "saboteur: air bladder, crowbar, bomb",
  "dyer: 10’ pole, dyes, soap",
  "sailor: beeswax, pullies, spyglass",
  "explorer: sextant, spyglass, crampons",
  "scout: signal flags, black grease, dice",
  "falconer: bird cage, gloves, whistle",
  "scribe: lamp oil, quill/ink, sealing wax",
  "fence: short sword, file, sealing wax",
  "sculptor: chisel, clay, calipers",
  "fisherman: spear, net, fishing tackle",
  "servant: sponge, silverware, poker",
  "folklorist: prophecy, bones, scales",
  "shepherd: crook, instrument, sling",
  "gambler: rapier, card deck, dice",
  "shipwright: drill, hammer, axe",
  "gamekeeper: sling, horn, rope ladder",
  "singer: mirror, makeup, locket",
  "gardener: sickle, shovel, shears",
  "smuggler: pulleys, rope, makeup",
  "grave robber: saw, crowbar, pulleys",
  "soldier: tent, card deck, shovel",
  "gravedigger: shovel, pickaxe, bucket",
  "spy: caltrops, poison, forged papers",
  "groom: oats, horse brush, blanket",
  "squire: torch, armor polish, trumpet",
  "guard: halberd, livery, horn",
  "tailor: sewing kit, scissors, soap",
  "headsman: axe, hood, garrote",
  "tattooist: soot pot, needles, 10 candles",
  "herbalist: herbs, sickle, herb manual",
  "thieftaker: bear trap, manacles, torch",
  "hermit: staff, fungi, basket",
  "thug: poison, knife, lamp oil",
  "hunter: tent, bearskin, bear trap",
  "torturer: drill, hourglass, 10’ chain",
  "innkeeper: ladle, 10 candles, cauldron",
  "trapper: bear trap, 300’ twine, bear pelt",
  "inquisitor: manual, vestments, pliers",
  "watchman: lantern, trumpet, spear",
  "investigator: journal, manacles, vial",
  "woodcutter: axe, firewood, 50’ rope",
];

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
