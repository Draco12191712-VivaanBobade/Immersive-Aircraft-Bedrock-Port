# Changelog

Every release has a version number and a name.

Version numbers follow [semantic versioning](https://semver.org/):

- **Patch (x.y.Z):** bug fixes only.
- **Minor (x.Y.0):** new features that keep existing worlds working.
- **Major (X.0.0):** changes that break existing worlds or remove a feature.

## 1.1.0 — Clear Skies

### Fixes
- **Z-fighting removed from the aircraft models.** Thin panels used to be drawn twice on the same plane, so they flickered. Mesh panels now draw once from both sides, flat parts keep a hair of separation, and the telescope's duplicate parts are gone. This matches how the Java mod draws them.
- **Sneaking and hitting an aircraft no longer destroys it.** It opens the aircraft panel instead.
- **Sneak + use works on aircraft.** While you sneak next to an empty aircraft, it opens its Java-style inventory (the Open button on touch). Adding fuel and rockets with sneak + use also works now.
- **Renamed aircraft keep the Java inventory screen.** Name tags no longer rename aircraft, which matches Java. Names from anvil-renamed items are still kept.
- **The Cargo Airship and Warship show every Java cargo slot** (87 and 79 slots) on one screen, with no cargo banks. Items in older aircraft are moved over automatically.

### Changes
- **Riding view matches the Java mod.** In third person, the camera pulls back to suit each aircraft's size. For example, it's 10 blocks for the Bamboo Hopper and 7 for the Biplane. The camera button still works.
- **Third person is no longer forced when you board.** You can still turn it on from the aircraft panel.

### New
- **Settings without commands.** Go to Settings → Behavior Packs → Immersive Aircraft → gear icon. There you can set speed, lift, fuel, wind, damage, crashes, weapons, repair, drops and camera options for each world.
- **Developer tools.** `/ia:dev` needs cheats and operator permission. It has every advanced setting, can clear overrides, opens the nearest aircraft's panel, and gives every aircraft, upgrade and weapon. It's the only command left.
- **Pack format.** The add-on now uses manifest format version 3.

### Removed
- `/ia:aircraft` and `/ia:config`. Use sneak + hit on an aircraft for its panel, the pack settings screen for world settings, and `/ia:dev` for developer options.

## 1.0.2 — Cleared for Takeoff

### Fixes
- **Planes take off again.** Pushing the stick forward no longer also pushes the nose down. The stick only controls throttle, and the nose follows where you look.
- **"Not enough space" when placing.** Placement uses the block and face you tap and tries one block higher when blocked. When there really is no room, the message names the blocking block and its coordinates.
- **Getting stuck on small bumps.** Aircraft hop up 1-block steps, and small snags no longer stop them dead.

### Changes
- **Easier take-off.** Hold the stick forward and planes lift off by themselves after a short run.
- **More lift for planes** at low speed.
- **Every aircraft is about 60% faster.** Climbing and descending is about 25% faster on helicopters and airships.

### New
- **Java Edition inventory screen** for every aircraft.
- **Two new settings:** Aircraft speed multiplier (default 1.6) and Plane lift assist (default 1.8).

## 1.0.1 — Touch and Go

### Fixes
- Content-log errors on load: float properties, damage sensor triggers.
- Vibrant Visuals: aircraft and items use normal maps.
- The Airship, Cargo Airship and Warship icons show correctly in the inventory.

### Changes
- **Touch-friendly controls.** The movement stick and where you look fly the aircraft. Jump and sneak are left for getting out.
- **Tap an aircraft while holding an upgrade, weapon, banner or dye to install it.**

## 1.0.0 — Maiden Flight

- First release: a full Bedrock port of Immersive Aircraft 1.6.0 by Conczin.
- Includes all seven aircraft, upgrades, weapons, recipes, sounds, particles, the original textures and models, and all 29 languages.
