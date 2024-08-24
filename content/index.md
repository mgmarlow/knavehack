---
layout: "main.njk"
---

# Rules

**Knavehack** is [Knave: Second
Edition](https://questingbeast.itch.io/knave-second-edition) but
hacked up and rewritten to suit my table. It blends in ideas from a
handful of other [OSR
systems](https://en.wikipedia.org/wiki/Old_School_Renaissance) and is
designed to be quick, simple, and classless. Your equipment defines
your role, your loot defines your XP, and your improvisation defines
your success.

## Ability scores

Player characters (PCs) have six ability scores, each rated from 0 to 10:

1. `STR`: physical power, e.g. climbing, lifting, melee attacks.

2. `DEX`: agility, e.g. dodging, sneaking, picking pockets, sleight of
   hand, lock-picking.

3. `CON`: heartiness, e.g. resist poison, cold, general resilience.
   PCs have 10 + `CON` item slots and can take that many wounds before
   dying.

4. `INT`: cunning, e.g. alchemy, magic use. `INT` improves the
   effectiveness of spells and PCs can cast `INT` spells per day.

5. `WIS`: perception, e.g. ranged attacks, foraging, navigation, spell
   resistance.

6. `CHA`: personality, e.g. persuasion, coercion. PCs can have a
   number of companions equal to their `CHA`.

## Skill checks

Roll a d20, adding the ability score relevant for the check and any
optional modifiers. If the skill check is **greater** than the
difficulty class (DC) the check succeeds.

DC ranges from 11-21, where 16 is considered average difficulty.

- Modifiers are gained/lost in increments of 5.

- There are no knowledge checks.

- Opposing hit dice (HD) from a monster/NPC may be used as DC.

## Create a character

### 1. Record ability scores

Distribute 3 points between your PC’s ability scores. More than 1
point can be placed in the same score. Or, let fate decide by rolling
3d6, with each die adding 1 to the ability score matching the number
it rolled.

_Example: rolling 3-5-5 means `CON` (the 3rd ability) is 1 and `WIS`
(the 5th ability) is 2. All other abilities have a score of 0._

### 2. Record secondary stats

PCs start at level 1 with 0 XP. They have 10 + `CON` item slots and
start with d6 maximum Hit Points (HP).

### 3. Pick two careers

Roll or pick two careers. You gain those careers’ items, as well as
any of the following that you can carry: 3d6×10 coins, rations, a 50’
rope, 2 torches, any armor pieces or weapons and a quiver of 20
arrows. If the PC has any points in `INT`, they may receive a random
spell book for each point.

{% tableroll "careers" %}

{% tableroll "careers" %}

### 4. Record armor

PCs have Armor Points `AP` equal to their number of armor pieces and
an Armor Class `AC` equal to `AP` + 11.

### 5. Finishing touches

Name and describe your character.

## Combat

### Movement and distance

There are 4 abstract ranges for measuring distances: **Close**,
**Nearby**, **Far-Away** and **Distant**.

A character can move somewhere **Nearby** as part of an action,
performing that action at any stage of the move. They can forgo their
action and move somewhere **Far-Away** instead. Anything beyond
**Far-Away** can be classified as **Distant** and would take 3 moves
to get to.

| CLOSE   | NEARBY   | FAR AWAY   |
|---------|----------|------------|
| 0 - 5ft | 5 - 60ft | 60 - 120ft |

### Initiative

Initiative is determined via a `CHA` vs. `CHA` check between the two
leaders of each side. The leader is the party member closest to the
confrontation. When a side acts, all its creatures, in any order, may
move (up to Nearby) and take one other action such as attacking,
casting a spell, moving, maneuvering, etc

### Armor Class

Armor class (AC) represents combat resilience, in the form of armor
absorbing a blow, influencing a dodge, or otherwise avoiding damage. A
character's base AC is 11 (unarmored). Every additional armor point
gained from equipment is added to a character's AC.

### Attacking

Make a check using `STR` (for melee attacks) or `WIS` (for ranged
attacks) against the defender’s armor class. If the check succeeds,
the attack is successful and damage is rolled.

- On a 21+, the attacker may additionally succeed at a free maneuver.

- On a natural 1, the weapon breaks.

- Careers never add bonuses to attacks or maneuvers.

- Ranged attacks cannot be made while in melee.

- Melee attacks against unsuspecting foes always hit and deal direct
  damage.

#### Maneuvers

Maneuvers are tactical combat choices that exchange damage for
utility. Possible maneuvers include disarming, pushing, stunning,
blinding, breaking gear, tripping, pickpocketing, climbing,
restraining, or anything else the GM agrees is plausible. They can
only cause damage indirectly (e.g., pushing an enemy off a ledge) and
are resolved with an appropriate ability check.

#### Power attacks

After a successful attack roll but before rolling for damage, PCs can
opt to make a melee attack a Power Attack. Power Attacks double the
number of damage dice rolled in exchange for breaking the weapon.

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

HP fully heals each morning after two watches of sleep and a meal the
night before (consuming a ration). While in a safe haven, this also
heals one wound.

If a player is interrupted during a watch due to a random encounter,
roll a `CON` check the next morning with a DC based on the severity of
the encounter (11 on average). If the PC fails, that character gains
no health but still expends a ration.

#### Death

PCs die when all of their slots are filled with wounds. Monsters and
NPCs die at 0 HP.

### Hazards and statuses

- **fire**: 1d6 direct damage per round. On fire: 2d6 direct damage
  per round. Immersed in lava: instant death.

- **drowning**: PCs can hold their breath for 30 seconds + 30 seconds
  for each point of `CON`. After this, they pass out and must pass a
  `CON` check every round or die.

- **freezing**: 1 direct damage per 10-minute turn unless the PC
  passes a `CON` check.

- **lightning**: 3d6 direct damage.

- **falling**: 1d6 direct damage per 10’ fallen. If at least three of
  the dice roll a 6, the PC is instantly killed.

- **hungry**: PCs who go hungry carry fewer items. -1 item slot for
  every day without food. When all item slots are exhausted, the PC
  starves to death.

- **thirst**: Each day without drinking water applies a -5 penalty to
  all checks. After three days, pass a `CON` check every day or die.
  Assume that the PCs are finding water to drink as they travel,
  unless they are in a very arid environment.

- **sleep deprivation**: For each day without sleep, apply -5 to all
  checks. After two days, make a `WIS` check every watch or pass out
  for three watches.

- **intoxication**: Make a `CON` check every hour that a PC drinks
  alcohol. If they fail, they become drunk and take -5 to all checks
  until the next day. If a creature fails the `CON` check two hours in
  a row, they pass out for two watches (8 hours).

## Equipment and item slots

PCs have 10 + `CON` item slots for holding weapons, armor, loot, and
animal companions. Most items, including groups of small items that
could fit in one hand, take up one slot. Two-handed items take two
slots. As a baseline, 500 coins use a full slot.

When a PC takes wounds, they lose item slots equal to the number of
wounds inflicted. If all item slots are filled with wounds, the PC is
dead.

All costs in the below item tables are in coins (c). 10c is the wage
for a day of unskilled labor.

### Basic items

| Item                       | Cost   | # per item slot |
|:---------------------------|:-------|:----------------|
| Arrows (20)                | 5c     | 1-20            |
| Bear trap                  | 50c    | 1               |
| Caltrops (one bag)         | 50c    | 1               |
| Crowbar                    | 25c    | 1               |
| Cloak                      | 2c     | 1               |
| Common clothing            | 4c     | 1               |
| Grappling hook             | 50c    | 1               |
| Gem                        | Varies | 1-10            |
| Ink (jar)                  | 8gp    | 1               |
| Iron spikes (12)           | 1c     | 1-12            |
| Lantern                    | 25c    | 1               |
| Ladder                     | 5c     | 1               |
| Mirror                     | 7c     | 1               |
| Oil (flask)                | 25c    | 1               |
| Padlock (2 keys)           | 20c    | 1               |
| Paper (1 sheet)            | 1c     | 1-25            |
| Pole                       | 25c    | 1               |
| Quill                      | 5c     | 1               |
| Rations (3)                | 5c     | 1-3             |
| Rope, 60'                  | 5c     | 1               |
| Torch                      | 5c     | 1               |
| Tent (1 person)            | 10c    | 1               |
| Thieves' tools             | 25c    | 1               |
| Tinderbox, flint and steel | 5c     | 1               |

### Weapons

| Melee weapon             | Cost | Item slots | Range           | Damage | Hands |
|:-------------------------|:-----|:-----------|:----------------|:-------|:------|
| Axe, mace, dagger, sword | 50c  | 1          | Close           | d6     | 1     |
| Greatsword, battleaxe    | 100c | 2          | Close           | d8     | 2     |
| Warhammer                | 200c | 3          | Close           | d10    | 2     |
| Sling (one-handed)       | 50c  | 1          | Nearby (60')    | d4     | 1     |
| Bow (two-handed)         | 100c | 2          | Far away (120') | d6     | 2     |

### Armor

PCs can wear up to 7 pieces. A shield can only be equipped with a
one-handed weapon.

| Armor       | Cost | Item slots | Armor points | Hands |
|:------------|:-----|:-----------|:-------------|:------|
| Shield      | 100c | 1          | 1            | 1     |
| Helmet      | 100c | 1          | 1            | -     |
| Gambeson    | 100c | 1          | 1            | -     |
| Mail shirt  | 200c | 1          | 1            | -     |
| Breastplate | 500c | 1          | 1            | -     |
| Arm plate   | 500c | 1          | 1            | -     |
| Leg plate   | 500c | 1          | 1            | -     |

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

{% tableroll "spells" %}

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

## Dungeon adventure

### Time and turns

Time in the dungeon is measured in **game turns** that approximate to
10 minutes. When combat begins, the time scale changes to **combat
rounds**, which are about 10 seconds long.

PCs automatically detect traps and map their environment.

### Resource expenditure

Resources (like torches) have lifetimes measured in ticks. For
example, a torch might have 12 ticks, roughly 2 hours of in-game time.
A lantern full of oil might have 36.

At the end of each game turn, record a tick. When a resource has
reached its maximum ticks, that resource is exhausted (e.g.
extinguished).

### Random encounters

Once every three game turns, roll a d6. A 1 result means the players
encounter a randomly generated creature or distraction in the
following turn.

That encounter appears 2d6 x 10 ft. away from the players.

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

## Overland travel

### Rations

Three rations take up one item slot. One ration is consumed for one
day of travel. A single ration includes a complete day of food and
water for a single PC.

PCs that fail to consume food for a day gain the Hungry status.

### Foraging

Finding food takes a watch and requires passing a `WIS` check, with
modifiers for weather, terrain, etc. On a success, a PC collects d6
rations.

### Traveling

While traveling, days are divided into 6; four-hour watches: three for
day, three for night. Most major actions (traveling, foraging,
searching, etc. take one watch to complete).

PCs can move one six-mile hex per watch, up to three times per day.
Each watch they travel after the third deals 1 direct damage to each
PC unless they succeed at a `CON` check. Speed is halved in darkness,
difficult terrain, or severe weather and doubled when riding.

On every watch, roll a d6 for random encounters. On a 1 result, an
encounter occurs.

### Navigation

If the terrain or weather while traveling is disorienting, the GM may
require a `WIS` check of the party’s leader (which the GM rolls in
secret) to see if they move to a random adjacent hex.

The party can spend a watch exploring the area of a six-mile hex to
reveal any areas of interest (such as an overgrown ruin, hidden pool,
etc.) that wouldn’t be noticed by passing through.

## Downtime

In a safe haven, a PC may participate in downtime. Perhaps they want
to extend a humble base of operations into a proper stronghold. Or,
they may simply wish to gamble their savings, train a new career, or
create potions with alchemy.

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

## Monsters

### Morale check

Monsters check morale during the breaking point of a battle. For
example: after half of their forces are lost, after their leader is
killed, or after they are attacked by something they fear.

If the monster rolls 2d6 greater than their `MRL`, the monster will
flee or surrender.

### Monster stats

`AC`: beat this number for a successful hit.

`HD`: monsters roll HD d8s for hit points. Use this number as the
monster's level for skill checks.

`ATK`: number/type/damage of attacks in one round. Monsters armed with
weapons typically deal d6 damage.

`MRL`: how likely the monster is to flee or surrender during combat
(see morale check above).

`NA`: how many of this monster commonly appear together in a random
encounter.

Anything else: special notes for abilities and tactics.

### Bestiary

- **bandit**: AC 13, HD 1, ATK d6, MRL 8, NA: d8. Likes to ambush.

- **wolf**: AC 13, HD 2, MOV fast, ATK d6, MRL 8, NA 2d6. Prefers to
  surround and flank.

- **dire wolf**: AC 14, HD 4, MOV fast, ATK 2d4, MRL 9, NA 1d4.

- **hellhound**: AC 14, HD 3, ATK bite (d6) or breath (3d6), MRL 9, NA
  2d4. Breath weapon is a cone of flame.

- **giant scorpian**: AC 15, HD 4, ATK 2 claws (d10) and 1 stinger
  (d6 + poison), MRL 11, NA d6. Succeed a `CON` check or die from the
  stinger's poison.

- **giant frog**: AC 12, HD 3, ATK d4 (bite) or ATK d6 (spit), MRL 9,
  NA d4. 15' sticky tongue. On ranged hit, drags and bites. On 20+,
  swallows target, dealing d6 damage a round until the toad dies.
  Immune to acid.

- **slime**: AC 11, HD 4, MOV slow, ATK 2d4, MRL n/a, NA d4. Engulf:
  touched targets are engulfed and must escape via STR check.
  2d4/round.

- **gnoll**: AC 15, HD 2, ATK d6, MRL 8, NA 1d6. Wander in tribes.

- **ghoul**: AC 14, HD 2, ATK 2 claws (d4) and 1 bite (d4), MRL 11, NA
  1d6. Those hit by a ghoul's bite or claw attack must succeed a `CON`
  check or they're paralyzed for 2d8 turns.

- **lizard person**: AC 15, HD 2, ATK 1d6 + 1, MRL 11, NA 2d4. Always
  receives a +1 to melee damage thanks to tremendous strength.
