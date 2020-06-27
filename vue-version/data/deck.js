"use strict"

const deck = {
    cards: function(){
        return [
            {
                id:1,
                future:0,
                title:"Janissaries",
                type:"Home",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Gain 5 extra dice in a field battle or 4 extra dice in a naval combat. Play after seeing both sides' rolls. OR Add 4 new regulars to any combination of controlled Ottoman home spaces and/or foreign war cards (but not in Algiers or a pirate haven)."
            },
            {
                id:2,
                future:0,
                title:"Holy Roman Emperor",
                type:"Home",
                ops:5,
                turn:"1",
                removed:"No",
                text:"If Charles V is not captured or under siege, move Charles V to any controlled Hapsburg home space not in unrest and not occupied by enemy units; then conduct 5 CP of actions. Duke of Alva may accompany Charles if he began the impulse in the same space as Charles."
            },
            {
                id:3,
                future:0,
                title:"Six Wives of Henry VIII",
                type:"Home",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Declare war on France, Hapsburgs, or Scotland during the Action Phase and then conduct 5 CP. If declaration is against Scotland, France may intervene without playing a card. In this case, England and France are at war and Scotland is activated as a French ally. OR If Turn 2 or later and Henry is alive, not captured, and not under siege, advance Marital Status marker one space to right and resolve using procedure in 21.3 (rolling on Pregnancy Table if Henry remarries)."
            },
            {
                id:4,
                future:0,
                title:"Patron of the Arts",
                type:"Home",
                ops:5,
                turn:"1",
                removed:"No",
                text:"If Francis I is ruler and not captured or under siege, make a roll on the Chateaux Table to attempt to earn VP and/or additional cards."
            },
            {
                id:5,
                future:0,
                title:"Papal Bull",
                type:"Home",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Excommunicate a Protestant reformer. You may also call a Theological Debate in the same language zone as the excommunication. OR If grounds for excommunication exist (see 21.5), excommunicate the ruler of England, France, or Hapsburgs. Place Unrest markers on up to 2 of that power's unoccupied home spaces which are under Catholic religious influence."
            },
            {
                id:6,
                future:0,
                title:"Leipzig Debate",
                type:"Home",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Call a Theological Debate. You can either specify your own debater or specify that one Protestant debater is not available during any one round of this debate."
            },
            {
                id:7,
                future:0,
                title:"Here I Stand",
                type:"Home",
                ops:5,
                turn:"1",
                removed:"No",
                text:"If Luther is alive, Protestant may use this card to retrieve any card in the discard pile, playing or holding that card. OR If Luther is alive, Protestant may substitute Luther (even if committed) for any debater during any round of a debate in the German language zone and then draw a new card. Replaced debater becomes committed (if he wasn't already); Luther returns off-map after debate if he was excommunicated when debate was called."
            },
            {
                id:8,
                future:0,
                title:"Luther's 95 Theses",
                type:"Mandatory",
                ops:0,
                turn:"1",
                removed:"Yes",
                text:"Add Luther at Wittenberg. Convert Wittenberg to Protestant religious influence (2 regulars are moved there from the Electorate Display). Protestant player makes 5 Reformation attempts targeting the German language zone. Protestant rolls one extra die in each attempt. Bucer may be committed for his debater bonus during this event if desired."
            },
            {
                id:9,
                future:0,
                title:"Barbary Pirates",
                type:"Mandatory",
                ops:2,
                turn:"1",
                removed:"Yes",
                text:"Algiers space is now in play. Add an Ottoman square control marker, 2 Ottoman regulars, 2 corsairs, and Barbarossa to that space. Ottomans may now build corsairs and initiate piracy."
            },
            {
                id:10,
                future:0,
                title:"Clement VII",
                type:"Mandatory",
                ops:2,
                turn:"1",
                removed:"Yes",
                text:"Leo X dies. Clement VII replaces Leo as the ruler of the Papacy. Place this card in the ruler space of the Papal power card."
            },
            {
                id:11,
                future:0,
                title:"Defender of the Faith",
                type:"Mandatory",
                ops:2,
                turn:"1",
                removed:"Yes",
                text:"Papal player makes 3 Counter Reformation attempts targeting all language zones. If played by England, English player draws 1 extra card after the Counter Reformation attempts."
            },
            {
                id:12,
                future:0,
                title:"Master of Italy",
                type:"Mandatory",
                ops:2,
                turn:"1",
                removed:"No",
                text:"If a power controls 3 or more of the following 5 keys: Genoa, Milan, Venice, Florence and Naples, that power gains bonus VP. Gain 1 VP for 3 keys controlled; 2 VP for 4 or 5 keys controlled. Any power controlling exactly 2 of these keys draws a card."
            },
            {
                id:13,
                future:0,
                title:"Schmalkaldic League",
                type:"Mandatory",
                ops:2,
                turn:"1",
                removed:"Yes*",
                text:"If it is Turn 2 or later and 12 or more spaces are currently under Protestant religious influence OR this is the Winter Phase of Turn 4, the Protestant defense league is formed as specified in 21.6. Protestant spaces in unrest count towards the total of 12."
            },
            {
                id:14,
                future:0,
                title:"Paul III",
                type:"Mandatory",
                ops:2,
                turn:"3",
                removed:"Yes",
                text:"Clement VII dies; remove his card from the game. Place this card in the ruler space of the Papal power card. Papacy now wins ties during Counter Reformation attempts."
            },
            {
                id:15,
                future:0,
                title:"Society of Jesus",
                type:"Mandatory",
                ops:2,
                turn:"5",
                removed:"Yes",
                text:"Papal player may choose 2 spaces under Catholic religious influence anywhere on the map and place a Jesuit University in each space. The Papal player may now found Jesuit universities."
            },
            {
                id:16,
                future:0,
                title:"Calvin",
                type:"Mandatory",
                ops:2,
                turn:"6",
                removed:"Yes",
                text:"Luther dies; remove the Luther reformer and debater. Calvin replaces Luther as the ruler of this power. Place this card in the ruler space of the Protestant power card."
            },
            {
                id:17,
                future:0,
                title:"Council of Trent",
                type:"Mandatory",
                ops:2,
                turn:"6",
                removed:"Yes",
                text:"Papacy chooses up to 4 uncommitted debaters, then Protestant chooses up to 2 (from any language zone). Commit them all. These powers then roll a number of dice equal to their debaters' total debate value. Each roll of 5 or 6 scores 1 hit. The power with more hits converts a number of spaces equal to the difference in hits to their religious influence. Spaces chosen must be eligible for a Ref/Cntr Ref attempt by that religion."
            },
            {
                id:18,
                future:0,
                title:"Dragut",
                type:"Mandatory",
                ops:2,
                turn:"6",
                removed:"Yes",
                text:"Barbarossa dies. Place Dragut in the same port or sea zone as Barbarossa, then remove Barbarossa from the game."
            },
            {
                id:19,
                future:0,
                title:"Edward VI",
                type:"Mandatory",
                ops:2,
                turn:"6*",
                removed:"Yes",
                text:"Henry VIII dies. Edward VI replaces Henry as ruler of England; place this card in the ruler space of the English power card. The English player places Dudley in London or the same space as Henry, then removes Henry from the game. English armies are Protestant."
            },
            {
                id:20,
                future:0,
                title:"Henry II",
                type:"Mandatory",
                ops:2,
                turn:"6",
                removed:"Yes",
                text:"Francis I dies. Henry II replaces Francis as ruler of France; place this card in the ruler space of the French power card. The French player places Henry in Paris or the same space as Francis, then removes Francis from the game."
            },
            {
                id:21,
                future:0,
                title:"Mary I",
                type:"Mandatory",
                ops:2,
                turn:"6*",
                removed:"Yes",
                text:"Current ruler of England dies and is replaced by Mary. If Henry dies, the English player places Dudley in London or the same space as Henry, then removes Henry from the game. 50% chance each English card play will be used by the Papacy to Burn Books and call Theological Debates in England. English armies are Catholic."
            },
            {
                id:22,
                future:0,
                title:"Julius III",
                type:"Mandatory",
                ops:2,
                turn:"7",
                removed:"Yes",
                text:"Paul III dies; remove his card from game. Place this card in the ruler space of the Papal power card. Papacy wins ties during Counter Reformation attempts."
            },
            {
                id:23,
                future:0,
                title:"Elizabeth I",
                type:"Mandatory",
                ops:2,
                turn:"Variable",
                removed:"Yes",
                text:"Mary I dies. Elizabeth replaces Mary as ruler of England; place this card in the ruler space of the English power card. No chance that English cards can be used by Papacy. English armies are Protestant."
            },
            {
                id:24,
                future:0,
                title:"Arquebusiers",
                type:"Combat",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Gain 2 extra dice in a field battle or naval combat (but not assault or piracy). Must be declared before either side rolls."
            },
            {
                id:25,
                future:0,
                title:"Field Artillery",
                type:"Combat",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Gain 2 extra dice in a field battle (French or Ottoman player gains 3 dice instead of 2). Must be declared before either side rolls."
            },
            {
                id:26,
                future:0,
                title:"Mercenaries Bribed",
                type:"Combat",
                ops:3,
                turn:"1",
                removed:"No",
                text:"One-half (rounded up) of your opponent's mercenaries in the current field battle switch sides prior to combat resolution. Remove these mercenaries from the enemy stack and add the same number of mercenaries from your power's counter mix. Not playable by the Ottomans or if the enemy is the Ottomans."
            },
            {
                id:27,
                future:0,
                title:"Mercenaries Grow Restless",
                type:"Combat",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Play just before an enemy formation rolls to assault one of your fortied spaces. All mercenaries in that enemy formation are removed from play. If the enemy no longer meets the requirements to besiege this space, the siege is broken and the enemy stack must retreat."
            },
            {
                id:28,
                future:0,
                title:"Siege Mining",
                type:"Combat",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Gain 3 extra dice in an assault if you are the attacker. Must be declared before either side rolls."
            },
            {
                id:29,
                future:0,
                title:"Surprise Attack",
                type:"Combat",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Roll your battle dice in this field battle first. Apply all losses before computing the number of dice that your opponent can roll; opponent does not receive any rolls if no units survive the initial attack. Can be played if attacking or defending."
            },
            {
                id:30,
                future:0,
                title:"Tercios",
                type:"Combat",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Hapsburg player can play to gain 3 extra dice in a field battle. These 3 dice hit on a roll of 4, 5, or 6. OR Can be played by a player involved in a field battle against at least 3 Hapsburg regulars. Hapsburg player rolls 3 dice less than normal in this combat. In both cases, must be declared before either side rolls."
            },
            {
                id:31,
                future:0,
                title:"Foul Weather",
                type:"Response",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Play during another power's impulse just after they have announced they are spending CP to move, assault, initiate piracy, conduct a naval move, or start a naval transport. 1 CP is lost. For the rest of the impulse, no land unit of that power may move more than 1 space; assault, piracy, naval moves, and naval transport are prohibited. All effects last only during this power's impulse. May not be used to stop Treachery! event."
            },
            {
                id:32,
                future:0,
                title:"Gout",
                type:"Response",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Play during another power's impulse just after they have announced they are spending CP to move or assault with a formation that includes an army leader. 1 CP is lost. That leader may not move or assault during this impulse. If Charles V is the targeted leader, it stops any transfer he has just announced with the Holy Roman Emperor card (though a CP is not lost in this case)."
            },
            {
                id:33,
                future:0,
                title:"Landsknechts",
                type:"Response",
                ops:1,
                turn:"1",
                removed:"No",
                text:"If played by Hapsburgs, place 4 new Hapsburg mercenaries. If played by Ottomans, eliminate 2 mercenaries anywhere on map. If played by any other power, place 2 new mercenaries. Mercenaries are placed in any combination of spaces already containing friendly land units (even just before a field battle or assault), but not in a stack under siege. May also be used as an event card to add mercenaries in a player's own impulse."
            },
            {
                id:34,
                future:0,
                title:"Professional Rowers",
                type:"Response",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Modify a naval intercept or avoid battle roll by +2 or -2 after the dice are rolled OR Grant any player 3 extra dice in a naval combat (not in Piracy). Play after seeing both sides' rolls."
            },
            {
                id:35,
                future:0,
                title:"Siege Artillery",
                type:"Response",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Grant attacker in an assault 2 extra dice. Play after seeing both sides' rolls. These dice score hits on a roll of 3, 4, 5, or 6. Only playable in assaults with a line of communication of 4 or fewer land spaces to a fortified home space of the major power initiating the assault."
            },
            {
                id:36,
                future:0,
                title:"Swiss Mercenaries",
                type:"Response",
                ops:1,
                turn:"1",
                removed:"No",
                text:"If played by France or Ottomans, the French player places 4 new French mercenaries. If played by any other power, place 2 new mercenaries. Mercenaries are placed in any combination of spaces already containing friendly land units (even just before a field battle or assault), but not in a stack under siege. May also be used as an event card to add mercenaries in a player's own impulse."
            },
            {
                id:37,
                future:0,
                title:"The Wartburg",
                type:"Response",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Only playable by Protestant, and Luther must be alive. Protestant cancels the play of a card as an event. Must be played after event is declared but before it is resolved. Can not be used to cancel Mandatory Events, Combat cards, Response cards, or non-Papal Home cards (Papal Bull and Leipzig Debate may be canceled). Discard the event, this player's impulse is over. Protestant may not initiate debates for rest of turn. Commit Luther (if not already); he can not be added into debates with Here I Stand until next turn."
            },
            {
                id:38,
                future:0,
                title:"Halley's Comet",
                type:"Response",
                ops:2,
                turn:"3",
                removed:"Yes",
                text:"You may either: (a) discard a card at random from another power's hand, OR (b) force any power to skip their next impulse (NOTE: this does not count as a 'pass' towards ending the turn). Either a or b may also be played as an event in the player's own impulse to count as the player's activity for that round."
            },
            {
                id:39,
                future:0,
                title:"Augsburg Confession",
                type:"Event",
                ops:4,
                turn:"3",
                removed:"Yes",
                text:"If Melanchthon is uncommitted, apply a -1 modifier to all Papal rolls during Counter Reformation attempts for the rest of the turn. Papacy also rolls one less die than normal when initiating debates for the rest of the turn. Commit Melanchthon and place Augsburg Confession Active marker on the Turn Track."
            },
            {
                id:40,
                future:0,
                title:"",
                type:"Event",
                ops:3,
                turn:"3",
                removed:"No",
                text:"Declare war on one other major power during this impulse at no CP cost (see 9.6 for restrictions). Then take 2 CP of actions."
            },
            {
                id:41,
                future:0,
                title:"Marburg Colloquy",
                type:"Event",
                ops:5,
                turn:"3",
                removed:"Yes",
                text:"If either Luther or Melanchthon is uncommitted AND either Zwingli or Oekolampadius is uncommitted, Protestant player commits 1 debater from each pair. The Protestant player then makes a number of Reformation attempts equal to the total of their debate value, targeting all language zones."
            },
            {
                id:42,
                future:0,
                title:"Roxelana",
                type:"Event",
                ops:4,
                turn:"3",
                removed:"No",
                text:"May be played by any player as 4 CPs. If played by Ottoman, formation with Suleiman gets one free assault (no CP cost), even on a fortress not under siege at the start of the impulse. If played by another power, they may spend 2 of the CP to send the Suleiman leader to Istanbul."
            },
            {
                id:43,
                future:0,
                title:"Zwingli Dons Armor",
                type:"Event",
                ops:3,
                turn:"3",
                removed:"Yes",
                text:"Protestant player eliminates one Catholic land unit within 3 spaces of Zurich. The Zwingli reformer and debater are then removed from the game (even if there was no such Catholic army to eliminate)."
            },
            {
                id:44,
                future:0,
                title:"Affair of the Placards",
                type:"Event",
                ops:2,
                turn:"4",
                removed:"Yes",
                text:"If Cop is uncommitted, Protestant player makes 4 Reformation attempts targeting the French language zone. Commit Cop."
            },
            {
                id:45,
                future:0,
                title:"Calvin Expelled",
                type:"Event",
                ops:1,
                turn:"4",
                removed:"Yes",
                text:"Remove the Calvin reformer and debater from the map for the rest of the turn. Both return to play at the start of the next turn (replace the reformer in Geneva). Commit Calvin."
            },
            {
                id:46,
                future:0,
                title:"Calvin's Institutes",
                type:"Event",
                ops:5,
                turn:"4",
                removed:"Yes",
                text:"If Calvin is uncommitted, Protestant player makes 5 Reformation attempts targeting the French language zone. Add a +1 die roll modifier to each Protestant roll in the target language zone (i.e. against a French-speaking space). Commit Calvin."
            },
            {
                id:47,
                future:0,
                title:"Copernicus",
                type:"Event",
                ops:6,
                turn:"4",
                removed:"Yes",
                text:"If half or more of your power's home spaces are under Protestant religious influence, gain 2 VP. Otherwise gain 1 VP and either draw a card from the deck or force the Protestant to discard one card at random."
            },
            {
                id:48,
                future:0,
                title:"Galleons",
                type:"Event",
                ops:2,
                turn:"4",
                removed:"No",
                text:"Place a 'Galleons' marker next to the colonies of England, France, or the Hapsburgs. All 'Galleons' results for that power on the New World Riches Table now result in a bonus card. Improves Hapsburg defense against Huguenot Raiders."
            },
            {
                id:49,
                future:0,
                title:"Huguenot Raiders",
                type:"Event",
                ops:2,
                turn:"4",
                removed:"No",
                text:"Playable on behalf of England, France, or Protestant if they have at least one home port under Protestant religious influence and no Raider currently in play. Add a Raider marker of the appropriate power next to the Hapsburg colonies. Hapsburg New World Riches now have a chance to be intercepted by this power (see 20.4)."
            },
            {
                id:50,
                future:0,
                title:"Mercator's Map",
                type:"Event",
                ops:2,
                turn:"4",
                removed:"No",
                text:"Launch a Voyage of Exploration for England, France or the Hapsburgs at no additional CP cost. Place the '+2 Mercator' marker next to the 'Exploration Underway' marker for this power and place both in the 'Crossing Atlantic' box. Add this modifier when resolving the voyage during the New World Phase."
            },
            {
                id:51,
                future:0,
                title:"Michael Servetus",
                type:"Event",
                ops:4,
                turn:"4",
                removed:"Yes",
                text:"Gain 1 VP when played. Discard one card at random from Protestant hand."
            },
            {
                id:52,
                future:0,
                title:"Michelangelo",
                type:"Event",
                ops:4,
                turn:"4",
                removed:"Yes",
                text:"The Papal player rolls 2 dice. The total roll is the number of CP that are immediately added to the Papal fund for St. Peter's construction."
            },
            {
                id:53,
                future:0,
                title:"Plantations",
                type:"Event",
                ops:2,
                turn:"4",
                removed:"No",
                text:"Place a 'Plantations +1' marker next to the colonies of England, France, or the Hapsburgs. That power adds 1 to all rolls on the Potosi and Colony columns of the New World Riches Table for the rest of the game."
            },
            {
                id:54,
                future:0,
                title:"Potosi Silver Mines",
                type:"Event",
                ops:3,
                turn:"4",
                removed:"Yes",
                text:"Add the Potosi marker directly to an open colony box for either England, France or the Hapsburgs. That power then removes one of their colony markers from play for the rest of the game."
            },
            {
                id:55,
                future:0,
                title:"Jesuit Education",
                type:"Event",
                ops:3,
                turn:"5",
                removed:"No",
                text:"If the Society of Jesus event has been played, Papal player chooses 2 spaces under Catholic religious influence anywhere on the map and places a Jesuit university in each space."
            },
            {
                id:56,
                future:0,
                title:"Papal Inquisition",
                type:"Event",
                ops:5,
                turn:"5",
                removed:"No",
                text:"If Caraffa is uncommitted, convert 2 Protestant spaces in the Italian language zone back to Catholic religious influence. Papal player targets either England or Protestant and secretly reviews the cards in that power's hand. Papacy can choose to either draw a card at random from this hand, retrieve any card from the discard pile, or initiate a debate in any zone with two extra dice. Card drawn must be held for a later impulse. Commit Caraffa."
            },
            {
                id:57,
                future:0,
                title:"Philip of Hesse's Bigamy",
                type:"Event",
                ops:2,
                turn:"5",
                removed:"Yes",
                text:"Protestant player must either remove Philip of Hesse from the game or discard one card (chosen at random)."
            },
            {
                id:58,
                future:0,
                title:"Spanish Inquisition",
                type:"Event",
                ops:5,
                turn:"5",
                removed:"No",
                text:"Convert 2 Protestant spaces in the Spanish language zone back to the Catholic side. Hapsburg player secretly reviews the cards in the English and Protestant hands and selects a card from one of these powers to be discarded. Hapsburg player draws a card from the deck. Papal player calls a Theological Debate (in any language zone)."
            },
            {
                id:59,
                future:0,
                title:"Lady Jane Grey",
                type:"Event",
                ops:3,
                turn:"6",
                removed:"Yes",
                text:"If England has changed rulers this turn and has a non-home card remaining in their hand, draw one card from the English hand and one from the deck. Choose 1 card to keep and 1 card to award to either the Protestant or Papal player."
            },
            {
                id:60,
                future:0,
                title:"Maurice of Saxony",
                type:"Event",
                ops:4,
                turn:"6",
                removed:"No",
                text:"Playable by Hapsburg or Protestant. Maurice of Saxony switches sides (changing from a Protestant leader to Hapsburg or vice versa). If he is on the board, the mercenaries in his stack also switch: replace with Protestant or Hapsburg mercenaries as appropriate. Move Maurice and these mercenaries to the nearest unoccupied space under friendly control. If he is captured, he switches sides to the other power. Place in a fortified space controlled by this power."
            },
            {
                id:61,
                future:0,
                title:"Mary Defies Council",
                type:"Event",
                ops:1,
                turn:"7",
                removed:"No",
                text:"Papal player makes 3 Counter Reformation attempts targeting the English language zone."
            },
            {
                id:62,
                future:0,
                title:"Book of Common Prayer",
                type:"Event",
                ops:2,
                turn:"Variable",
                removed:"No",
                text:"If Cranmer is uncommitted, Protestant player makes 4 Reformation attempts in English home spaces (including Calais). Commit Cranmer. After attempts are complete, roll 1 die. On a 1 or 2, there is no further effect. On a 3 or 4, add Unrest to 1 Catholic English home space. On a 5, add Unrest to 2 such spaces. On a 6, add Unrest to all such spaces. Spaces going into unrest may be occupied; spaces are chosen by power playing event."
            },
            {
                id:63,
                future:0,
                title:"Dissolution of the Monasteries",
                type:"Event",
                ops:4,
                turn:"Variable",
                removed:"Yes",
                text:"English player draws 2 cards from deck. Protestant player then makes 3 Reformation attempts targeting the English language zone."
            },
            {
                id:64,
                future:0,
                title:"Pilgrimage of Grace",
                type:"Event",
                ops:3,
                turn:"Variable",
                removed:"Yes",
                text:"Place Unrest markers on up to 5 unoccupied English home spaces."
            },
            {
                id:65,
                future:0,
                title:"A Mighty Fortress",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"If Luther is uncommitted, Protestant player makes 6 Reformation attempts targeting the German language zone. Commit Luther."
            },
            {
                id:66,
                future:0,
                title:"Akinji Raiders",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Playable as event if Ottoman is at war with a power and Ottoman cavalry is within 2 spaces of a space controlled by that same target power. Any intervening space must be controlled by Ottoman. Ottoman draws a card at random from the target power and keeps it in his hand."
            },
            {
                id:67,
                future:0,
                title:"Anabaptists",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Papal player converts two non-electorate and unoccupied spaces under Protestant religious influence back to Catholic religious influence. Spaces converted need not be eligible for Counter Reformation attempts (i.e. they need not be adjacent to a Catholic space)."
            },
            {
                id:68,
                future:0,
                title:"Andrea Doria",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Playable by France, Hapsburgs, or Papacy to deactivate Genoa from their current ally and then immediately activate Genoa as an ally of the power playing this card OR Playable if power controlling Andrea Doria is at war with Ottomans and Doria is in sea zone adjacent to 2 Ottoman-controlled ports. Power playing card and power controlling Doria each draw 1 card from deck. Then roll 3 dice. Each hit of 5 or 6 reduces Ottoman piracy VP by 1 (but not below 0)."
            },
            {
                id:69,
                future:0,
                title:"Auld Alliance",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Playable by France to activate Scotland if unaligned. Playable by England or France to deactivate Scotland if aligned. Also playable by France when Scotland is already a French ally or as payment for intervening after a declaration of war on Scotland. In these last 2 cases add up to 3 new French regulars in any Scottish home space under French control that is not under siege."
            },
            {
                id:70,
                future:0,
                title:"Charles Bourbon",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Add Renegade Leader and 3 mercenaries (or 3 cavalry if Ottoman plays event) to any space you control that is not under siege. If at war with France, these forces can be added to any unoccupied space adjacent to Lyon; take immediate control of that space. Leader is removed from map at the end of the turn."
            },
            {
                id:71,
                future:0,
                title:"City State Rebels",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Pick a captured key (an independent key controlled by a major power, or a home key controlled by a major power that is not allied to the space's home power) that is not currently under siege as the target. Rebels roll 5 dice. Each hit scored forces the power controlling the key to eliminate an army or fleet from the space. If no land or naval units remain after the revolt, do the following: leaders are captured by the power playing the card; remove the control marker and place one from home power (or that power's current major power ally); add 1 regular of the home power in the space."
            },
            {
                id:72,
                future:0,
                title:"Cloth Prices Fluctuate",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"If England controls Calais and Hapsburgs control Antwerp, both powers draw a card from the deck; the power playing this card adds 2 mercenaries (2 cavalry for the Ottoman) in a friendly home space not under siege. OR Power controlling Antwerp discards a card at random. Add unrest on up to 2 unoccupied spaces from this list: Antwerp, Brussels, Amsterdam, all German and Italian-speaking Hapsburg home spaces."
            },
            {
                id:73,
                future:0,
                title:"Diplomatic Marriage",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Not playable by Ottomans or Protestant. Activate or deactivate a minor power if permitted by Section 22.1 OR Play when suing for peace to restore all home spaces and captured leaders taken by 1 enemy power without giving up any cards. War winner still earns 1 VP (2 if Ottoman)."
            },
            {
                id:74,
                future:0,
                title:"Diplomatic Overture",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Draw 2 new cards from the deck. Then give any one card (other than your Home card or a Mandatory Event) to another power. If no such card is in your hand you may in that one case give up a Mandatory Event."
            },
            {
                id:75,
                future:0,
                title:"Erasmus",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"If played on Turn 1 or 2, Protestant player makes 4 Reformation attempts targeting all language zones. If played on Turn 3 or later, Papal player makes 4 Counter Reformation attempts targeting all language zones."
            },
            {
                id:76,
                future:0,
                title:"Foreign Recruits",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Spend 4 CP on building new military units. These units may be built in any space you control that is not under siege. The spaces need not be home spaces like usual. This card also allows the Ottoman to construct units other than corsairs in Algiers or pirate havens."
            },
            {
                id:77,
                future:0,
                title:"Fountain of Youth",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Cancel a Voyage of Exploration that is underway. Remove the Exploration Underway marker for the targeted power and place it on the Turn Track to re-enter play next turn. Then roll a die. On a roll of 4, 5, or 6, one of the targeted power's explorers (chosen at random) is removed from the game."
            },
            {
                id:78,
                future:0,
                title:"Frederick the Wise",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"Yes",
                text:"Convert the two German-speaking and Catholic spaces nearest to Wittenberg to Protestant religious influence. Protestant player chooses between equidistant spaces. Protestant may then pick up Wartburg and add it to his hand if that card is in the discard pile."
            },
            {
                id:79,
                future:0,
                title:"Fuggers",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Draw 2 cards from the deck. You draw 1 less card next turn. Place a '-1 Card' marker on the appropriate power card until next turn as a reminder."
            },
            {
                id:80,
                future:0,
                title:"Gabelle Revolt",
                type:"Event",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Place Unrest markers on up to 2 unoccupied French home spaces."
            },
            {
                id:81,
                future:0,
                title:"Indulgence Vendor",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Draw a card at random from the Protestant hand. Add the CP value of the drawn card to the Papal fund for St. Peter's construction. Card is then discarded."
            },
            {
                id:82,
                future:0,
                title:"Janissaries Rebel",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Place Unrest markers on up to 2 unoccupied Ottoman home spaces. Increase number of spaces to 4 if Ottoman is not at war with a major power."
            },
            {
                id:83,
                future:0,
                title:"John Zapolya",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"Yes",
                text:"If the Buda space is not under siege, add 4 regulars of the power that controls Buda to that space. If Hungary still controls Buda, add Hungarian regulars to that space (up to the limit of the counter mix)."
            },
            {
                id:84,
                future:0,
                title:"Julia Gonzaga",
                type:"Event",
                ops:1,
                turn:"1",
                removed:"Yes",
                text:"If Barbary Pirates has been played, award the Julia Gonzaga marker (1 bonus VP) to the Ottoman player if Piracy scores a hit in the Tyrrhenian Sea later in this turn."
            },
            {
                id:85,
                future:0,
                title:"Katherina Bora",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"Yes",
                text:"If Luther is uncommitted, Protestant player makes 5 Reformation attempts targeting all language zones. Commit Luther."
            },
            {
                id:86,
                future:0,
                title:"Knights of St. John",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"If Knights of St. John are on map, not under siege, and connected by 1 sea zone to an Ottoman-controlled port, draw 1 card at random from Ottoman and contribute CP value to St. Peter's construction. OR If Knights are off-map, Hapsburg adds them to a Hapsburg-controlled home port; the port space then switches to independent political control and a fortress is added to the space (if not already fortified)."
            },
            {
                id:87,
                future:0,
                title:"Mercenaries Demand Pay",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Target power loses all mercenaries unless they discard a card immediately. (Home cards may be used; mandatory events may not). Value of card determines number of mercenaries kept (target power chooses which are kept): 1 CP = 2 units; 2 CP = 4 units; 3 CP = 6 units; 4 CP = 10 units; 5 or 6 CP = all units retained."
            },
            {
                id:88,
                future:0,
                title:"Peasants' War",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"Yes",
                text:"Place Unrest markers on up to 5 unoccupied German-speaking spaces."
            },
            {
                id:89,
                future:0,
                title:"Pirate Haven",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"If Barbary Pirates has been played, Ottoman targets either Oran or Tripoli. Target space must be unoccupied, controlled by a power at war with Ottomans, and must border a sea zone adjacent to a fortified space under Ottoman control. The following items are added to the target space: 1 Ottoman regular, 2 corsairs, and a Pirate Haven marker (if not present). The Ottoman player may now build corsairs in this space when it is under Ottoman control."
            },
            {
                id:90,
                future:0,
                title:"Printing Press",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"No",
                text:"The attacker rolls 1 extra die during Reformation attempts for the rest of the turn. Place Printing Press Active marker on the Turn Track. Protestant player immediately makes 3 Reformation attempts targeting all language zones."
            },
            {
                id:91,
                future:0,
                title:"Ransom",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Immediately return any captured leader (even if from another power) to one of his home fortified spaces. Owning player chooses which fortified space."
            },
            {
                id:92,
                future:0,
                title:"Revolt in Egypt",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Ottoman player must remove 3 land units from the map and place them (along with any leaders desired) on this Foreign War card. Egyptians start with 3 land units. If Ottoman strength drops below 3 land units, all new Ottoman land unit builds must be placed on card until total of 3 is restored. Award 1 War Winner VP to Ottoman when war ends. Add a -1 Card marker on Ottoman until war ends."
            },
            {
                id:93,
                future:0,
                title:"Revolt in Ireland",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"English player must remove 4 land units from the map and place them (along with any leaders desired) on this Foreign War card. Irish start with 3 land units. If English strength drops below 4 land units, all new English land unit builds must be placed on card until total of 4 is restored. If played by France or Hapsburgs, they may remove 1 of their land units from the map to increase the strength of the Irish to 4 land units. Award 1 War Winner VP to England when war ends. Add a -1 Card marker on England until war ends."
            },
            {
                id:94,
                future:0,
                title:"Revolt of the Communeros",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Place Unrest markers on up to 3 unoccupied Spanish-speaking spaces."
            },
            {
                id:95,
                future:0,
                title:"Sack of Rome",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"Yes*",
                text:"If there are more non-Papal mercenaries in 1 Italian-speaking space than Papal regulars in Rome, the stack with the mercs fights a field battle against the regulars in Rome. If Papacy loses: deduct 5 CP from St. Peter's track, draw 2 cards from Papal hand. Owner of mercenaries keeps one card, discards other. See Section 21.5 for full procedure. Remove from deck if Papacy loses."
            },
            {
                id:96,
                future:0,
                title:"Sale of Moluccas",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"Yes",
                text:"Power who has completed the circumnavigation exploration draws 2 cards from the deck."
            },
            {
                id:97,
                future:0,
                title:"Scots Raid",
                type:"Mandatory",
                ops:2,
                turn:"3",
                removed:"No",
                text:"Ignore event unless Scotland is allied to France. If Stirling is not under French control, switch Stirling to French control and displace any units that are not French or Scottish from this space. Then France gains up to 6 CP that must be spent (as permitted by current war status) on building units, moving, controlling spaces or assaulting in Scottish home spaces, Berwick, Carlisle, or York. Assaults on these spaces can be conducted even on a fortified space not under siege at the start of the impulse. France has the option to transfer a French leader to a Scottish home space before taking these actions but in this case gets only 3 CP to spend."
            },
            {
                id:98,
                future:0,
                title:"Search for Cibola",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Cancel a Voyage of Exploration or Conquest that is underway. Remove the Exploration Underway, Conquest Underway, or Conquest marker for the targeted power and place it on the Turn Track to re-enter play next turn, and to serve as a reminder that this power may not launch another voyage of this type until next turn."
            },
            {
                id:99,
                future:0,
                title:"Sebastian Cabot",
                type:"Event",
                ops:1,
                turn:"1",
                removed:"Yes*",
                text:"Playable by England, France, Hapsburg (but only once during the game for each power). Cabot (a 1 explorer) is launched on a Voyage of Exploration for the player's power. That power's 'Exploration Underway' marker is not flipped after resolving the expedition, nor does the expedition suffer a -1 modifier if that marker is on the 'Uncharted' side. Remove that power's Cabot marker from the game after resolving the exploration. Remove the card from the deck if Cabot dies while exploring."
            },
            {
                id:100,
                future:0,
                title:"Shipbuilding",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"Not playable by Protestant. Add 2 new squadrons in any controlled home port (or 1 squadron in each of two home ports). Ottoman may choose to substitute 2 corsairs for each naval squadron (but still may not construct squadrons in Algiers or a pirate haven)."
            },
            {
                id:101,
                future:0,
                title:"Smallpox",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Playable by England, France, Hapsburgs. Launch a a Voyage of Conquest at no additional CP cost. Place the '+2 Smallpox' marker next to the Conquest Underway or Conquest marker for this power. Add this modifier when resolving the voyage during the New World Phase."
            },
            {
                id:102,
                future:0,
                title:"Spring Preparations",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Not playable by Protestant or any power that doesn't control its own capital. Play during Spring Deployemnt Phase. Add 1 regular to capital (add 1 to each if Hapsburg). Formation moving during spring deployment may cross passes, move more than 5 units by sea, and cross sea zones where other powers have fleets."
            },
            {
                id:103,
                future:0,
                title:"Threat to Power",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Target one minor army leader (Charles Brandon, Duke of Alva, Montmorency, or Ibrahim Pasha) who is not currently captured. Roll a die. On a 1, 2 or 3, remove from play for the rest of the current turn. On a 4, 5 or 6, remove from play for the rest of the game. Returning leaders are placed in their capital if possible. If not, place them in a friendly home key."
            },
            {
                id:104,
                future:0,
                title:"Trace Italienne",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"Add a fortress to any unfortified space (even if under Unrest or controlled by another power). Unless space is independent or in unrest, add 1 regular to that space from the counter mix of the power which controls the space."
            },
            {
                id:105,
                future:0,
                title:"Treachery!",
                type:"Event",
                ops:5,
                turn:"1",
                removed:"No",
                text:"Play against any fortified space that is currently under siege, even a space where a besieging power does not meet the requirements for assault (either because of a lack of a LOC or because of the presence of naval units). Immediately initiate an assault by a besieging power on the units within the fortifications. After the assault, if the besieging units still outnumber the units within, apply these results: all defending units are eliminated; defending leaders are captured; space becomes controlled by besieging power."
            },
            {
                id:106,
                future:0,
                title:"Unpaid Mercenaries",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"All mercenaries in a single space are removed from play. If multiple major powers have mercenaries in a single space, only one of the major powers can be affected by this event."
            },
            {
                id:107,
                future:0,
                title:"Unsanitary Camp",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"A single stack of land units is stricken by disease. One-third (rounded up) of the units are removed from play (as chosen by their owner). At least half of the losses must be from regular troops (if possible). If multiple major powers have units in a single space, only one of the major powers can be affected by this event. Allied minor power units are considered to be a part of the stack with the major power that controls them."
            },
            {
                id:108,
                future:0,
                title:"Venetian Alliance",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Playable by Papacy to activate Venice if unaligned. Playable by Ottoman or Papacy to deactivate Venice if aligned. Also playable by Papacy when Venice is already a Papal ally, or in Diplomacy Phase by Papacy to intervene after a declaration of war on Venice. In these last two cases add up to 1 Venetian regular and 2 Venetian fleets (subject to counter mix) in any Papal-controlled port not under siege."
            },
            {
                id:109,
                future:0,
                title:"Venetian Informant",
                type:"Event",
                ops:1,
                turn:"1",
                removed:"No",
                text:"Play during Spring Deployment Phase, before any powers have deployed units. The cards in one power's hand are reviewed in secret by you or by a power designated by you."
            },
            {
                id:110,
                future:0,
                title:"War in Persia",
                type:"Event",
                ops:4,
                turn:"1",
                removed:"No",
                text:"Ottoman player must remove 5 land units from the map and place them (along with any leaders desired) on this Foreign War card. Persians start with 4 land units. If Ottoman strength drops below 5 land units, all new Ottoman land unit builds must be placed on card until total of 5 is restored. Award 1 War Winner VP to Ottoman when war ends. Add a -1 Card marker on Ottoman until war ends."
            },
            {
                id:111,
                future:0,
                title:"Colonial Governor/Native Uprising",
                type:"Event",
                ops:2,
                turn:"1",
                removed:"No",
                text:"May be played by any power to move this marker to a new position on either side on the colony display. During the Card Draw phase of subsequent turns, No Effect results from any colony of the chosen player are converted to Card (if marker on Colonial Governor side) or Elim (if marker on Native Uprising side). Marker is removed from display at the end of the Card Draw phase in which a No Effect result is altered (though it can return if this card is played in a future turn)."
            },
            {
                id:112,
                future:0,
                title:"Thomas More",
                type:"Event",
                ops:3,
                turn:"1",
                removed:"No",
                text:"If played by England or Protestant, More is executed. Place Thomas More marker on Turn Track to indicate there are no debates in England this turn. England draws 1 card from deck and then discards any 1 card they choose from their hand. Remove from deck. OR If played by any other power, Papacy gets to call a debate and roll 1 extra attack die each round (3 extra dice if debate is in England). Remove from deck if Henry has married Anne Boleyn."
            },
            {
                id:113,
                future:0,
                title:"Imperial Coronation",
                type:"Mandatory",
                ops:2,
                turn:"3",
                removed:"Yes*",
                text:"If Charles is in the Italian language zone, Hapsburgs and power playing this card draw 1 card from the deck."
            },
            {
                id:114,
                future:0,
                title:"La For&#234;t's Embassy in Istanbul",
                type:"Mandatory",
                ops:2,
                turn:"3",
                removed:"Yes*",
                text:"If France and the Ottoman are allied, both powers draw and keep 1 card."
            },
            {
                id:115,
                future:0,
                title:"Thomas Cromwell",
                type:"Response",
                ops:3,
                turn:"4",
                removed:"Yes*",
                text:"Playable as a response to cancel play of Papal Bull to excommunicate Cranmer. OR Playable as an event to retrieve Dissolution of the Monasteries from discard pile and award that card to England. OR Playable as event to publish a treatise in England. All English treatises cost only 2 CP this turn. Remove from deck after play as event if 3 or lower result has occurred on Pregnancy Chart."
            },
            {
                id:116,
                future:0,
                title:"Rough Wooing",
                type:"Event",
                ops:3,
                turn:"5",
                removed:"No",
                text:"Playable if Edward VI has been born, is still alive, and Scotland is allied with France. England and France each roll a die and add the number of land and naval units under their control in Scottish home spaces to their total. If the English number exceeds the French number by 2, deactivate Scotland from France and then immediately activate Scotland as an English ally. All Scottish home spaces come under English control and displace any units that are not English or Scottish from these spaces."
            }
        ]
    }
}

export default deck;

