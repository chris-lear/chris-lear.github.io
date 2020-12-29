"use strict"

const deck = {
    cards: function(){
        var c=

		[
			{id:1,
				title:"Gulf of Tonkin",
				type:"Dual",
				unshaded:"Incident and resolution: US free Air Strikes, then moves 6 US pieces from out-of-play to any Cities.",
				shaded:"Congressional regrets: Aid -1 per Casualty. All Casualties out of play.",
				tip:"The free Air Strike otherwise follows the usual rule (4.2.3), so it can be in any spaces with US/ARVN pieces, it shifts Support/Opposition, and it can Degrade the Trail. “Pieces” include Bases (1.4)."
			}

			,
			{id:2,
				title:"Kissinger",
				type:"Dual",
				unshaded:"Operation Menu: Remove a die roll of Insurgent pieces total from Cambodia and Laos.",
				shaded:"\"Secret bombing\" revealed: NVA places 2 pieces in Cambodia. US moves any 2 US Troops to out of play. Aid -6.",
				tip:"“Pieces” include unTunneled Bases (1.4, 5.1.1). “Any Troops” here can include Casualties, Available, or from the map."
			}

			,
			{id:3,
				title:"Peace Talks",
				type:"Dual",
				unshaded:"Haiphong mined: NVA Resources -9. Linebacker II allowed when Support+Available >25 (mark).",
				shaded:"Bombing halt: NVA Resources +9. If Trail 0-2, Improve to 3.",
				tip:"For the unshaded effect, place the “Peace Talks” marker on the “Linebacker II” US Pivotal Event card as a reminder of its loosened precondition."
			}

			,
			{id:4,
				title:"Top Gun",
				type:"US Capability",
				unshaded:"Air combat maneuver: Cancel shaded MiGs. Air Strikes Degrade Trail 2 boxes.",
				shaded:"Mediocre tactics: Air Strike Degrades Trail only on die roll of 4-6.",
				tip:"The unshaded “Top Gun” Capability can either block shaded “MiGs” from being executed or remove it once it has been executed. The shaded means that US each Air Strike first announces whether attempting Degrade of Trail, then rolls a die to determine effect."
			}

			,
			{id:5,
				title:"Wild Weasels",
				type:"Momentum",
				unshaded:"Air defense suppression: Remove shaded SA-2s or, if no shaded SA-2s, Degrade Trail 2 boxes and NVA Resources -9.",
				shaded:"Complex strike packages: Until Coup, Air Strike only Degrades Trail if no spaces selected. MOMENTUM",
				tip:"Unshaded “Wild Weasels” can remove shaded “SA-2s” only at the moment that “Wild Weasels” is executed. Shaded effect means that US has to choose with each Air Strike Special Activity whether to remove enemy pieces or Degrade the Trail, not both."
			}

			,
			{id:6,
				title:"Aces",
				type:"Dual",
				unshaded:"Robin Olds ambushes MiGs: Free Air Strike any 1 space outside the South, degrading Trail 2 boxes.",
				shaded:"MiG ace \"Colonel Tomb\": 2 Available US Troops to Casualties. Improve Trail by 2 boxes.",
				tip:"“Any 1 space outside the South” means any 1 North Vietnam, Laos, or Cambodia Province, even if no US or ARVN piece there. Degrade of the Trail is 2 boxes total, instead of the usual."
			}

			,
			{id:7,
				title:"ADSID",
				type:"Momentum",
				unshaded:"Air-delivered seismic intrusion detector: Through Coup, -6 NVA Resources at any Trail# change. MOMENTUM",
				shaded:"Dubious technology: Improve Trail by 1 box and to a minimum of 2. ARVN Resources -9.",
				tip:"The unshaded text drops NVA Resources upon both Improving and Degrading the Trail via any means (player action, Event, or Coup Round Sequence)."
			}

			,
			{id:8,
				title:"Arc Light",
				type:"US Capability",
				unshaded:"Guided B-52 tactical bombing: 1 space each Air Strike may be a Province without COIN pieces.",
				shaded:"Moonscape: Air Strike spaces removing >1 piece shift 2 levels toward Active Opposition.",
				tip:"“Provinces” include spaces in North Vietnam, Laos, and Cambodia (1.3.5). A Base is a “piece” (1.4)."
			}

			,
			{id:9,
				title:"Psychedelic Cookie",
				type:"Dual",
				unshaded:"9th Division: US moves up to 3 US Troops from out of play to Available or South Vietnam, or from the map to Available.",
				shaded:"Worn out formation: US takes 3 of its Troops from the map out of play.",
				tip:"Adjust “Support+Available” score marker when US Troops or Bases move in or out of Available (7.2)."
			}

			,
			{id:10,
				title:"Rolling Thunder",
				type:"Momentum",
				unshaded:"Sustained bombing: Degrade Trail 2 boxes. -9 NVA Resources. NVA Ineligible through next card.",
				shaded:"Assets to restricted strategic air campaign: -5 ARVN Resources. No Air Strike until Coup. MOMENTUM",
				tip:"The drop in ARVN Resources is instant and once; the ban on Air Strikes lasts until the next Coup Round (5.4)."
			}

			,
			{id:11,
				title:"Abrams",
				type:"US Capability",
				unshaded:"Counter-logistics: 1 US Assault space may remove 1 enemy non-Tunnel Base first not last.",
				shaded:"No more big-unit war: US may select max 2 spaces per Assault.",
				tip:"The unshaded text changes US Assault only by removing the “Bases last” restriction for 1 Base in 1 space – the total number of pieces to be removed and other restrictions (3.2.4) remain the same."
			}

			,
			{id:12,
				title:"Capt Buck Adams",
				type:"Dual",
				unshaded:"Strategic reconnaissance: Outside the South, flip all Insurgents Active and remove 1 NVA Base.",
				shaded:"SR-71 pilot must outrun SA-2s: Place 1 NVA Base at NVA Control outside the South and flip any 3 NVA Guerrillas Underground.",
				tip:"“At NVA Control outside the South” means place 1 available NVA Base into any North Vietnam, Laos, or Cambodia Province that already has NVA Control and where there are not already 2 Bases (1.3.5, 1.4.2, 5.1.1)."
			}

			,
			{id:13,
				title:"Cobras",
				type:"US Capability",
				unshaded:"Gunships: 2 US/ARVN Sweep spaces each remove 1 Active unTunneled enemy (Troops first, Bases last).",
				shaded:"Close air support losses: Each US Assault space, 1 US Troops to Casualties on a die roll of 1-3.",
				tip:"An added ARVN Assault in a US Assault space would have no added effect on US Casualties."
			}

			,
			{id:14,
				title:"M-48 Patton",
				type:"US Capability",
				unshaded:"Armored Punch: 2 non-Lowland US Assault spaces each remove 2 extra enemy pieces.",
				shaded:"RPGs: After US/ARVN Patrol, NVA on a die roll of 1-3 removes 1 cues that moved (US to Casualties).",
				tip:"The unshaded text changes US Assault only by adding to the number of pieces to be removed from some spaces – restrictions on which pieces may be removed (3.2.4) remain the same. “US to Casualties” means that any US pieces removed go to the Casualties box, while ARVN pieces removed go to ARVN Available Forces as usual (1.4.1)."
			}

			,
			{id:15,
				title:"Medevac",
				type:"Momentum",
				unshaded:"Dustoff: This Commitment, all Troop Casualties Available (mark). MOMENTUM",
				shaded:"Hueys diverted: Executing Faction remains Eligible. Until Coup, no Air Lift (mark). MOMENTUM",
				tip:"Place the “Medevac” marker on the corresponding side onto the set-aside Momentum card as a reminder of which text was executed. For unshaded, upon the coming Commitment Phase, immediately move all US Troops that are in the Casualties box to Available; no Troops go out of play; Base Casualties still do. The Casualties will already have reduced Aid in the preceding Resources Phase (6.2.5, 6.5). If unshaded Event 73 “Great Society” occurs while unshaded “Medevac” is in effect, “Medevac” affects the immediate Commitment Phase and then stays in effect to affect the coming Coup Round’s Commitment Phase as well. Note also that unshaded “Medevac” played during the final campaign would have no effect unless unshaded “Great Society” subsequently occurs, because there otherwise will be no further Commitment Phase (6.4.5, 6.5)."
			}

			,
			{id:16,
				title:"Blowtorch Komer",
				type:"Momentum",
				unshaded:"Pacification czar: Aid +10. This Support phase, Pacify costs 1 Resource per step or Terror. MOMENTUM",
				shaded:"Brusque manager: Aid -10. Shift a space with Troops and Police 1 level toward Active Opposition.",
				tip:"Addition of Aid is instant; the reduced cost to Pacify applies in the next Coup Round only (5.4)."
			}

			,
			{id:17,
				title:"Claymores",
				type:"Momentum",
				unshaded:"Perimeter: Stay Eligible. Until Coup, no Ambush; remove 1 Guerrilla each Marching group that Activates. MOMENTUM",
				shaded:"Infiltrators turn mines around: Remove 1 COIN Base and 1 Underground Insurgent from a space with both (US to Casualties).",
				tip:"Eligibility for the executing Faction applies instantly and once; the effects on Ambush and March last until the next Coup Round (5.4)."
			}

			,
			{id:18,
				title:"Combined Action Platoons",
				type:"US Capability",
				unshaded:"Hamlet defense: US Training places or relocates an added Police into any 1 space with US Troops.",
				shaded:"Passive posture: US may select max 2 spaces per Sweep.",
				tip:"For the unshaded Capability, just 1 Police places or relocates per Training Operation, regardless of how many spaces the US Trains in."
			}

			,
			{id:19,
				title:"CORDS",
				type:"US Capability",
				unshaded:"Civil Operations and Revolutionary Development Support: US Training may Pacify in 2 selected spaces.",
				shaded:"Civilian programs subordinated to military: US Training may Pacify only to Passive Support.",
				tip:"Pacification costs per Terror marker or level remain the same."
			}

			,
			{id:20,
				title:"Laser Guided Bombs",
				type:"US Capability",
				unshaded:"Dawn of precision strike: Air Strike does not shift Support/Opposition in spaces where only 1 piece removed.",
				shaded:"Camouflage: Air Strike removes no more than 4 pieces.",
				tip:"A Base is a “piece” (1.4)"
			}

			,
			{id:21,
				title:"Americal",
				type:"Dual",
				unshaded:"23rd Division: US moves up to 2 US Troops each from the map and out of play to any 1 space or Available.",
				shaded:"US divisions \"clean out\" NLF: In 1 or 2 Provinces with US Troops, remove 1 VC piece to set to Active Opposition.",
				tip:"For the shaded Event, the VC “piece” could be a Guerrilla or an unTunneled Base (1.4, 5.1.1). If there are Provinces that have US Troops, VC, and could be set (changed) to Active Opposition, such Provinces would have to be chosen first. Note that COIN Factions might advantageously use the shaded text (5.2)!"
			}

			,
			{id:22,
				title:"Da Nang",
				type:"Momentum",
				unshaded:"US Marines arrive: US places up to 6 Troops in Da Nang, up to 3 from out of play.",
				shaded:"VC fire closes air base: Remove all Support within 1 space of Da Nang. No Air Strike until Coup. MOMENTUM",
				tip:"Removal of Support is instant and once; the ban on Air Strikes lasts until the next Coup Round (5.4)."
			}

			,
			{id:23,
				title:"Operation Attleboro",
				type:"Dual",
				unshaded:"Stab at Iron Triangle: US free Air Lifts into, Sweeps in, then Assaults a space with a Tunnel -- removing Tunneled Bases as if no Tunnel.",
				shaded:"Heavy casualties, few results: Select a Tunnel space -- remove a die roll of US Troops within 1 space of it to Casualties.",
				tip:"This is one of just a few Events that can force removal of Tunneled Bases (5.1.1). The Sweep could occur even during Monsoon. Free US Assault can add an ARVN Assault at cost 0 (3.2.4)."
			}

			,
			{id:24,
				title:"Operation Starlite",
				type:"Dual",
				unshaded:"VC caught off guard: Remove all VC from a coastal Province with or adjacent to US Troops.",
				shaded:"Slipped away: In up to 3 Provinces, flip all VC Guerrillas Underground. Stay Eligible.",
				tip:"“Coastal” Provinces are those touching or across a Highway from ocean (1.3.7). For the shaded text, the Faction executing the Event stays Eligible."
			}

			,
			{id:25,
				title:"TF-116 Riverines",
				type:"Dual",
				unshaded:"Delta boats: Remove all NVA/VC from Mekong LoCs. US or ARVN free Sweep into/in then free Assault each Lowland touching Mekong.",
				shaded:"VC river fortifications: Place 2 VC Guerrillas per Mekong LoC space, then Sabotage each that has more VC than COIN.",
				tip:"Whichever Faction executed the unshaded text would choose either US or ARVN to Sweep and Assault, and that Sweeping/Assaulting Faction would choose how (5.1). The Sweep could occur even during Monsoon. Free US Assault can add an ARVN Assault at cost 0 (3.2.4). “Mekong” means any of the 3 river LoC spaces touching Can Tho. “COIN” means either US or ARVN pieces."
			}

			,
			{id:26,
				title:"LRRP",
				type:"Dual",
				unshaded:"Long Range Recon Patrol: US places 3 Irregulars outside the South then free Air Strikes, removing Bases first.",
				shaded:"Patrols ambushed: 3 Irregulars map to Casualties. Shift each space they were in 1 level toward Active Opposition.",
				tip:"“Irregulars” are US Special Forces pieces, not ARVN Rangers. “Outside the South” means any Laos or Cambodia Provinces. The free Air Strike otherwise follows the usual rule (4.2.3) so can be in any spaces with US/ARVN pieces (not only in those that just received Irregulars or outside the South), shifts Support/Opposition, and can Degrade the Trail."
			}

			,
			{id:27,
				title:"Phoenix Program",
				type:"Dual",
				unshaded:"Cadres assassinated: Remove any 3 VC pieces total from any COIN Control spaces.",
				shaded:"Misdirected: Add a Terror marker to any 2 spaces outside Saigon with COIN Control and VC. Set them to Active Opposition.",
				tip:"“Pieces” include unTunneled Bases (1.4, 5.1.1)."
			}

			,
			{id:28,
				title:"Search and Destroy",
				type:"US Capability",
				unshaded:"Mobile counter-guerrilla ops: Each US Assault space may remove 1 Underground Guerrilla.",
				shaded:"Villagers in the crossfire: Each US and ARVN Assault Province shifts by 1 level toward Active Opposition.",
				tip:"The unshaded effect changes US Assault only by allowing inclusion of 1 Underground Guerrilla per space among the pieces to be removed (3.2.4) – it therefore adds to the total removed only if that number would otherwise be 0. The shaded effect applies to Provinces only, not Cities, and to US-only, ARVN-only, and US plus ARVN Assaults."
			}

			,
			{id:29,
				title:"Tribesmen",
				type:"Dual",
				unshaded:"Minority fighters: Remove any 4 Insurgent pieces total from spaces with Irregulars.",
				shaded:"Tribal secession: Replace all Irregulars with VC Guerrillas. 1 Neutral Highland to Active Opposition. -3 Patronage.",
				tip:"“Pieces” include unTunneled Bases (1.4, 5.1.1). “Insurgent” means NVA or VC. “Irregulars” are US Special Forces pieces, not ARVN Rangers. Replace Irregulars that are on the map (only), with Guerrillas 1 for 1 in place (Irregulars to Available). “1 Highland” means 1 Highland space."
			}

			,
			{id:30,
				title:"USS New Jersey",
				type:"Dual",
				unshaded:"Fire support: US or ARVN free Air Strikes any 1-3 coastal spaces, removing up to 6 pieces per space (no effect on Trail).",
				shaded:"Frightening free fire: Shift 2 coastal Provinces with US Troops each 2 levels toward Active Opposition.",
				tip:"“Coastal” means Provinces, Cities, and LoCs touching ocean, including North Vietnam, as well as Provinces across a Highway from ocean (1.3.7). For the unshaded text, “any 1-3 spaces” means that the spaces do not need to have US or ARVN pieces in them. The executing Faction chooses US or ARVN to strike, and that Faction decides the details; it must strike at least 1 space. The Air Strikes have all other usual restrictions and effects in the spaces, including removing Active pieces only and Bases last, and shifting Support/ Opposition (4.2.3)."
			}

			,
			{id:31,
				title:"AAA",
				type:"NVA Capability",
				unshaded:"Assets to protection from close air attack: Rally that Improves Trail may select 1 space only.",
				shaded:"Point air defense of logistic hubs: Air Strike does not Degrade Trail below 2.",
				tip:"For the unshaded Capability, the NVA may still Rally in more than 1 space, but, if they do so, then that Rally Operation may not also Improve the Trail."
			}

			,
			{id:32,
				title:"Long Range Guns",
				type:"NVA Capability",
				unshaded:"US M-107 175mm counterbattery: NVA Bombard max 1 space.",
				shaded:"Soviet M-46 130mm artillery: NVA Bombard max 3 spaces.",
				tip:"Other restrictions on Bombard apply normally (4.4.2)."
			}

			,
			{id:33,
				title:"MiGs",
				type:"NVA Capability",
				unshaded:"Expensive interceptors: NVA Resources -6 each Reset.",
				shaded:"High US loss ratio: Unless unshaded Top Gun, whenever Air Strike Degrades Trail, US removes 1 Available Troop to Casualties.",
				tip:"The unshaded “Top Gun” Capability can either block shaded “MiGs” from being executed or remove it once it has been executed."
			}

			,
			{id:34,
				title:"SA-2s",
				type:"NVA Capability",
				unshaded:"Fiddly Soviet gear: When Air Strike Degrades Trail, US removes 1 NVA piece outside the South.",
				shaded:"SAMs guard infrastructure: NVA Rally Improves Trail 2 boxes not 1 (unshaded Wild Weasels remove).",
				tip:"“Piece” may include an unTunneled Base (1.4, 5.1.1). “Outside the South” includes North Vietnam (1.3.5). Unshaded “Wild Weasels” (Event card #5) can remove shaded “SA-2s” only at the moment that “Wild Weasels” is executed."
			}

			,
			{id:35,
				title:"Thanh Hoa",
				type:"Dual",
				unshaded:"Bridge busters: US free Air Strikes, degrading Trail by 3 boxes. NVA Resources -6.",
				shaded:"Stubborn targets: Improve Trail by 1 box. Then add three times Trail value to NVA Resources.",
				tip:"The Air Strike Degrades the Trail 3 boxes instead of the usual amount (“4” would go to “1”)."
			}

			,
			{id:36,
				title:"Hamburger Hill",
				type:"Dual",
				unshaded:"A Shau Valley campaign: Move 4 US Troops from any spaces to a Highland. Remove 1 NVA or VC Base there, even if Tunneled.",
				shaded:"Prepared defenses: Place a Tunnel on an NVA or VC Highland Base. 3 US Troops there to Casualties.",
				tip:"“A Highland” means 1 Highland space. “Highland Base” means a Base in a Highland space. This is one of just a few Events that can force removal of Tunneled Bases (5.1.1)."
			}

			,
			{id:37,
				title:"Khe Sanh",
				type:"Dual",
				unshaded:"Northern casualties: Select a US Base with US Troops. Remove 10 NVA Troops within 1 space of it.",
				shaded:"US Marines pinned: Up to 3 US Troops in 1 space with NVA to Casualties. US Ineligible through next card.",
				tip:"The 10 total NVA Troops removed may come from more than 1 adjacent space, including the same space as the US pieces."
			}

			,
			{id:38,
				title:"McNamara Line",
				type:"Momentum",
				unshaded:"Fortification mentality: Redeploy all COIN forces outside Vietnam to COIN-Controlled Cities. ARVN Resources -12. No Infiltrate or Trail Improvement by Rally until Coup. MOMENTUM",
				shaded:"",
				tip:"“Outside Vietnam” means Laos and Cambodia Provinces. The executing Faction gets to choose which redeploying pieces go to which COIN-Controlled Cities (5.1). Redeploy and Resource drop occur instantly and once; the effects on Infiltrate and Rally last until the next Coup Round (5.4)."
			}

			,
			{id:39,
				title:"Oriskany",
				type:"Momentum",
				unshaded:"\"Alpha\" strikes on North Vietnam: Remove any 4 pieces from North Vietnam or, once none, Laos. Degrade Trail 2 boxes.",
				shaded:"Explosion on CV-34: 1 Available US Troop out of play. Through next Coup, no Degrade of Trail. MOMENTUM",
				tip:"“Pieces” include unTunneled Bases as well as Troops and Guerrillas (1.4, 5.1.1). The US Troop goes out of play immediately; the ban on Degrade of Trail lasts through the end of the next Coup Round (so blocks effects of COIN Control in Laos/Cambodia and would leave “4” at “4”, 6.2.2 & 6.6)."
			}

			,
			{id:40,
				title:"PoWs",
				type:"Dual",
				unshaded:"Release negotiations keep US at war: Free Air Strike. 2 US Troops from Casualties to Available.",
				shaded:"Air campaign creates hostages: 3 US Troops from Available to Casualties.",
				tip:"Whichever Faction executes the unshaded Event decides the specifics of the Air Strike Special Activity (spaces targeted, whether the Trail is Degraded, etc.)."
			}

			,
			{id:41,
				title:"Bombing Pause",
				type:"Momentum",
				unshaded:"Tet holiday gesture: Set any 2 spaces to Passive Support. Patronage +2. No Air Strike until Coup. MOMENTUM",
				shaded:"",
				tip:"The Support and Patronage take effect at once; the ban on Air Strikes lasts until the next Coup Round."
			}

			,
			{id:42,
				title:"Chou En Lai",
				type:"Dual",
				unshaded:"Chinese opening to US: NVA Resources -10. NVA must remove a die roll in Troops.",
				shaded:"Chinese boost aid to North: NVA add +10 Resources. VC add Trail value in Resources.",
				tip:"For the unshaded Event, the NVA get to choose which of their Troops are removed from the map."
			}

			,
			{id:43,
				title:"Economic Aid",
				type:"Dual",
				unshaded:"Free World aids Saigon: 2 ARVN or 2 US Bases out-of-play to Available. Then ARVN Resources +6 or Aid +12.",
				shaded:"Moscow aids Hanoi: Improve the Trail 1 box. Then either Improve it 1 more box or add +10 NVA Resources.",
				tip:"Choose either 2 ARVN or 2 US Bases, not 1 ARVN Base and 1 US Base."
			}

			,
			{id:44,
				title:"Ia Drang",
				type:"Dual",
				unshaded:"Silver Bayonet: US free Air Lifts into 1 space with any NVA piece, then free Sweeps and Assaults there.",
				shaded:"Dong Xuan campaign -- hot LZs: Select a Province with NVA Troops -- remove a die roll of US Troops within 1 space of it to Casualties.",
				tip:"For the unshaded Event, the US decides the details of the free actions but must Air Lift, Sweep, and Assault with something. The Sweep could occur even during Monsoon. The free US Assault can add an ARVN Assault at cost 0 (3.2.4). For shaded, the US Troops can be any either in the same space as or adjacent to the Province with NVA Troops."
			}

			,
			{id:45,
				title:"PT-76",
				type:"NVA Capability",
				unshaded:"Light armor target: Each NVA Attack space, first remove 1 NVA Troop cube.",
				shaded:"Communist armored assault: NVA Attack in 1 space removes 1 enemy per Troop.",
				tip:"The Capability will have no effect on NVA Attacks with Guerrillas where no NVA Troops. The unshaded version will remove an NVA Troop even when NVA Guerrillas Attack or Ambush in a space with an NVA Troop."
			}

			,
			{id:46,
				title:"559th Transport Grp",
				type:"Momentum",
				unshaded:"Tough terrain: Degrade the Trail by 2 boxes. Until Coup, Infiltrate is max 1 space. MOMENTUM",
				shaded:"The way through: NVA free Infiltrate. Then NVA add 3 times and VC 2 times Trail value in Resources.",
				tip:"The Trail Degrades at once; the limit on Infiltrate lasts until the next Coup Round."
			}

			,
			{id:47,
				title:"Chu Luc",
				type:"Dual",
				unshaded:"Southerners resist invasion: Add ARVN Troops to double the ARVN pieces in a space with NVA. All ARVN free Assault NVA.",
				shaded:"NVA professional soldiers: Place up to 10 NVA Troops anywhere within 1 space of North Vietnam.",
				tip:"For the unshaded Event, in the selected space, count the number of ARVN pieces (including Bases) and place that number of ARVN Troops there from Available. Then ARVN Troops and Police Assault to remove NVA (only) in each map space with both ARVN and Active NVA. For the shaded Event, place the Troops anywhere among North Vietnam, Central Laos, Quang Tri, and the LoC from Khe Sanh to Hue (Highway 9)—even where Support or COIN Control."
			}

			,
			{id:48,
				title:"Nam Dong",
				type:"Dual",
				unshaded:"CIDG camp holds out: Remove up to 3 Gerrillas from a Province with a COIN Base. Set the space to Active Support.",
				shaded:"Camp overrun: Remove a COIN Base from a Province with 0-2 COIN cubes (US to Casualties) and set it to Active Opposition.",
				tip:"“COIN” means US or ARVN. “US to Casualties” means that any US pieces removed go to the Casualties box, while ARVN piece removed go to ARVN Available Forces as usual (1.4.1)."
			}

			,
			{id:49,
				title:"Russian Arms",
				type:"Dual",
				unshaded:"Soviet escalation matched: Place any 6 ARVN pieces anywhere in South Vietnam.",
				shaded:"Heavy divisions, big guns: NVA in any 3 spaces places enough Troops to double their number. It then free Bombards.",
				tip:"“Pieces” include Bases. For the unshaded Event, the executing Faction would decide the pieces and locations. For the shaded, NVA decides; in each selected space, place the same number of NVA Troops as are already there, then execute a Bombard Special Activity. The Bombard need not involve any of the Troops just placed."
			}

			,
			{id:50,
				title:"Uncle Ho",
				type:"Dual",
				unshaded:"Known communist: 4 out-of-play US Troops to South Vietnam, or ARVN Resources +9. ARVN executes any 2 free Limited Operations.",
				shaded:"Revolutionary unifier: VC then NVA each execute any 3 free Limited Operations.",
				tip:"The Faction executing the unshaded Event decides where the US Troops go. The Limited Operations can be the same or different, in any including the same spaces, and may be selected as they occur, so that results of previous choices may be taken into account."
			}

			,
			{id:51,
				title:"301st Supply Bn",
				type:"Dual",
				unshaded:"Combat units diverted to logistics: Remove 6 non-Base Insurgent pieces from outside South Vietnam.",
				shaded:"Trail construction unit: Improve Trail by 2 boxes and add a die roll of NVA Resources.",
				tip:"“Non-Base Insurgent pieces” include NVA Troops and NVA and VC Guerrillas."
			}

			,
			{id:52,
				title:"RAND",
				type:"Dual",
				unshaded:"Whiz-kid corporation: Flip 1 shaded US Capability to unshaded.",
				shaded:"Systems analysis in ignorance of local conditions: Flip 1 unshaded US Capability to shaded.",
				tip:"A player may execute either version (5.2), so ARVN may flip a US unshaded Capability to shaded."
			}

			,
			{id:53,
				title:"Sappers",
				type:"Dual",
				unshaded:"Ineffective tactics: Remove 2 NVA Troops each from up to 3 spaces in South Vietnam. Remain Eligible.",
				shaded:"Facilities damaged: Remove up to 1 US and 2 ARVN Bases from any Provinces (US to Casualties).",
				tip:"Removal of pieces may change Control (1.7). The Bases may not be removed from Cities. “US to Casualties” means that any US Base removed goes to the Casualties box, while ARVN Bases removed go to ARVN Available Forces as usual (1.4.1)."
			}

			,
			{id:54,
				title:"Son Tay",
				type:"Dual",
				unshaded:"Daring rescue: 2 Troop Casualties to Available. NVA Ineligible through next card. US Eligible.",
				shaded:"No prisoners there: Any 2 Casualties out of play. US Ineligible through next card.",
				tip:"For the unshaded text, place the US Eligibility Cylinder from wherever it is into the “Eligible Factions” box. If US executed the Event and ARVN 2nd Eligible, ARVN may execute Ops & Special Activity as usual."
			}

			,
			{id:55,
				title:"Trucks",
				type:"Dual",
				unshaded:"Bottlenecks: Degrade Trail 2 boxes. NVA selects and removes 4 of its pieces each from Laos and Cambodia.",
				shaded:"Convoys: Add twice Trail value to each NVA and VC Resources. NVA moves its unTunneled Bases anywhere within Laos/Cambodia.",
				tip:"For the unshaded Event, NVA may have to remove as many as 8 pieces total—4 in Laos and 4 in Cambodia; “pieces” include Bases. For shaded, NVA may pick up all its unTunneled Bases from Laos and Cambodia spaces, then replace them into any Laos and Cambodia spaces desired, within stacking (1.4.2)."
			}

			,
			{id:56,
				title:"Vo Nguyen Giap",
				type:"Dual",
				unshaded:"Premature conventional buildup: In each of any 3 spaces, replace any 2 Guerrillas with 1 NVA Troop.",
				shaded:"Military strategist: NVA free Marches into up to 3 spaces then executes any 1 free Op or Special Activity within each, if desired.",
				tip:"The 3 spaces must be 3 different spaces, not the same space more than once. The NVA would March even during Monsoon."
			}

			,
			{id:57,
				title:"International Unrest",
				type:"Dual",
				unshaded:"Protest ignored: Any 2 US Casualties to Available.",
				shaded:"US accused of neocolonialist war: 2 Available US Troops out of play. NVA add a die roll of Resources.",
				tip:"“US Casualties” may include Troops, Bases, and Irregulars."
			}

			,
			{id:58,
				title:"Pathet Lao",
				type:"Dual",
				unshaded:"Drive on Vientane: NVA removes 6 of its pieces total from North Vietnam and Laos.",
				shaded:"Trail security: If no COIN cubes in Laos, Improve Trail 2 boxes. If there are, US and ARVN Redeploy them to Vietnam.",
				tip:"“Pieces” can include Bases. “COIN” means US or ARVN. ARVN Redeploys ARVN Troops to Cities without NVA Control, any US or ARVN Bases in South Vietnam, or Saigon, and Police to LoCs or COIN Control in South Vietnam (6.4.2). US Redeploys US Troops to anywhere in South Vietnam (including LoCs, if desired)."
			}

			,
			{id:59,
				title:"Plei Mei",
				type:"Dual",
				unshaded:"CIDG interdict NVA: Remove any 3 NVA pieces from a space with or adjacent to a COIN Base.",
				shaded:"Tay Nguyen offensive: NVA free March from any spaces outside South Vietnam, then free Attack or Ambush any 1 space.",
				tip:"“COIN” means US or ARVN. For the unshaded text, “a space” means the pieces must be removed from 1 single space. “Pieces” can include Bases. For shaded, the NVA can March repeatedly from Laos/Cambodia spaces—at cost 0—If the Trail is at 1 or more and would March even during Monsoon. Any Ambushes must occur in where there is at least one NVA Guerrilla to Activate (4.4.3), but need not be in March destinations nor involve Guerrillas that Marched and could occur even if all NVA Guerrillas there were already Active."
			}

			,
			{id:60,
				title:"War Photographer",
				type:"Dual",
				unshaded:"Pulitzer photo inspires: 3 out-of-play US pieces to Available.",
				shaded:"Photos galvanize home front: NVA place 6 Troops outside South Vietnam, add +6 Resources, and, if executing, stay Eligible.",
				tip:"For the unshaded Event, Troops and Bases in US Available both affect the US Support + Available score (7.2). If NVA is the Faction executing the shaded Event, it stays Eligible."
			}

			,
			{id:61,
				title:"Armored Cavalry",
				type:"ARVN Capability",
				unshaded:"Shock force: ARVN in 1 Transport destination after Ops may free Assault.",
				shaded:"Sedentary sinecures: Transport Rangers only.",
				tip:"The unshaded “after Ops” means that the ARVN Assault occurs once all Transport and accompanying Operations are completed. Shaded effect means that no ARVN Troops—only Rangers—can move by Transport Special Activity the rest of the game."
			}

			,
			{id:62,
				title:"Cambodian Civil War",
				type:"Dual",
				unshaded:"Lon Nol deposes Sihanouk: US free Air Lifts into and US or ARVN free Sweeps within Cambodia. Remove 2 NVA/VC Bases from Cambodia.",
				shaded:"NVA invades Cambodia: NVA places a total of 12 NVA Troops and Guerrillas in Cambodia.",
				tip:"For the unshaded effect, US would decide the details of the Air Lift and whichever Faction was Sweeping would decide the Sweep’s details, including whether to move among Cambodia spaces. The Sweep could occur even during Monsoon. Tunneled Bases could not be removed (1.4.4, 5.1.1)."
			}

			,
			{id:63,
				title:"Fact Finding",
				type:"Dual",
				unshaded:"US sends study teams: 2 US pieces from out-of-play to South Vietnam, or transfer a die roll from Patronage to ARVN Resources. Aid +6.",
				shaded:"Duped: Remove Support from a COIN-Controlled City outside Saigon. Patronage +4 or VC Resources +4.",
				tip:"“Remove Support” means set either Active or Passive Support to Neutral (1.6.2). Note that either unshaded or shaded versions of the Event may be useful to the ARVN Faction."
			}

			,
			{id:64,
				title:"Honolulu Conference",
				type:"Event",
				unshaded:"Uneasy allies: Aid +10 or -10. Patronage +3 or -5. If US or ARVN executing, that Faction Pacifies as if Support Phase. If Insurgent executing, that Faction remains Eligible.",
				shaded:"",
				tip:"Either the US or the ARVN only—whichever is executing the Event—Pacifies, not one after the other as during the Support Phase (6.3.1)."
			}

			,
			{id:65,
				title:"International Forces",
				type:"Dual",
				unshaded:"Free World allies: Place 4 out-of-play US pieces onto the map.",
				shaded:"Withdrawl: US must remove a die roll in pieces from the map to out of play.",
				tip:"“Pieces” can include Bases. For the shaded text, the US decides which US pieces to remove."
			}

			,
			{id:66,
				title:"Ambassador Taylor",
				type:"Dual",
				unshaded:"Interventionist: Aid and ARVN Resources each +9. Up to 2 US pieces from out-of-play to South Vietnam or, if desired, Patronage -3.",
				shaded:"Saigon seen as US puppet: Remove Support from 3 spaces outside Saigon. Patronage -3.",
				tip:"The unshaded “if desired” means that the executing Faction may decline both the US pieces and the drop in Patronage. “Pieces” includes Bases. The shaded “remove Support” means remove any Active or Passive Support marker from the space, leaving it Neutral (1.6.2)."
			}

			,
			{id:67,
				title:"Amphib Landing",
				type:"Dual",
				unshaded:"Sea power: US or ARVN relocates any of its Troops among coastal spaces, then free Sweeps and Assaults in 1 coastal space.",
				shaded:"Enemy vanished: VC relocate up to 3 pieces from any coastal space. US and ARVN Ineligible through next card.",
				tip:"“Coastal” spaces are those touching or across a Highway from ocean (1.3.7). The Sweep could occur even during Monsoon. The named Faction decides where to relocate its pieces (VC to any map spaces). “Pieces” includes Bases."
			}

			,
			{id:68,
				title:"Green Berets",
				type:"Dual",
				unshaded:"Elite trainers: Place 3 Irregulars or 3 Rangers in a Province without NVA Control. Set it to Active Support.",
				shaded:"Reluctant trainees: Remove any 3 Irregulars to Available and set 1 of their Provinces to Active Opposition.",
				tip:"A Province with 0 Population cannot be set to Support or Opposition (1.6)."
			}

			,
			{id:69,
				title:"MACV",
				type:"Event",
				unshaded:"Military Assistance Command, Vietnam spurs coordination: Either US then ARVN or NVA then VC each executes any 1 free Special Activity. Faction executing Event stays Eligible.",
				shaded:"",
				tip:"Each Faction involved decides the details of its own Special Activity. “1 free Special Activity” means within the usual maximum number of spaces for that type of Special Activity."
			}

			,
			{id:70,
				title:"ROKs",
				type:"Dual",
				unshaded:"Tough Koreans: US or ARVN free Sweep into/in then free Assault Phu Bon and adjacent spaces as if US and as if all ARVN cubes are US Troops.",
				shaded:"UN troops abuse locals: Shift Qui Nhon, Phu Bon, and Khanh Hoa each 1 level toward Active Opposition.",
				tip:"For the unshaded text, the executing Faction picks US or ARVN and that faction decides the details of its Sweep and Assault. The Sweep could occur even during Monsoon. “Phu Bon and adjacent spaces” include Phu Bon, Qui Nhon, Binh Dinh, Kontum, Pleiku, Khanh Hoa, and—for Assault—the 3 LoCs touching Phu Bon. “As if US and as if all ARVN cubes are US Troops” means that whichever selected Faction—US or ARVN—would move and fight with all US Troops, ARVN Troops, and Police as if all those cubes were US Troops, including double enemy losses for any US Base in a space, the effects of the “Abrams” Capability if in effect, and so on. Non-player ARVN will still use Non-player ARVN priorities (8.4.4)."
			}

			,
			{id:71,
				title:"An Loc",
				type:"Dual",
				unshaded:"ARVN stand firm: In a space in the South with ARVN, remove all NVA Troops and place 3 ARVN Troops.",
				shaded:"Conventional thrust: NVA free Marches Troops into a City and free Attacks there twice.",
				tip:"“The South” means any South Vietnam spaces, including all LoCs. The NVA March could occur even during Monsoon and costs 0 but otherwise follows all March rules, including repeated moves through Laos/Cambodia if the Trail is at greater than 0 and including possibly Activating moving Guerrillas (3.3.3). The Attacks also follow the usual rule, including either using NVA Troops or Activating Attacking Guerrillas."
			}

			,
			{id:72,
				title:"Body Count",
				type:"Momentum",
				unshaded:"Crossover point: Until Coup, Assault and Patrol add +3 Aid per Guerrilla removed and cost 0. MOMENTUM",
				shaded:"\"If it's dead, it's VC\": Place 1 VC Guerrilla in each Active Opposition space. 2 NVA Troops in each Laos/Cambodia space.",
				tip:"“Cost 0” means ARVN will pay 0 Resources for these Operations, and US pays 0 even if an ARVN Assault is added as part of US Assault (3.2.4)."
			}

			,
			{id:73,
				title:"Great Society",
				type:"Dual",
				unshaded:"LBJ advances social agenda: Conduct a Commitment Phase.",
				shaded:"War wrecks economy: US moves 3 pieces from Available to out of play.",
				tip:"For the unshaded text, the US as usual decides the details of the Commitment Phase. If unshaded “Great Society” occurs while unshaded Event 15 “Medevac” is in effect, “Medevac” affects the immediate Commitment Phase and then stays in effect to affect the coming Coup Round’s Commitment Phase as well. For shaded “Great Society”, the US decides which pieces; “pieces” can include Bases."
			}

			,
			{id:74,
				title:"Lam Son 719",
				type:"Dual",
				unshaded:"Sudden incursion: Place up to 6 ARVN Troops in a Laos space. ARVN executes a free LimOp there. Degrade Trail 2 boxes.",
				shaded:"Southern escalation: NVA Resources +6 and +1 more for each ARVN piece in Laos.",
				tip:"ARVN decides the details of the LimOp"
			}

			,
			{id:75,
				title:"Sihanouk",
				type:"Dual",
				unshaded:"Pursuit operations: US or ARVN free Sweep into or in any Cambodia spaces, then free Assaults in one.",
				shaded:"Sea supply and sanctuary: VC free Rally in any Cambodia spaces then free March from any Rally spaces. Then NVA do the same.",
				tip:"Whomever the executing Faction chose to Sweep would decide the details of the Sweep and Assault. Free US Assault can add an ARVN Assault at cost 0 (3.2.4). The Sweep or March could occur even during Monsoon. The NVA March could include repeated moves from Cambodia spaces if each such space just hosted NVA Rally and if the Trail is at greater than 0 (3.3.3)."
			}

			,
			{id:76,
				title:"Annam",
				type:"Dual",
				unshaded:"North-South rivalry lingers: NVA and VC -1 Resource each per space with both. Patronage +2.",
				shaded:"Saigon regime seen as colonial retread: Remove Support from Hue, Da Nang, and an adjacent Province.",
				tip:"“Space with both” means a space with both NVA and VC pieces. “Remove Support” means set either Active or Passive Support to Neutral (1.6.2)."
			}

			,
			{id:77,
				title:"Détente",
				type:"Dual",
				unshaded:"Communist Bloc eases off of war: Cut NVA and VC Resources each to half their total (round down). 5 Available NVA Troops out of play.",
				shaded:"Nixon disappointed: NVA add +9 Resources or free Infiltrate. Then VC free Rally in up to 6 spaces.",
				tip:"This unshaded event is the only way that pieces other than US or ARVN—NVA—will occupy the Out of Play box (1.4.1). For the shaded effect, the named Faction in each case decides its details."
			}

			,
			{id:78,
				title:"General Lansdale",
				type:"Momentum",
				unshaded:"Unconventional counterinsurgent: Set a space outside Saigon with US or ARVN to Active Support. Add a Terror marker there. Patronage +1.",
				shaded:"Bureaucratic infighter: Patronage +3. No US Assault until Coup. MOMENTUM",
				tip:"A Province with 0 Population cannot be set to Support (1.6). The Terror marker would be added even if one is already in the space."
			}

			,
			{id:79,
				title:"Henry Cabot Lodge",
				type:"Dual",
				unshaded:"Ambassador proposes US protectorate: Aid +20.",
				shaded:"Internecine enabler: Remove up to 3 ARVN pieces. Patronage +2 for each. ARVN Ineligible through next card.",
				tip:"“Pieces” can include Bases."
			}

			,
			{id:80,
				title:"Light at the End of the Tunnel",
				type:"Event",
				unshaded:"Wind down seen: Remove 1-4 US pieces from map to Available. For each piece, Patronage +2, shift a space 1 level toward Active Opposition, and place 4 NVA Troops outside the South. Stay Eligible.",
				shaded:"",
				tip:"The Faction executing the Event decides the details. “Pieces” can include Bases. A Province with 0 Population cannot shift (1.6). “Outside the South” means any North Vietnam, Laos, or Cambodia Provinces. The Faction executing the Event stays Eligible for the next card."
			}

			,
			{id:81,
				title:"CIDG",
				type:"Dual",
				unshaded:"Civilian Irregular Defense Groups: Replace a die roll of VC Guerrillas in South Vietnam with Rangers, Irregulars, or Police.",
				shaded:"Desertions and defections: Replace all Rangers, Police, and Irregulars in a Highland space with 2 VC Guerrillas total.",
				tip:"For the shaded text, the Irregulars (like the Rangers and Police) go to their Available box, not to Casualties (1.4.1)."
			}

			,
			{id:82,
				title:"Domino Theory",
				type:"Dual",
				unshaded:"US justifies its war: Up to 3 US or 6 ARVN out-of-play pieces to Available. Or ARVN Resources and Aid each +9.",
				shaded:"US public doubts war's purpose: 3 Available US Troops out of play. Aid -9.",
				tip:"“Pieces” can include Bases."
			}

			,
			{id:83,
				title:"Election",
				type:"Dual",
				unshaded:"Clean vote: 3 Passive Support spaces to Active Support. Aid +10.",
				shaded:"Ballot stuffing defeats opposition candidate Druong Dinh Dzu: Shift 2 Cities each 1 level toward Active Opposition. Aid -15.",
				tip:"The spaces affected may include Saigon."
			}

			,
			{id:84,
				title:"To Quoc",
				type:"Dual",
				unshaded:"Fear of Northern reprisal: Place 1 ARVN Troop and 1 Police in each South Vietnam space with NVA.",
				shaded:"Thoroughly penetrated: ARVN remove 1 in 3 cubes (round down) each space. Place a VC Guerrilla in 3 spaces where ARVN removed.",
				tip:"For the shaded version, ARVN selects and must remove 1 in 3 of their own cubes (ARVN Troops or Police), not US or NVA. The executing Faction chooses which candidate spaces to place the VC Guerrillas."
			}

			,
			{id:85,
				title:"USAID",
				type:"Dual",
				unshaded:"Increased help to civilians: Shift 3 COIN-Controlled spaces each 1 level toward Active Support.",
				shaded:"More aid, more corruption: Increase or decrease any or all of ARVN Resources, Aid, and Patronage by 2 each.",
				tip:"A Province with 0 Population cannot shift (1.6). The shaded effect may increase some and decrease other totals and may thus be useful for any Faction."
			}

			,
			{id:86,
				title:"Mandate of Heaven",
				type:"ARVN Capability",
				unshaded:"Anger at regime suppressed: 1 Govern space may transfer Aid to Patronage without shifting Support.",
				shaded:"Communism seen in harmony with Confucius: ARVN Govern and Pacify maximum 1 space.",
				tip:"With the unshaded Capability, ARVN gets to decide each Govern space transferring to Patronage whether or not to shift. With shaded, Govern Special Activity will be “max 1” rather than “max 2” (4.3.1) and ARVN will only be able to Pacify in at most 1 of the possible US plus ARVN maximum of 4 spaces each Support Phase (6.3.1)."
			}

			,
			{id:87,
				title:"Nguyen Chanh Thi",
				type:"Dual",
				unshaded:"1 Corps Commander: Place 3 ARVN pieces within 3 spaces of Hue. Shift receiving spaces each 1 level toward Active Support.",
				shaded:"Popular general relieved: Replace any 2 ARVN with any 2 VC pieces within 2 spaces of Hue. Patronage +4 or -4.",
				tip:"A LoC or Province with 0 Population cannot shift (1.6)."
			}

			,
			{id:88,
				title:"Phan Quang Dan",
				type:"Dual",
				unshaded:"Dissident becoms RVN minister: Shift Saigon 1 level toward Active Support. Patronage +5.",
				shaded:"Oppositionist Assemblyman: Shift Saigon 1 level toward Neutral. Patronage -5. ARVN Ineligible through next card.",
				tip:"Adjust the US victory marker (Support + Available) when changing Support and the ARVN victory marker (COIN Control + Patronage) when increasing or decreasing Patronage."
			}

			,
			{id:89,
				title:"Tam Chau",
				type:"Dual",
				unshaded:"Catholic backlash: Shift Saigon 1 level toward Passive Support. Patronage +6.",
				shaded:"Saigon Buddhists find leader: Place a VC piece in and shift Saigon 1 level toward Passive Opposition. Patronage -6.",
				tip:"A Base is a “piece”."
			}

			,
			{id:90,
				title:"Walt Rostow",
				type:"Dual",
				unshaded:"COIN portfolio: Place any 2 ARVN pieces from anywhere (even out of play) into any COIN Control spaces.",
				shaded:"The enemy owns the night: Place any 1 Guerrilla in each Province with ARVN. ARVN Troops Redeploy as if no Bases.",
				tip:"“Pieces” include Bases. For the shaded effect, the Redeploy is once and immediate—ARVN Troops depart all Provinces and LoCs for Cities with no NVA Control or Saigon (6.4.2)."
			}

			,
			{id:91,
				title:"Bob Hope",
				type:"Dual",
				unshaded:"USO: Move any US Troops from a Province to a COIN Control City. For each 2 moved (round down), 1 Casualty piece to Available.",
				shaded:"Show lowers op tempo: NVA or VC move up to 3 US Troops from any Provinces to Cities, placing a Guerrilla where each Troop was.",
				tip:"“Pieces” include Bases."
			}

			,
			{id:92,
				title:"SEALORDS",
				type:"Dual",
				unshaded:"Delta strategy: ARVN the US free Sweep in place or Assault in each space adjacent to Can Tho.",
				shaded:"Sampans: NVA or VC moves any of its pieces (including unTunneled Bases) from Cambodia/Tay Ninh to spaces adjacent to Can Tho.",
				tip:"ARVN and US each decide the details of their respective Sweeps or Assaults. “Spaces adjacent to Can Tho” include the 3 Mekong river LoC spaces."
			}

			,
			{id:93,
				title:"Senator Fulbright",
				type:"Dual",
				unshaded:"Hearings stoke debate: US moves 4 US pieces from map to Available.",
				shaded:"War skeptic: 1 Available US Base out of play. Aid -9.",
				tip:"A Base is a “piece”."
			}

			,
			{id:94,
				title:"Tunnel Rats",
				type:"Event",
				unshaded:"Subterranean specialists: Place a Tunnel marker on an Insurgent Base in each of 2 Provinces, or remove 1 Tunneled Base from a space with US Troops.",
				shaded:"",
				tip:"This is one of just a few Events that can force removal of Tunneled Bases (5.1.1)."
			}

			,
			{id:95,
				title:"Westmoreland",
				type:"Dual",
				unshaded:"Root 'em out: US free Air Lifts, then Sweeps (no moves) or Assaults (no ARVN) in 2 spaces, then Air Strikes.",
				shaded:"Big-unit war bypasses population: Shift 3 Provinces with no Police each 2 levels toward Active Opposition.",
				tip:"For the unshaded effect, US decides the details of the unshaded actions, which follow the usual restrictions, except that the Sweep Op could occur even during Monsoon, Sweep is in place only because of “no moves”, and the US Assault may not add and ARVN Assault (because of “no ARVN”). Air Strike can include Degrading the Trail as usual (4.2.3). For shaded, 0 Population Provinces cannot shift from Neutral."
			}

			,
			{id:96,
				title:"APC",
				type:"Dual",
				unshaded:"Accelerated Pacification Campaign: US and ARVN immediately Pacify as if Support Phase, but cost is 0. Shift at most 1 level per space.",
				shaded:"False progress: If Tet Offensive played, return it to VC. If not, VC execute \"General uprising\" as on the card (without using it).",
				tip:"For the unshaded text, the Pacification also removes Terror markers for cost 0. For the shaded text, if Event #124 “Tet Offensive” has not been executed (including because it is not used in this scenario), execute the “Tet Offensive” Event text that follows the flavor text “General uprising”. The disposition of the “Tet Offensive” card is not affected."
			}

			,
			{id:97,
				title:"Brinks Hotel",
				type:"Dual",
				unshaded:"NLF terror reconciles GVN-US: Aid +10, or 4 Patronage to ARVN Resources. Flip any current RVN leader card -- its text is ignored.",
				shaded:"US billet car bombed: Shift a City that has VC by 2 levels toward Active Opposition and add a Terror marker there.",
				tip:"Unshaded text has no effect on “Duong Van Minh” or “Failed Attempt”; a flipped RVN leader card still counts as a card in the RVN leader box, such as for Pivotal Event pre-conditions. For shaded, any VC piece in the City—Guerrilla or Base—makes the space a candidate; the Terror marker would be added even if one is already there."
			}

			,
			{id:98,
				title:"Long Tan",
				type:"Dual",
				unshaded:"Royal Australians: Place 2 out of play US Troops into a Province or remove all Guerrillas from all Jungle with US Troops.",
				shaded:"VC strike newly arrived troops: 1 US Base and 1 US Troop in a Jungle with 2+ VC Guerrillas to Casualties.",
				tip:"For the unshaded effect, the Troops could go into any 1 Province except North Vietnam, not necessarily into Jungle."
			}

			,
			{id:99,
				title:"Masher/White Wing",
				type:"Dual",
				unshaded:"Sweep flushes enemy into kill zone: US or ARVN free Sweeps 1 non-Jungle space with US and ARVN Troops. They free Assault as US.",
				shaded:"Poor OPSEC: VC or NVA free March Guerrillas to any 3 spaces then free Ambush in each (even if Active).",
				tip:"The Sweep or Marches could occur even during Monsoon. For the unshaded text, the executing Faction picks US or ARVN and that Faction decides the details of its Sweep and Assault. US and ARVN Troops both can move and Activate Guerrillas. ARVN Troops would contribute as if US Troops, including double enemy losses for any US Base in a space, and so on. For shaded, the executing Faction picks VC or NVA and that Faction decides the details of the March and Ambush. NVA March could include multiple moves from Laos/ Cambodia spaces if the Trail is at greater than 0. The Ambushes must occur in March destinations, but need not involve Guerrillas that Marched and could occur even if all that Faction’s Guerrillas there were already Active."
			}

			,
			{id:100,
				title:"Rach Ba Rai",
				type:"Dual",
				unshaded:"Riverines hunt Charlie: Remove all VC or all non-Troop NVA from a Lowland with US Troops.",
				shaded:"VC river ambush: In a Lowland with any VC, remove a die roll of US/ARVN cubes (US to Casualties). Place 1 VC piece.",
				tip:"“A Lowland” means 1 Lowland Province. A “piece” can include a Base. “US to Casualties” means that any US pieces removed go to the Casualties box, while ARVN pieces removed go to ARVN Available Forces as usual (1.4.1)."
			}

			,
			{id:101,
				title:"Booby Traps",
				type:"VC Capability",
				unshaded:"Preparations tip off enemy: VC and NVA Ambush is max 1 space.",
				shaded:"Mines and punji: Each Sweep space, VC afterward removes 1 Sweeping Troop on roll of 1-3 (US to Casualties).",
				tip:"“US to Casualties” means that any US pieces removed go to the Casualties box, while ARVN pieces removed go to ARVN Available Forces as usual (1.4.1)."
			}

			,
			{id:102,
				title:"Cu Chi",
				type:"Dual",
				unshaded:"Clear and secure: Remove all Guerrillas from 1 space with a Tunnel and COIN Control.",
				shaded:"Iron Triangle: Place Tunnel markers on each Insurgent Base in 1 Province. Place 1 NVA and 1 VC Guerrilla there.",
				tip:"“A Tunnel” means a Tunneled Base."
			}

			,
			{id:103,
				title:"Kent State",
				type:"Dual",
				unshaded:"National Guard imposes order: Any 2 US Casualties to Available. 1 free US LimOp. US Eligible.",
				shaded:"National Guard overreacts: Up to 3 US Troop Casualties out of play. Aid -6. US Ineligible through next card.",
				tip:"For the unshaded text, place the US Eligibility Cylinder from wherever it is into the “Eligible Factions” box. If US executed the Event and ARVN 2nd Eligible, ARVN may execute Ops & Special Activity as usual."
			}

			,
			{id:104,
				title:"Main Force Bns",
				type:"VC Capability",
				unshaded:"Larger footprints: March into Support/LoC Activates if moving plus non-Base COIN >1 (vice >3).",
				shaded:"Hard-hitting guerrillas: 1 VC Ambush space may remove 2 enemy pieces.",
				tip:"The shaded Capability will enable each VC Ambush Special Activity to remove up to a total of 3 enemy pieces between its maximum 2 spaces."
			}

			,
			{id:105,
				title:"Rural Pressure",
				type:"Dual",
				unshaded:"Onerous VC Taxation: Shift 4 Provinces with any VC each by 1 level toward Active Support.",
				shaded:"Local government corruption: Shift 3 Provinces with Police each by 1 level toward Active Opposition. Patronage +6 or -6.",
				tip:"A Province with 0 Population cannot be shifted from Neutral (1.6)."
			}

			,
			{id:106,
				title:"Binh Duong",
				type:"Event",
				unshaded:"Revolutionary land reform seeks traction in prosperous districts: In each of 2 Provinces adjacent to Saigon, shift Support/Opposition 1 level either direction and place a VC Guerrilla or Police.",
				shaded:"",
				tip:"Shifting toward Opposition and placing Police would be a legal (if unusual) move."
			}

			,
			{id:107,
				title:"Burning Bonze",
				type:"Dual",
				unshaded:"Gruesome protests close elite ranks: Patronage +3 or, if Saigon at Active Support, +6.",
				shaded:"Anti-regime self-immolation: Shift Saigon 1 level toward Active Opposition. Aid -12.",
				tip:"Adjust the ARVN victory marker (COIN Control + Patronage) when increasing or decreasing Patronage, the US victory marker (Support + Available) if changing Support, and the VC victory marker (Opposition + Bases) if adding Opposition."
			}

			,
			{id:108,
				title:"Draft Dodgers",
				type:"Dual",
				unshaded:"Public furor sparks enlistment: If fewer than 3 Casualty pieces, 3 US Troops from out of play to Available.",
				shaded:"Recruiting sags: Move 1 US Troop per Casualty piece, to a maximum of 3, from Available to out of play.",
				tip:"“Pieces” include Bases."
			}

			,
			{id:109,
				title:"Nguyen Huu Tho",
				type:"Dual",
				unshaded:"Party control of NLF draws anti-communist reaction: Shift each City with VC 1 level toward Active Support.",
				shaded:"National Liberation Front leader: Place a VC Base and a VC Guerrilla in Saigon. Stay Eligible.",
				tip:"The VC Base cannot be placed if there are already 2 of any Factions’ Bases in Saigon (1.4.2, 5.1.1)."
			}

			,
			{id:110,
				title:"No Contact",
				type:"Dual",
				unshaded:"Respite: Place 2 Casualties onto the map. All Rangers and Irregulars underground.",
				shaded:"Charlie bugs out: Flip all VC and NVA Guerrillas Underground.",
				tip:"The unshaded text allows selection of any 2 pieces from the Casualties box—Troops, Irregulars, or Bases—and their placement into any map spaces where they may stack (1.4.2)."
			}

			,
			{id:111,
				title:"Agent Orange",
				type:"Dual",
				unshaded:"Counter-sanctuary chemical: All Insurgents in Jungle go Active. US free Air Strikes among up to any 2 Jungle spaces (no effect on Trail).",
				shaded:"Industrial defoliation: Shift each Jungle and Highland with Insurgents 1 level toward Active Opposition.",
				tip:"For the unshaded text, the US decides the details of the Air Strike but may not Degrade the Trail. For shaded, a Province with 0 Population cannot be shifted from Neutral (1.6)."
			}

			,
			{id:112,
				title:"Colonel Chau",
				type:"Dual",
				unshaded:"Census-grievance terms: Place 1 Police into each of 6 Provinces.",
				shaded:"Local Viet Minh tradition: Shift 3 Provinces with ARVN each 1 level toward Active Opposition. Place a VC Guerrilla in each.",
				tip:"A Province with 0 Population cannot be shifted from Neutral (1.6)."
			}

			,
			{id:113,
				title:"Ruff Puff",
				type:"Dual",
				unshaded:"RFIPF--Regional and Popular Forces: Place up to 8 Police in the South.",
				shaded:"Ill-traned, thoroughly subverted: Replace 5 Police outside Cities with 1 VC piece each -- 1 of the VC pieces may be a Base.",
				tip:"In the unshaded text, “in the South” means into any spaces in South Vietnam, including any LoCs. For shaded, only 1 VC piece placed may be a Base, the others must be Guerrillas."
			}

			,
			{id:114,
				title:"Tri Quang",
				type:"Dual",
				unshaded:"Buddhists counter Communists: Set up to 3 Neutral or Opposition Cities to Passive Support.",
				shaded:"People's Revolutionary Committee: Shift Hue, Da Nang, and Saigon 1 level toward Active Opposition. Place a VC piece in Saigon.",
				tip:"A “piece” may be a Base."
			}

			,
			{id:115,
				title:"Typhoon Kate",
				type:"Momentum",
				unshaded:"Year of storms: Until Coup, no Air Lift, Transport, or Bombard, and all other Special Activities are maximum 1 space. Executing Faction stays Eligible. MOMENTUM",
				shaded:"",
				tip:"When “Typhoon Kate” is in effect during Monsoon, no Air Lift is allowed, and Air Strike is limited to 1 space not 2 (5.1.1)."
			}

			,
			{id:116,
				title:"Cadres",
				type:"VC Capability",
				unshaded:"Manpower to political sections: VC to Terror or Agitate must remove 2 VC Guerrillas per space.",
				shaded:"NLF village committees: VC Rally in 1 space where VC already had a Base my Agitate as if Support Phase even if COIN Control.",
				tip:"For the unshaded effect, if VC have fewer than 2 Guerrillas in a space, they may not execute Terror or Agitate there, until they do have 2 Guerrillas there to remove."
			}

			,
			{id:117,
				title:"Corps Commanders",
				type:"Dual",
				unshaded:"ARVN general takes initiative: ARVN places 3 of its Troops from out of play or Available into 1 or 2 adjacent spaces then free Sweeps each.",
				shaded:"Corps CO ignores Saigon: Remove a die roll of ARVN pieces from 1 or 2 adjacent spaces. ARVN Ineligible through next card.",
				tip:"For the unshaded text, the ARVN Faction decides from and to where to place the Troops."
			}

			,
			{id:118,
				title:"Korean War Arms",
				type:"Dual",
				unshaded:"Obsolete: VC must remove 1 VC Guerrilla from each space with at least 2 and no NVA Base.",
				shaded:"NLF gets US arms captured in Korea: Place any 1 VC piece in each of 3 spaces.",
				tip:"For the unshaded text, because VC are deciding on removal, they may remove Active rather than Underground VC Guerrillas. For shaded, a “piece” may be a Base."
			}

			,
			{id:119,
				title:"My Lai",
				type:"Dual",
				unshaded:"US LT convicted: 2 Available US Troops out of play. Patronage +2.",
				shaded:"Massacre: Set a Province with US Troops to Active Opposition. VC place a Base and Guerrilla there. Aid -6.",
				tip:"Provinces with 0 Population do not shift from Neutral."
			}

			,
			{id:120,
				title:"US Press Corps",
				type:"Dual",
				unshaded:"Initial support: Move US pieces from out of play to map -- 4 if 0-2 card in RVN Leader box, 2 if 3-5.",
				shaded:"Building skepticism: US Troop Casualties up to cards in RVN Leader box plus all US Base Casualties go out of play.",
				tip:"“Pieces” can include Bases. For the shaded text, count the number of Coup cards (including any “Failed Attempt” cards) in the RVN Leader box: the executing Faction selects that number of non-Base pieces in the Casualties box—in addition to all Bases there—to move to the Out of Play box."
			}
			,
			{id:121,
				title:"Linebacker II",
				type:"Pivotal Event",
				unshaded:"Unrestricted air war: NVA removes 2 Bases, Resources -15, Ineligible through next card. 6 Casualties or 3 US out of play to Available.",
				shaded:"",
				tip:"Do not count Duong Van Minh—an RVN leader but not a card—for the precondition (2.4.1). The NVA Faction decides which 2 of its Bases to remove, then loses 15 Resources and is marked Ineligible. The US decides which Casualties or US out-of-play pieces (including Bases) then move to Available."
			}

			,
			{id:122,
				title:"Easter Offensive",
				type:"Pivotal Event",
				unshaded:"Invasion: NVA free Marches. Then NVA Troops on LoCs with no US/ARVN may move 1 space. Then all NVA Troops free Attack.",
				shaded:"",
				tip:"Do not count Minh as a card for the precondition. “On map” means in South Vietnam, North Vietnam, Laos, and Cambodia combined. NVA March may include the usual multiple moves in or out of Laos/Cambodia spaces (unless the Trail is at “0”, 3.3.2). NVA Troops must Attack wherever there are enemies; NVA Guerrillas may March but do not Attack."
			}

			,
			{id:123,
				title:"Vietnamization",
				type:"Pivotal Event",
				unshaded:"Mechanization: +12 ARVN Resources. +12 Aid. All out-of-play ARVN Available. Place 4 ARVN cubes anywhere.",
				shaded:"",
				tip:"Do not count Minh as a card for the precondition. “On map” means in South Vietnam, Laos, and Cambodia combined."
			}

			,
			{id:124,
				title:"Tet Offensive",
				type:"Pivotal Event",
				unshaded:"General uprising: Free Terror with 1 Underground VC per space. Place 6 VC pieces in any Cities. VC+NVA Guerrillas free Attack where enemies (remove VC first).",
				shaded:"",
				tip:"Do not count Minh as a card for the precondition. “In South” means among all South Vietnam spaces, including all LoCs. Carry out the steps in order. Terror is mandatory wherever Underground VC Guerrillas—even if no shift will benefit the VC—Activating 1 Underground VC Guerrilla each such space. If Terror markers will run out, it is up to the VC (random if Non-player) to decide the order of Terror spaces. Attacks are mandatory where VC or NVA Guerrillas are located with any enemies, Activating all those Guerrillas, and include VC who just executed Terror. If both VC and NVA Guerrillas occupy such a space, add their numbers together to determine the die roll needed for success, removing VC before NVA if possible when US Troop or Base losses result in Attrition (3.3.3)."
			}

			,
			{id:125,
				title:"Coup! Nguyen Khanh",
				type:"Coup",
				unshaded:"Corps commanders ascendant: Transport uses max 1 LoC space.",
				shaded:"",
				tip:"“Nguyen Khanh” restricts Transport throughout the coming campaign, until Khanh is replaced by a Coup card other than “Failed Attempt” (2.4.1). Usually, Transport can move ARVN Troops and Rangers through a string of LoCs and Cities, but “Khanh” limits such strings may include only 1 LoC space each Transport Special Activity (4.3.2)."
			}

			,
			{id:126,
				title:"Coup! Young Turks",
				type:"Coup",
				unshaded:"Thi, Ky, & Thieu wag the US dog: Each ARVN Govern Special Activity adds +2 Patronage.",
				shaded:"",
				tip:"The bonus Patronage is +2 per each occasion of a Govern Special Activity, not per space."
			}

			,
			{id:127,
				title:"Coup! Nguyen Cao Ky",
				type:"Coup",
				unshaded:"Brash brass Ky: Pacification costs 4 Resources per Terror or level.",
				shaded:"",
				tip:"The 4-Resource Pacification cost replaces the usual 3‑Resource cost, for both US and ARVN, in the following Support Phase and during the coming campaign."
			}

			,
			{id:128,
				title:"Coup! Nguyen Van Thieu",
				type:"Coup",
				unshaded:"Stabilizer: No effect.",
				shaded:"",
				tip:"“Nguyen Van Thieu” cancels the effect of the previous leader."
			}

			,
			{id:129,
				title:"Coup! Failed Attempt",
				type:"Coup",
				unshaded:"Desertion: ARVN removes 1 in 3 of its cubes per space (round down). Place below any RVN Leader card.",
				shaded:"",
				tip:"In contrast to the other Coup cards, “Failed Attempt” has an immediate not lasting effect. The ARVN Faction removes its cubes—adjusting Control accordingly (1.7)—before the Coup Round commences with the Victory Phase. After carrying out that effect, place the “Failed Attempt” card underneath the top card in the RVN Leader box, or just in the box if no card is yet there. “Failed Attempt” cancels only “Duong Van Minh” (resulting in no lingering effect at all). It leaves any other RVN Leader still in effect. Each played “Failed Attempt” nevertheless counts as a card in the RVN Leader box (such as for Pivotal Event preconditions, 2.3.8)."
			}

			,
			{id:130,
				title:"Coup! Failed Attempt",
				type:"Coup",
				unshaded:"Desertion: ARVN removes 1 in 3 of its cubes per space (round down). Place below any RVN Leader card.",
				shaded:"",
				tip:"In contrast to the other Coup cards, “Failed Attempt” has an immediate not lasting effect. The ARVN Faction removes its cubes—adjusting Control accordingly (1.7)—before the Coup Round commences with the Victory Phase. After carrying out that effect, place the “Failed Attempt” card underneath the top card in the RVN Leader box, or just in the box if no card is yet there. “Failed Attempt” cancels only “Duong Van Minh” (resulting in no lingering effect at all). It leaves any other RVN Leader still in effect. Each played “Failed Attempt” nevertheless counts as a card in the RVN Leader box (such as for Pivotal Event preconditions, 2.3.8)."
			}
		];
		return c;
	}
}

export default deck;









