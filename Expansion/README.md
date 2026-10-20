# Expansion

The port's own content: 21 weapons, 15 upgrades, the Aircraft Finder and the Autopilot Module. They work on all of the original mod's aircraft. Everything here uses the Java mod's own formats, and the build reads it on top of the original mod's files.

| Folder | What's in it |
|---|---|
| `assets/immersive_aircraft/objects/` | Weapon and projectile models (`.bbmodel`), textured with Minecraft's own block textures. Open them in Blockbench, edit, save. The texture lives inside the model. |
| `assets/immersive_aircraft/textures/entity/*_mers.png` | Vibrant Visuals maps for those models: metal is pure red, everything else pure blue. Repaint them if you change which parts are metal. |
| `assets/immersive_aircraft/textures/item/` | Item icons. **These are placeholders** borrowed from the original mod's icons. Replace any PNG (16x16) with your own and rebuild. |
| `data/immersive_aircraft/aircraft_upgrades/` | Upgrade stats. |
| `data/immersive_aircraft/recipe/` | Recipes. |
| `assets/immersive_aircraft/lang/en_us.json` | Names and descriptions. |
| `expansion.json` | Item categories and the weapons' firing numbers (fire rate, damage, ammo, blast size). |

The generator never overwrites a file that's already here, so your Blockbench edits and hand-drawn icons are safe.
