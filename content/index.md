---
layout: "main.njk"
---

A mashup of [Knave: Second
Edition](https://questingbeast.itch.io/knave-second-edition) and [The
Black Hack](https://the-black-hack.jehaisleprintemps.net/english/).
Knavehack is a simple, classless system that runs in the [OSR
tradition](https://en.wikipedia.org/wiki/Old_School_Renaissance). Your
equipment defines your role, your loot defines your XP, and your
improvisation defines your success.

<section>

## Stats

### Ability scores

Player characters (PCs) have six ability scores, each rated from 0 to 10:

1. Strength `STR`: physical power, e.g. climbing, lifting, melee attacks.

2. Dexterity `DEX`: agility, e.g. dodging, sneaking, picking pockets,
   sleight of hand, lock-picking.

3. Constitution `CON`: heartiness, e.g. resist poison, cold, general
   resilience. PCs have 10 + `CON` item slots and can take that many
   wounds before dying.

4. Intelligence `INT`: cunning, e.g. alchemy, magic use. `INT`
   improves the effectiveness of spells and PCs can cast `INT` spells
   per day.

5. Wisdom `WIS`: perception, e.g. ranged attacks, foraging,
   navigation, spell resistance.

6. Charisma `CHA`: personality, e.g. persuasion, coercion. PCs can
   have a number of companions equal to their `CHA`.

### Skill checks

Skill check = d20 + ability score + modifiers.

If the skill check is greater than the difficulty class (DC) the check
succeeds. DC ranges from 11-21, where 16 is considered average
difficulty.

Modifiers are optional and are gained in increments of 5. Positive or
negative modifiers correspond to advantages and disadvantages that the
PC has in a certain situation. These may be due to combat maneuvers,
character details (like career choice), or other factors decided on by
the GM.

Opposing ability scores and armor points can be used as a task’s
difficulty. If a creature doesn’t have ability scores, you may
substitute its level.

There are no knowledge checks! PCs know all common and career-related
knowledge. All other knowledge must be sought out.

</section>

<section>

## Combat

### Movement and distance

Knavehack uses 4 abstract ranges for measuring distances: **Close**,
**Nearby**, **Far-Away** and **Distant**.

A character can move somewhere **Nearby** as part of an action,
performing that action at any stage of the move. They can forgo their
action and move somewhere **Far-Away** instead. Anything beyond
**Far-Away** can be classified as **Distant** and would take 3 moves
to get to.

|CLOSE|NEARBY|FAR AWAY|
|-----|------|--------|
|0 - 5ft|5 - 60ft|60 - 120ft|

### Initiative

Initiative is determined via a `CHA` vs. `CHA` check between the two
leaders of each side. The leader is the party member closest to the
confrontation. When a side acts, all its creatures, in any order, may
move (up to Nearby) and take one other action such as attacking,
casting a spell, moving, maneuvering, etc

### Armor Class

Armor Class `AC` = 11 + Armor Points `AP`.

`AP` is gained from equipment.

### Attacking

Make a check using `STR` (for melee attacks) or `WIS` (for ranged
attacks) against the defender’s `AC` (11 + `AP`). If the check
succeeds, the attack is successful and damage is rolled. On a 21+, the
attacker may additionally succeed at a free maneuver. On a natural 1,
the weapon breaks. **Careers never add bonuses to attacks or
maneuvers**.

Ranged attacks cannot be made while in melee.

Melee attacks against unsuspecting foes (sneak attacks) always hit and
deal direct damage. Attacks against truly defenseless foes
automatically kill them.

#### Power attacks

After a successful attack roll but before rolling for damage, PCs can
opt to make a melee attack a Power Attack. Power Attacks double the
number of damage dice rolled in exchange for breaking the weapon.

### Maneuvers

Maneuvers are tactical combat choices that exchange damage for
utility. Possible maneuvers include disarming, pushing, stunning,
blinding, breaking gear, tripping, pickpocketing, climbing,
restraining, or anything else the GM agrees is plausible. They can
only cause damage indirectly (e.g., pushing an enemy off a ledge) and
are resolved with an appropriate ability check.

### Damage and wounds

Hits deal damage equal to a roll of the weapon’s damage die. If an
enemy is weak to the type of damage being dealt, it deals direct
damage. If they are immune to that type, it deals no damage.

Damage is subtracted from HP. At 0 HP, each point of damage “wounds”
an item slot from highest to the lowest. Items in wounded slots are
dropped and cannot be re-filled until the wound is healed.

#### Direct damage

Direct damage bypasses HP and adds wounds directly. It
deals triple HP damage to creatures that don’t have slots, like
monsters.

#### Healing

HP fully heals each morning after two watches of sleep and a
meal the night before. While in a safe haven, this also heals one
wound.

#### Death

PCs die when all of their slots are filled with wounds. Monsters and
NPCs die at 0 HP.

### Hazards and statuses

**fire**: 1d6 direct damage per round. On fire: 2d6 direct damage per
round. Immersed in lava: instant death.

**drowning**: PCs can hold their breath for 30 seconds + 30 seconds
for each point of `CON`. After this, they pass out and must pass a
`CON` check every round or die.

**freezing**: 1 direct damage per 10-minute turn unless the PC passes
a `CON` check.

**lightning**: 3d6 direct damage.

**falling**: 1d6 direct damage per 10’ fallen. If at least three of the
dice roll a 6, the PC is instantly killed.

**thirst**: Each day without drinking water applies a -5 penalty to
all checks. After three days, pass a `CON` check every day or die.
Assume that the PCs are finding water to drink as they travel, unless
they are in a very arid environment.

**sleep deprivation**: For each day without sleep, apply -5 to all
checks. After two days, make a `WIS` check every watch or pass out for
three watches.

**intoxication**: Make a `CON` check every hour that a PC drinks
alcohol. If they fail, they become drunk and take -5 to all checks
until the next day. If a creature fails the `CON` check two hours in a
row, they pass out for two watches (8 hours).

</section>

<section>

## Inventory

PCs have 11 + `CON` item slots. Most items, including groups of small
items that could fit in one hand, take up one slot. Two-handed items
take two slots. 500 coins use a full slot.

### Equipment

All costs are in coins (c). 10c is the wage for a day of unskilled
labor.

**common items**: Found in any settlement.  Rope, torch, saw, arrow,
quiver, etc. (5c).

**uncommon items**: Found in towns or cities. Lantern, bear trap,
etc. (20c).

**rare items**: Found only in cities.  Sextant, hourglass, astrolabe,
etc. (100c+).

**melee weapons**: One-handed weapons: d6 damage, 1 slot (50c). Two-handed
weapons: d8 damage, two slots (100c).

**missile weapons**: Slings: One hand, one slot, d4 damage, 60’ range
(50c). Bows: Two hands, two slots, d6 damage, 120’ range
(100c). Quivers hold 20 arrows.

**armor pieces**: PCs can wear up to 7 pieces. Each uses one slot and
grants 1 AP (max of 7 AP or 18 Armor Class). Shield (100c), Helmet
(100c), Gambeson (100c), Mail shirt (200c), Breastplate (500c), Arm
plate (500c), Leg plate (500c).

**animals**: Poultry (5c), Dogs, Pigs, Goats, etc. (20c), Cows (100c),
Falcons (1000c).

**clothing sets**: Poor (60c), Humble (120c), Respectable (240c), Wealthy
(600c), Minor Noble (2400c), Major Noble (12,000c), Royal (120,000c).

### Magic items

Magic weapons typically add +1 to any attribute being tested whilst
using the weapon and +1 to each damage dice rolled. More powerful
weapons (+2/3) can be found if the GM includes them.

</section>

<section>

## Spellcasting

A spellbook takes up an item slot and contains a single spell.
Spellbooks cannot be created or copied by PCs and must be found while
exploring dungeons or stolen from other magic users.

### Casting spells

Casting a spell takes one action. Each spellbook can only be used once
per day, but PCs can use a number of spellbooks per day equal to their
`INT`.

### Spell saves

When a spell targets an unwilling creature with a level higher than
the spell, they may make a check vs. the spell’s level.  On a success,
the spell’s effect is halved. If they succeed by 10+, the effect is
nullified.

### Spell generator

> Feel free to bring your own spells. This button generates a random
> one from Knave 1e.

Substitute `INT` with the caster's `INT` score. Unless otherwise
noted, all spells with ongoing effects last up to `INT`×10 minutes,
and have a range of up to 40 feet. If a spell directly affects another
creature, the creature may make a save to avoid it.

<button onclick="randomSpell()">spell me</button>

<p id="spell"></p>

</section>

<section>

## Leveling up

PCs are awarded 1 experience point (XP) for each coin (c) worth of
treasure recovered from dungeons and returned to civilization, split
evenly between all PCs who assisted.

PCs gain a level when they hit an XP threshold detailed in the table
below. When a PC levels up, they gain 1 point to three of their
ability scores, randomly chosen or picked by the player. The PC also
increases their maximum HP by d6.

Don't reset XP to zero after leveling, Knavehack tracks total XP.

| level | xp total | hp   | title    |
|-------|----------|------|----------|
| 1     | 0        | 1d6  | Wretch   |
| 2     | 2000     | 2d6  | Lowlife  |
| 3     | 4000     | 3d6  | Hoodlum  |
| 4     | 8000     | 4d6  | Fool     |
| 5     | 16000    | 5d6  | Dastard  |
| 6     | 32,000   | 6d6  | Cad      |
| 7     | 64,000   | 7d6  | Gadabout |
| 8     | 125,000  | 8d6  | Rogue    |
| 9     | 250,000  | 9d6  | Jack     |
| 10    | 500,000  | 10d6 | Knave    |

</section>

<section>

## Dungeon adventure

### Time and turns

Time in the dungeon is measured in **game turns** that approximate to
10 minutes. When combat begins, the time scale changes to **combat
rounds**, which are about 10 seconds long.

PCs automatically detect traps and map their environment.

### Random encounters

The GM rolls a d4 every 15 minutes of real world play. A result of 1-2
means the players will encounter a randomly generated creature or
distraction in the following turn.

### Creature reactions

Some monsters and NPCs will have predetermined personalities and goals
that will guide a GM when choosing their actions and feelings towards
the characters. Those that do not, such as randomly encountered
creatures, make a Reaction roll on the following table:

| d12  | Reaction                    |
|------|-----------------------------|
| 1-2  | Attacks.                    |
| 3-5  | Hostile, may attack.        |
| 6-8  | Uncertain, confused.        |
| 9-11 | Indifferent, may negotiate. |
| 12   | Eager, friendly             |

</section>

<section>

## Wilderness adventure

### Traveling

While traveling, days are divided into 6; four-hour watches: three for
day, three for night. Most major actions (traveling, foraging,
searching, etc. take one watch to complete).

PCs can move one six-mile hex per watch, up to three times per day.
Each watch they travel after the third deals 1 direct damage to each
PC unless they succeed at a `CON` check. Speed is halved in darkness,
difficult terrain, or severe weather and doubled when riding.

### Navigation and exploration

If the terrain or weather while traveling is disorienting, the GM may
require a `WIS` check of the party’s leader (which the GM rolls in
secret) to see if they move to a random adjacent hex.

The party can spend a watch exploring the area of a six-mile hex to
reveal any areas of interest (such as an overgrown ruin, hidden pool,
etc.) that wouldn’t be noticed by passing through.

### Foraging

Finding food takes a watch and requires passing a `WIS` check, with
modifiers for weather, terrain, etc. On a success, a PC collects d6
rations.

</section>

<section>

## Downtime

In a safe haven, a PC may participate in downtime. They could carouse
around the safe haven, increasing XP at the cost of coin and the
occasional mishap. Or, they may simply wish to gamble their savings,
train a new career, or create potions with alchemy.

### Carousing

Carousing takes up a whole night and costs a PC d10×50c in villages,
d10×100c in towns, d10×200c in cities. It also grants the PC XP equal
to the amount spent. In the morning, succeed at a `CON` check or roll
a mishap.

| d20 | mishap                                                    |
|-----|-----------------------------------------------------------|
| 1   | You made a public fool of yourself.                       |
| 2   | Take d3 direct damage from a fight.                       |
| 3   | Pay d100c due to fines.                                   |
| 4   | You are engaged to be married.                            |
| 5   | Lose d1000c from gambling.                                |
| 6   | Groupies follow you everywhere.                           |
| 7   | You’ve made an enemy.                                     |
| 8   | You have an ugly, prominent tattoo.                       |
| 9   | Hangover: take -5 on all tests today.                     |
| 10  | You joined a local faction.                               |
| 11  | Robbed: Lose all remaining coin.                          |
| 12  | You wake up in prison.                                    |
| 13  | The building is on fire!                                  |
| 14  | You’re expected to complete a mission due to your boasts. |
| 15  | A duel is scheduled for the next dawn.                    |
| 16  | You signed a shady contract.                              |
| 17  | A stranger’s corpse is on the floor.                      |
| 18  | A faction hates you (p. 50).                              |
| 19  | All your belongings have been stolen.                     |
| 20  | You meet a new companion who wants to join your party.    |

### Gambling

The player wagers some money (up to a house limit), then the GM rolls
a d6. The player then makes a choice; either bow out and forfeit half
of their wager or try to roll higher on a d6 than the GM’s roll. If
they roll and succeed, they double their money. If they fail, they
lose their entire wager.

### Career training

To gain a new career, a PC must find an expert in the field they wish
to study and spend the required time and money. Gaining a career gives
PCs career-related knowledge, the ability to attempt related tasks and
a +5 on related non-combat checks.

**common**: Requires 1 month and 1000c (carpenter, hunter, fisherman,
sailor, dyer, gardener, blacksmith, etc.).

**uncommon careers**: Requires 3 months and 5000c to attempt related tasks
and an additional 3 months and 5000c to gain a +5 to related
non-combat checks (burglar, acrobat, locksmith, grave robber,
herbalist, tattooist, prospector, etc.).

**rare careers**: Requires 1 year and 30,000c to attempt related tasks and
an additional year and 30,000c to gain a +5 to related non-combat
checks (alchemist, lawyer, assassin, sculptor, folklorist, etc.).

### Alchemy

Potions allow the drinker to produce a single significant magical
effect. Potions with ongoing effects may last from a single 10-minute
turn to several depending on the strength of the brew. The length of
such potions is determined by the roll of a d6.

Brewing a potion requires a fire, a cauldron, ingredients, and four
hours (one watch) of time. The player describes to the GM the desired
effect of the potion and the ingredients used in its making. A minimum
of 2 different ingredients must be used. The PC makes an `INT` check
after the potion is approved by the GM. On success, the potion is
created. Ingredients are lost no matter the outcome.

If the PC succeeds at brewing a potion by 10 or more, they manufacture
the recipe for that potion. The potion no longer requires a brewing
check so long as the same ingredients from the recipe are used.

Magical plants may also be used for potions, but they usually grow in
dangerous or lost locations. Most potions are made from the organs of
monsters that give them their special abilities, such as a dragon's
lung (fire breathing) or a dragon's scales (fireproofing). Harvesting
a monster part requires one 10-minute turn and the proper tools.
Harvested body parts or plants take up at least one slot, due to the
packaging and fluids they must be preserved in.

</section>



