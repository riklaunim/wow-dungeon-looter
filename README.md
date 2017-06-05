# wow-dungeon-looter
Determine which dungeon drops the most valuable items based on your stat values... and more!

MVP ToDo List:
----------

* Write data harvester using Selenium (Python) - fetch items dropped by dungeon bosses, load detail pages and save stats, ilvl and specs for which they drop
* Integrate harvested data with Ember app
* List dungeons with items they drop
* Implement filter for selected loot spec
* Implement scoring for loot based on stats weight
* Unit-test scoring
* Implement sorting by scorings and slots

2.0 MVP:
--------
* Handle different ilvl (Violet hold, raids, crafted)
* Add raids, crafted items
* Slot banning
* Item banning
* Excessive stats (score less)  


Mockup
------

* Calculate value for dungeon (and raid) drops by given stat weight and spec
* List dungeons (and raids) based on drops value (Mythic 0, +10, +15 ilvl choices, fixed raid and violet hold levels)
* average score of a drop for your loot spec (which dungeon on average drops most valuable items)
* count of items being >= ~75% slot best in given dungeon (like above, which dungeon can be used to upgrade most slots on gearing characters)
* Loot table
* List items by slot
* display given item stat score, ranking (% of slot best)
* optionally add info about additional drop changes from other party members (drops to all, drops to melee dps etc.)
* sort by slot starting from BiS
* Allow excluding slots from calculation (taken by legendaries, tier sets and alike)
* Allow excluding given items (bad relics, trinkets)
* Save preferences in browser localstorage
* Try to add link/item tooltip to wowhead or other wow DB.
* Offline JavaScript web application made with Ember.JS
